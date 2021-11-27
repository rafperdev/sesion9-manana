import React from 'react';

export function ProductList() {
    const listado = JSON.parse(localStorage.getItem("listaProductos"));
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    listado.map(pro => <tr>
                        <td>{pro.nom}</td>
                        <td>{pro.pre}</td>
                        <td>{pro.stock}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}