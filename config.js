import express from "express"
import hbs from "hbs"
import { fileURLToPath } from "url" // para obtener las rutas del archivo actual
import { dirname } from "path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const servidor = express()
servidor.listen(80)
servidor.set("view engine", "hbs")
servidor.use(express.static(`${__dirname}/publicos`))

export{
    servidor
}