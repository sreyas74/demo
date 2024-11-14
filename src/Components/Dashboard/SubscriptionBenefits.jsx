// SubscriptionBenefits.jsx
import React from 'react';
import styles from './SubscriptionBenefits.module.css';
import vespa from '../Dashboard/images/Vespa.jpg'


const bikes = [
    { name: 'Vespa', imageUrl: vespa, rate: '₹1500/day' },
    { name: 'Fascino', imageUrl: '', rate: '₹150/day' },
    { name: 'Himalayan', imageUrl: '../images/wagonr.png', rate: '₹130/day' },
    { name: 'Bullet classic', imageUrl: '/images/mercedes.jpg', rate: '₹120/day' },
];

const SubscriptionBenefits = () => {
    return (
        <div className={styles.boxContainer}>
            <h2 className={styles.heading}>Our Trending Bikes</h2>
            <div className={styles.container}>
                {bikes.map((bike, index) => (
                    <div className={styles.bikeBox} key={index}>
                        <img src={bike.imageUrl} alt={bike.name} className={styles.bikeImage} />
                        <div className={styles.bikeInfo}>
                            <h3>{bike.name}</h3>
                            <p>{bike.rate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionBenefits;
