// SubscriptionBenefits.jsx
import React from 'react';
import styles from './SubscriptionBenefits.module.css';

const cars = [
    { name: 'Wagon R', imageUrl: 'https://github.com/sreyas74/demo/blob/master/Japan_s_Ten_Most_Lovable_Pocket-Sized_Kei_Cars-removebg-preview.png?raw=true', rate: '₹1500/day' },
    { name: 'BMW i8', imageUrl: '/images/bmw.jpg', rate: '₹150/day' },
    { name: 'Audi A8', imageUrl: '/images/audi.jpg', rate: '₹130/day' },
    { name: 'Mercedes C-Class', imageUrl: '/images/mercedes.jpg', rate: '₹120/day' },
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
