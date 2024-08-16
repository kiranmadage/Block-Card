import { useParams } from 'react-router-dom'
import cardinfo from './Block.json';
import './Info.css'
import { useState } from 'react';



export function Info() {
    const { id } = useParams()

    const [count, setCount] = useState(1);

    function Dec() {
        if(count>1)
        setCount(count-1);
    }

    function Inc() {
        setCount(count + 1)
    }

    return (
        <>
            {
                cardinfo.map(
                    (data) => {
                        if (data.id == id)
                            return (
                                <>

                                    <img className='img1' src={data.pimg}></img>

                                    <h2 className="name">{data.mname}</h2>
                                    <h2 className="name">{data.free}</h2>
                                    <h2 className="name"> ₹ {data.cprice * count} </h2>
                                    <h2 className='dis name'>{data.discount}</h2>

                                    <hr></hr>

                                    <div className="div">
                                        <h2>Select Size</h2>
                                        <button className="size">S</button>
                                        <button className="size">M</button>
                                        <button className="size">L</button>
                                        <button className="size">Xl</button>

                                    </div>
                                    <div className='div2'>
                                        <div className='button'><button onClick={Dec}>-</button></div>
                                        <div className='button h1'><h1>{count}</h1></div>
                                        <div className='button'><button onClick={Inc}>+</button></div>
                                        <hr></hr>
                                    </div>
                                    <hr></hr>



                                </>
                            )
                    }
                )
            }
        </>
    )
}