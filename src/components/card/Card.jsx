import React from 'react';
import styles from "./Card.module.css"
import arrow from "./../../img/icons/arrow.svg"

const Card = ({img, title}) => {    
    return (
        <div className={styles.card}>
            <a href="#!" className={styles.card__link}></a>
            <img className={styles.card__img} src={img} alt="img" />

            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>
                    {title}
                    </div>
                    <div className={styles.card__muted}>
                    Explore Now!
                    </div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrow} alt="img" />
                </div>
            </div>    
        </div>
    );
};

export default Card;