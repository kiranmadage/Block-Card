import { Card } from "../../Componant/Blog/Blog";
import cardinfo from './Block.json';


export function Mcard(){
    return(
        <>
        {
            cardinfo.map(
                (data)=>{
                    return(
                        <Card id={data.id} img={data.img} name={data.name} price={data.price} size={data.size} pimg={data.pimg} mname={data.mname} free={data.free} cprice={data.cprice} discount={data.discount} />
                    )
                }
            )
        }
        
        </>
    )
}