import React, { useEffect, useState } from 'react';
import { consumir } from '../api/comentarios';

export function Comentarios() {
    const [listComments, setListComments] = useState([]);
    useEffect(() => {
        const peticion = async () => {
            const data = await consumir();
            setListComments(data);
        }
        peticion();
    },[])

    return (
        <div>
            {
                listComments.map(comm => <p>{comm.body}</p>)
            }
        </div>
    )
}