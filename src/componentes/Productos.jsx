import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { consumir } from '../api/comentarios';

export function Productos() {
    let listado;
    const nomRef = useRef(); //document.getElementById()
    const preRef = useRef();
    const stockRef = useRef();
    const [success, setSuccess] = useState(false);
    const guardarCache = () => {
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
    // useEffect(() => {
    //     const peticion = async () => {
    //         const data = await consumir();
    //         nomRef = data.nom;
    //         // setListComments(data);
    //     }
    //     peticion();
    // },[])
    function consultar() {
        const nom = nomRef.current.value;
        fetch(`http://localhost:8081/producto/consultar/${nom}`)
            .then(data => data.json())
            .then(data => {
                if (data.estado === "ok") {
                    preRef.current.value = data.prod.price;
                    stockRef.current.value = data.prod.stock;
                } else {
                    alert(data.msg);
                }
            })
    }

    function guardar() {
        const nom = nomRef.current.value;
        const pre = preRef.current.value;
        const stock = stockRef.current.value;
        fetch(`http://localhost:8081/producto/guardar`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ nombre: nom, precio: pre, stock })
        }).then(data => data.json())
            .then(data => {
                setSuccess(true);
                setTimeout(() => setSuccess(false), 2000);
            })
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
            <button className="btn btn-primary" type="button" onClick={consultar}>Consultar</button>
            <Link className="btn btn-primary" to="/producto/lista" >Listar</Link>
            <Link to="/comments" >Comentarios</Link>
        </form>
    )
}