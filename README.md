# Autocomplete

API con punto de enlace único (/search) consumido mediante el verbo GET y que admite los parametros q, latitude y longitude
mediante los cuales se realiza la busqueda de ciudades cuyo nombre coincida o se asemeje a la cadena de busqueda (q)
dicha busqueda se realiza dentro de los paises Canada y Estados Unidos devolviendo un objeto con el nombre, latitud y longitud
del listado de ciudades.

## Install

```shell
npm install --save-dev --save-prod
```

## Use

Se necesita una cuenta ~ *libre* ([signup](http://www.geonames.org/login)).
Se configura en el archivo dentro de *env*

```json
...
"GEO_USR": "username",
...
```

Una vez configurado se incia el proyecto local exponiendo el endpoint http://localhost:3000/dev/search
```shell
node_modules/.bin/serverless offline --stage dev
```
## Notas

En la descripcion del proyecto se habla sobre revisar un folder con archivos JSON los cuales no se proporcionaron es por ello que se opta
por hacer uso directo de los webservice de geonames.org

## Ejemplos

### JavaScript - fetch
```javascript
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("http://localhost:3000/dev/search?q=xxx&latitude=xx.xxxx&longitude=-xx.xxxx", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
```
### NodeJs - axios

```javascript
var axios = require('axios');

var config = {
    method: 'get',
    url: 'http://localhost:3000/dev/search?q=xxx&latitude=xx.xxxx&longitude=-xx.xxxx',
    headers: {}
};

axios(config)
.then(function (response) {
    console.log(JSON.stringify(response.data));
})
.catch(function (error) {
    console.log(error);
});
```