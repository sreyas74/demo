import React from 'react';
import styles from './Testimonials.module.css';
import wagonr from './images/wagonr.png';
import nexon from './images/tata_nexon.png';
import ertiga from './images/ertiga.png';
import micra from './images/micra_bg.png';

const cars = [
    { name: 'Wagon R', imageUrl: wagonr, rate: '₹1500/day' },
    { name: 'TATA Nexon', imageUrl: nexon, rate: '₹150/day' },
    { name: 'Ertiga', imageUrl: ertiga, rate: '₹130/day' },
    { name: 'Nissan Micra', imageUrl: micra, rate: '₹120/day' },
];

const Testimonials = () => {
    return (
        <div className={styles.boxContainer}>
            <h2 className={styles.heading}>Our Trending Cars</h2>
            <div className={styles.container}>
                {cars.map((car, index) => (
                    <div className={styles.carBox} key={index}>
                        <img src={car.imageUrl} alt={car.name} className={styles.carImage} />
                        <div className={styles.carInfo}>
                            <h3>{car.name}</h3>
                            <p>{car.rate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
