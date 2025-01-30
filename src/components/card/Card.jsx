import style from "./Card.module.scss"
import {useEffect, useState} from "react";
import axios from "axios";

function Card({info}){
    const [img, setImg] = useState('')

    const getImg = async ()=>{
        const response = await axios.get(info.url)
        setImg(response.data.sprites.other.dream_world.front_default)
    }

    useEffect(() => {
        getImg()
    }, [info.url]);




    return(
        <div>
            <div className={style.card}>
                <img src={img} alt="pokemon"/>
                <h2>{info.name}</h2>
                <button>Подробнее</button>
            </div>
        </div>
    )
}

export default Card