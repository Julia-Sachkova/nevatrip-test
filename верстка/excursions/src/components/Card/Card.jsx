import './Card.css';

import { useState } from 'react';

import check from '../../images/check.svg';
import ruble from '../../images/ruble.png';
import clock from '../../images/clock.svg';

export default function Card({ src, spanText, duration, description, list, times, price, onPier }) {
    const [addTimes, setAddTimes] = useState(false);

    const excursionTimes = times.map((time, index) => (
        <div className="card__time" key={index}>
            {time}
        </div>));

    function handleAddTimes() {
        setAddTimes(true);
    }

    return (
        <article className="card">
            <img className="card__img" src={src} alt="красивое место." />
            <div className="card__text-section">
                {spanText !== undefined &&
                    <span className={`card__span ${spanText === "НОВИНКА" ? 'card__span_new' : ''}`}>{spanText}</span>
                }

                <div className="card__header">
                    <div className="card__clock-container">
                        <img className="card__clock" src={clock} alt="часы." />
                        <p className="card__duration">{duration}</p>
                    </div>

                    <p className="card__description">{description}</p>
                </div>

                <ul className="card__list">
                    {
                        list.map((item, index) => (
                            <li className="card__item" key={index}>
                                <img src={check} className="card__check" alt="галочка." />
                                <p className="card__item-text">{item}</p>
                            </li>))
                    }
                </ul>

                <div className="card__item">
                    <img src={check} className="card__check" alt="галочка." />
                    <div className="card__times-container">
                        <p className="card__item-text">Ближайший рейс сегодня</p>
                        <div className="card__times">
                            {excursionTimes.length > 4 ?
                                <>
                                    {excursionTimes.slice(0, 3)}
                                    {!addTimes ?
                                        <div className="card__time" onClick={handleAddTimes}>ещё...</div>
                                        :
                                        excursionTimes.slice(3)
                                    }
                                </>
                                :
                                excursionTimes
                            }
                        </div>
                    </div>
                </div>

                <div className="card__price-more">
                    <div className="card__price-container">
                        <h3 className="card__price">{price}<img className="card__price-ruble" src={ruble} alt="рубль." /></h3>
                        {onPier !== undefined &&
                            <p className="card__on-pier">{onPier} р на причале</p>
                        }

                    </div>

                    <button className="card__more-btn" type="button">Подробнее</button>
                </div>
            </div>
        </article>
    )
}