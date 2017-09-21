/*
	Objeto parametros
	{
		idTarget ='#idDestino'   Es el elemento target que va a contener la tabla ej: <div id="tbl"></div>
		classes  = asigna las clases a la etiqueta <table>
		idTable  = se le asigna un id a la tabla
		customHeaders = Array! ['h1','h2']
		data	 = datos {  }
		autoId?   = true/false crea un nuevo id para la tabla table{nombre del data object}
		tIndex? = true
	}
*/
/* creamos el objeto style y le agregamos estilos */
var tStyle=document.createElement('STYLE')
var tStyleCss=document.createTextNode('table,td,tr,th{border: 1px solid black} ')
tStyle.appendChild(tStyleCss)
const prefixAutoIdTable="tb"

function hTableWithJsonObject(param){
	if(param == undefined){
		console.error('No parameters')
	}else{
		/* Target donde entrará la tabla*/
		var target=document.getElementById(param.idTarget)

		/*Mientras el target tiene nodos, elimina todos los nodos dentro del target */
		while(target.hasChildNodes()){
			target.removeChild(target.firstChild)
		}
		/*Se agregan los estilos para ver la estructura de la tabla*/
		target.appendChild(tStyle)
		/* Se genera la etiqueta <table>*/
		var table = document.createElement('table')

		/* se obtiene el nombre del arreglo ej : datos: [ { n:'a' },{ n:'b' },{ n:'c'} ], obtenemos "datos" como string*/
		var strRegParent=Object.keys(param.data)[0]
		var arrayColumnHeaders=param.customHeaders != undefined ? param.customHeaders : Object.keys(param.data[strRegParent][0])

		var datos=param.data[strRegParent]
		/* se le agregan param a la tabla tales como las classes y el id de la tabla ( opcional ) */
		if(param.classes != undefined)table.className=param.classes
		if(param.autoId != undefined && param.autoId==true)table.id=prefixAutoIdTable+strRegParent
		if(param.idTable != undefined)table.id=param.idTable

		/* Se genera una cabecera */
		var tHead = document.createElement('thead')

		/* Se genera un cuerpo */
		var tBody = document.createElement('tbody')

		/* Se genera un Row en el Head <tr> inside <thead> */
		var trHead = document.createElement('tr')
		if (param.tIndex != undefined && param.tIndex==true){
			var th = document.createElement('th')
			th.innerText='#'
			trHead.appendChild(th)
		}
		/* Se llena el Row(tr) del thead con los HEADERS */
		for(var i = 0;i < arrayColumnHeaders.length; i++){
			/* Se generan los th por cada header */
			var th = document.createElement('th')
			th.innerText=arrayColumnHeaders[i]
			trHead.appendChild(th)
		}
		/*se agregan todos los headers de la tabla(th)*/
		tHead.append(trHead)
		/*se recorre la data*/
		for(var i = 0; i < datos.length; i++){
			var tr = document.createElement('tr')//Se crean los tr(table row) del tBody
			if (param.tIndex != undefined && param.tIndex==true){
				var td = document.createElement('td')
				td.innerText=i+1
				tr.appendChild(td)
			}
			for(var j = 0;j < Object.keys(datos[i]).length; j++){
				var td = document.createElement('td')//se generan los td para cada tr
				td.innerText=Object.values(datos[i])[j]
				tr.appendChild(td)//se agrega cada td al tr
			}
			tBody.appendChild(tr)//se agrega cada tr al tBody
		}
		table.append(tHead,tBody)
		target.append(table)//agregar tabla al target
		return table
	}
}
