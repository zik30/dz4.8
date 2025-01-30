import style from "./Pagination.module.scss"


function Pagination ({next, prev, page})  {
    return (
        <div className={style.wrapper}>
            <button className={style.btn} onClick={prev}>Prev</button>
            <div className={style.btn}>
                <p>{page}</p>
            </div>
            <button className={style.btn} onClick={next}>Next</button>
        </div>
    );
}

export default Pagination