/*primero "npm init" 
segundo "npm install express --save"
tercero "npm install nodemon" 
despues "npx nodemon" para que corra en el servidor
*/ 

const express = require ("express");
const path = require("path");
const app = express();


const publicPath = path.resolve(__dirname, "./public"); /* me busca la direccion de /public */
const port = process.env.PORT || 3000

app.use ( express.static(publicPath));

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto 3000")
}); /* recerva la terminal local para este proyecto */

app.get("/", (req, res) => {  /* en el "/" va "/home" "/carrito" ...  */
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})  /* renemos que hacer esto para cada pagina que linkea "home" "log in" "carrito" "descripcion" */
app.get("/register", (req, res) => {  
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})
app.get("/login", (req, res) => {  
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})