import React from 'react'

export default function ListaUsuario({usuario}) {

    const {rol, setRol} = useState(usuario.rol)

    let cambiarRol = (seleccion) => {
        setRol(seleccion.target.value)
    }
    let nuevoRol


  return (
    <div>
        <h1>Lista de Usuarios</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol Actual</th>
                <th>Accion</th>
            </tr>
            <tr>
                <th>{usuario.id}</th>
                <th>{usuario.nombre}</th>
                <th>{usuario.email}</th>
                <th></th>

            </tr>
        </table>
        <dialog id="modalCambiarRol">
            <h1>Cambiar Rol de {usuario.nombre}</h1>
            <section>
                <h3>Rol Actual: {usuario.rol}</h3>
                <select value={rol} name="nuevo-rol" id="seleccionar-rol" onChange={cambiarRol}>
                    <option value="administrador">Administrador</option>
                    <option value="instructor">Instructor</option>
                    <option value="usuario">Usuario</option>
                    <option value="profesional">Profesional</option>
                </select>

                {
                    
                }

            </section>

        </dialog>

    </div>
  )
}
