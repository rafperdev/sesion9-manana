import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export function Productos() {
    let listado;
    const nomRef = useRef(); //document.getElementById()
    const preRef = useRef();
    const stockRef = useRef();
    const [success, setSuccess] = useState(false);
    const guardar = () => {
        const nom = nomRef.current.value;
        const pre = preRef.current.value;
        const stock = stockRef.current.value;
        //{nom:nom,pre:pre,stock:stock}
        const prod = { nom, pre, stock }
        listado = JSON.parse(localStorage.getItem("listaProductos")) || [];
        listado.push(prod);
        localStorage.setItem("listaProductos", JSON.stringify(listado));
        nomRef.current.value = "";
        preRef.current.value = "";
        stockRef.current.value = "";
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000)
    }
    return (
        <form>
            {success && <div class="alert alert-success" role="alert">Guardado con éxito!
            </div>}
            <label htmlFor="">Nombre</label>
            <input ref={nomRef} className="form-control" type="text" />
            <label htmlFor="">Precio</label>
            <input ref={preRef} className="form-control" type="text" />
            <label htmlFor="">Stock</label>
            <input ref={stockRef} className="form-control" type="text" />
            <button className="btn btn-primary" type="button" onClick={guardar}>Guardar</button>
            <Link className="btn btn-primary" to="/producto/lista" >Listar</Link>
            <Link to="/comments" >Comentarios</Link>
        </form>
    )
}