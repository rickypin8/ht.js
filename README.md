# ht.js
Librería JavaScript para hacer tablas con datos JSON

Es la primera versión de ht.js.

la funcion principal es:
```JavaScript
hTableWithJsonObject({
		idTarget: 'table',      // Es el id de la etiqueta destino donde la tabla se inserta Ej.<div id='table'></div>
		data:     telefonos,    // Es la información en formato JSON para generar tu tabla
		tIndex:   true,         // tIndex es true cuando quieres que tu tabla se muestre con el indice del registro.
		classes:  'table etc',  // classes que se agregan directamente a la etiqueta <table class=" table "></table>
		idTable:  'myTable',    // Para agregar un id a la tabla <table id='myTable'></table>
<		autoId:   false,        // true para generar un auto id a la tabla <table id='tbTelefonos'></table>
		customHeaders:['Contacto','Teléfono'] // Para cambiar el titulo de las columnas
	})
```
# Estructúra del objeto Json
```javascript
var telefonos =
```

```json
{
      "telefonos":[
          {
              "Contacto":"Carlos",
              "Telefono":"001123354"
          },
          {
              "Contacto":"María",
              "Telefono":"001123354"
          },
          {
              "Contacto":"Pedro",
              "Telefono":"001123354"
          },
          {
              "Contacto":"Rosa",
              "Telefono":"001123354"
          },  
      ]
}
```


# El resultado final sería el siguiente
![ok](https://raw.githubusercontent.com/rickypin8/ht.js/master/EjTabla.PNG)
