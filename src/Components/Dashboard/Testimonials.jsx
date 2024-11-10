// SubscriptionBenefits.jsx
import React from 'react';
import styles from './Testimonials.module.css';

const cars = [
    { name: 'Wagon R', imageUrl: 'https://github.com/sreyas74/demo/blob/master/Japan_s_Ten_Most_Lovable_Pocket-Sized_Kei_Cars-removebg-preview.png?raw=true', rate: '₹1500/day' },
    { name: 'TATA Nexon', imageUrl: 'https://github.com/sreyas74/demo/blob/master/Luxurious_black_edition_of_Tata_Nexon_car-removebg-preview.png?raw=true', rate: '₹150/day' },
    { name: 'Ertiga', imageUrl: 'https://github.com/sreyas74/demo/blob/master/Suzuki_Ertiga__Precios__versiones_y_equipamiento_en_M%C3%A9xico-removebg-preview.png?raw=true', rate: '₹130/day' },
    { name: 'Nissan Micra', imageUrl: 'https://github.com/sreyas74/demo/blob/master/micra_bg.png?raw=true', rate: '₹120/day' },
];

const Testimonials = () => {
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

export default Testimonials;
