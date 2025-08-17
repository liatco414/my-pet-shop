import React from "react";
import styles from "../styles/Home.module.css";

export default function Home({ onExploreCategories }) {
    return (
        <div className={styles.page}>
            {/* Hero Section עם וידאו או גיף */}
            <section className={styles.hero}>
                {/* הוידאו והרקע */}
                <video className={styles.backgroundVideo} autoPlay loop muted playsInline src="/videos/pets-background.mp4" type="video/mp4" />
                <div className={styles.overlay} />
                <div className={styles.heroContent}>
                    <h1>Welcome to Your One-Stop Pet Shop!</h1>
                    <p>Find everything you need for your beloved pets — dogs, cats, fish, and more.</p>
                    <button className={styles.ctaButton} onClick={onExploreCategories}>
                        Explore Categories
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section className={styles.about}>
                <h2>About Our Site</h2>
                <p>
                    Our mission is to make it effortless and enjoyable for pet lovers everywhere to discover and purchase all the products they need — all gathered conveniently in one place. We
                    understand that every pet is unique, whether it’s a playful dog, a curious cat, a vibrant fish, or even a rare and exotic companion. That’s why we curate a thoughtfully selected
                    collection of high-quality food, toys, accessories, and essentials tailored specifically to meet the diverse needs of your beloved animals. Our goal is not only to provide you with
                    a wide variety of trusted products but also to offer valuable guidance and inspiration to help you care for your pets in the best possible way. We’re passionate about connecting
                    pet owners with sellers who share our commitment to quality and animal wellbeing. Enjoy a seamless, user-friendly shopping experience designed to support you and your furry,
                    feathered, or finned friends — because your pets deserve nothing less than the very best.
                </p>
            </section>
        </div>
    );
}
