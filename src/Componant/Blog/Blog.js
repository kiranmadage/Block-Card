import React from "react";
import './Blog.css'
import { Link } from 'react-router-dom'



export function Card({ img, name, price, size,id }) {

    return (
        <>
            <Link to={`/Info/${id}`}>
                <div className={`maincard bg-${name}`}>

                    <img className="img" src={img}></img>

                    <h1 className="text">{name}</h1>

                    <h2 className="text">{price}</h2>

                    <h2 className="text">{size}</h2>


                </div>

            </Link>
        </>
    )
}