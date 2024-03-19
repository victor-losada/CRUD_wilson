import { Router } from "express";
import { listarById} from "../controllers/UserController.js";
import { listarUsuario,RegistrarUsuario,EliminarUsuario } from "../controllers/UserController.js";

const rutaUser = Router()

rutaUser.get('/listar', listarUsuario)
rutaUser.post('/registrar', RegistrarUsuario)
rutaUser.delete('/eliminar/:id_usuario', EliminarUsuario)
rutaUser.get('/listaru/:id/user', listarById)


export default rutaUser