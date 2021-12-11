import React, { useEffect, useState } from "react";

export function VentasListado() {
    const [listadoVentas, setListadoVentas] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8081/venta/listar")
            .then(res => res.json())
            .then(res => {
                if (res.estado == "ok")
                    setListadoVentas(res.data);
            }).catch(error => console.log(error))
    }, []);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {listadoVentas.map(v => <tr><td>{v.producto.nombre}</td><td>{v.total}</td> </tr>)}
            </tbody>
        </table>
    )
}