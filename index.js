import { servidor } from "./config.js"
let carrito =[
    {nombre: "aceite",precio:200},
    {nombre: "manteca",precio:100}
]
servidor.get("/", (req, res) => {
    res.render("index.hbs",{carrito})
})
servidor.get("/carrito")