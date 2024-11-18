// SubscriptionBenefits.jsx
import React from 'react';
import styles from './SubscriptionBenefits.module.css';
import vespa from './images/vespa.png'
import fascino from './images/fascino.png';
import himalayan from './images/himalayan.png';
import bullet from './images/bullet_350.png';


const cars = [
    { name: 'Vespa', imageUrl: vespa, rate: '₹1500/day' },
    { name: 'Fascino', imageUrl: fascino, rate: '₹150/day' },
    { name: 'Himalayan', imageUrl: himalayan, rate: '₹130/day' },
    { name: 'Bullet classic', imageUrl: 'bullet', rate: '₹120/day' },
];

const SubscriptionBenefits = () => {
    return (
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
    );
};

export default SubscriptionBenefits;
