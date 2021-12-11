import React from "react";
import { Link } from 'react-router-dom';

export function Home() {
    return(
        <>
       <Link className="btn btn-primary" to="/producto" >Productos</Link>
       <Link className="btn btn-primary" to="/ventas" >Ventas</Link>
        </>
    )
}