import { json } from "express";
import { conexion } from "../database/database.js";


export const listarUsuario = async (req, res) => {

    try {
        let sql = "select * from usuarios"
        const [resultado] = await conexion.query(sql)
        res.status(200).json(resultado)
    } catch (error) {
        res.status(500).json({ "mensaje": "error en consultar tabla de usuarios", error })
    }
}

export const RegistrarUsuario= async(req,res)=>{
try{
let {nombres,direccion,telefono,correo,rol}=req.body
let sql=`insert into usuarios (nombres,direccion,telefono,correo,rol)
values ('${nombres}','${direccion}','${telefono}','${correo}','${rol}')`
const[respuesta]=await conexion.query(sql);
if(respuesta.affectedRows>0){
    return res.status(200).json({"message":"se registro correctamente el usuario"})
}
else{
    return res.status(404).json({"message":"no se registro correctamente el usuario"})
}
} catch(error){
   return res.status(500).json({"menssage":"error al  conectar con la base de datos videojuegos "+error.message})
}


}


export const EliminarUsuario= async(req,res)=>{
try {
    let idUsuario=req.params.id_usuario;
let sql=`delete from usuarios where idusuario=${idUsuario}`;
const[respuesta]=await conexion.query(sql);

if(respuesta.affectedRows>0){
    return res.status(200).json({"message":"se elimino el usuario con exito "})
}
else{
    return res.status(404).json({"message":"no se elimino con exito el usuario"})
}
} catch (error) {
    return res.status(500).json({"message":"error"+error.menssage})
}
}


export const listarById = async (req, res) => {
    try {

        let id = req.params
        let sql = `select * from usuarios where =${id}`

        const [resultado] = await conexion.query(sql)

        res.status = 200
        res.json(resultado)

    } catch (error) {
        res.status = 500
        res.json({ 'mensaje': 'error al buscar al usuario', error })
    }
}