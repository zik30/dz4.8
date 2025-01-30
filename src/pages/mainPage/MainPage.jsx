import styles from "./MainPage.module.scss"
import Card from "../../components/card/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "../../components/pagination/Pagination";


function MainPage(){

    const URL = "https://pokeapi.co/api/v2/pokemon/"

    const [cards, setCards] = useState([])
    console.log(cards, 'card')
    const [offset, setOffset] = useState(0)
    const limit = 12
    const page = offset / limit + 1

    const handlePrev= () => {
        if (offset > 0 ) setOffset(prevState => prevState - limit)
    }
    const handleNext= () => {
        setOffset(prevState => prevState + limit)
    }

    const getAxios = async() => {
        const response = await axios.get(`${URL}?limit=${limit}&offset=${offset}`);
        console.log(response.data.results, 'getAxios');
        return response.data.results;
    };



    useEffect(() => {
        getAxios().then(data => setCards(data))
    }, [offset]);

    return(
        <div>
            <h1 className={styles.title}>Pokemon</h1>
            <div className={styles.cards}>
                {cards.map((card, id) =>
                    <Card key={id} info={{
                        name: card.name,
                        url: card.url
                    }}/>

                )}
            </div>
            <Pagination prev={handlePrev} page={page} next={handleNext}/>

        </div>
    )
}

export default MainPage