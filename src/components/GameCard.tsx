export function GameCard({cover}: IGameCard) {
    return (
        <article className="card">
            <div className="card__cover">
                {cover && <img src ={cover.url} alt = {cover.alternativeText} />}
                <span>Название</span>
                {rating && <b className="card__rating">{rating}</b>}
            </div>

            <div className="card__body">
                <h3>Название</h3>
                <p className="card__meta">Жанр, год</p>
                <p className="card__desc">Описание</p>
                <p className="card__platforms">Платформы</p>
            </div>

            <footer className="card__footer">
                <strong className="free">Бесплатно</strong>
                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
