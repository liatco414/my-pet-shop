import React from "react";
import categories from "../data/categories.json";
import styles from "../styles/categories.module.css";

export default function Categories() {
    return (
        <div className={styles.container}>
            <h1>Pet Categories</h1>
            <div className={styles.grid}>
                {categories.map((cat) => (
                    <div key={cat.id} className={styles.card}>
                        <img src={cat.image} alt={cat.name} className={styles.image} />
                        <h2>{cat.name}</h2>
                        <p>{cat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
