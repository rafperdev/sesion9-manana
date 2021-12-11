import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Ventas() {
    const [listadoProducto, setListadoProducto] = useState([]);
    const totalRef = useRef();
    const prodRef = useRef();
    useEffect(() => {
        fetch("http://localhost:8081/producto/listar")
            .then(res => res.json())
            .then(res => {
                if (res.estado == "ok")
                    setListadoProducto(res.data);
            }).catch(error => console.log(error))
    }, []);

    function guardar() {
        const total = totalRef.current.value;
        const producto = prodRef.current.value;
        fetch("http://localhost:8081/venta/save", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ total, producto })
        }).then(res => res.json())
            .then(res => {
                alert(res.msg);
            }).catch(error => console.log(error))
    }

    return (
        <form action="">
            <select ref={prodRef} className="form-control" name="" id="">
                <option value="0">-- Seleccione --</option>
                {
                    listadoProducto.map(p => <option key={p._id} value={p._id}>{p.nombre}</option>)
                }
            </select>
            <label htmlFor="">Total</label>
            <input ref={totalRef} type="text" className="form-control" />
            <Link className="btn btn-primary" to="/ventas/listar">Listar</Link>
            <button className="btn btn-primary" type="button" onClick={guardar}>Guardar</button>
        </form>
    )
}