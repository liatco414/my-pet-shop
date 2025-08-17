import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home({ onExploreCategories }) {
    const aboutRef = useRef(null);
    const [aboutVisible, setAboutVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAboutVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);

    return (
        <div className={styles.page}>
            {/* Hero Section עם וידאו או גיף */}
            <section className={styles.hero}>
                {/* הוידאו והרקע */}
                <video className={styles.backgroundVideo} autoPlay loop muted playsInline src="/videos/pets-background.mp4" type="video/mp4" />
                <div className={styles.overlay} />
                <div className={styles.heroContent}>
                    <h1>Welcome to Your One-Stop Pet Shop</h1>
                    <p>
                        Find everything you need for your beloved pets <br /> dogs, cats, fish, and more.
                    </p>
                    <button className={styles.ctaButton} onClick={onExploreCategories}>
                        SHOP NOW
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section ref={aboutRef} id="about" className={`${styles.about} ${aboutVisible ? styles.show : ""}`}>
                <h2>About Our Site 🐾</h2>
                <p>
                    🛍️ Our mission is to make it <strong>effortless and enjoyable</strong> for pet lovers everywhere to discover and purchase all the products they need — all gathered conveniently in
                    one place.
                </p>
                <strong>
                    <p>
                        We aggregate products from trusted and well-known websites such as BestBuy, Amazon, AliExpress, iHerb, eBay, and more, saving you valuable time searching for important
                        information. We also ensure that every product has FDA approval and positive, essential reviews so that our customers can shop with confidence. Our mission is to do the hard
                        work for you — saving you time and resources — so you can focus on what truly matters.
                    </p>
                </strong>
                <p>
                    🐶🐱🐠 We understand that every pet is unique — whether it’s a <strong>playful dog</strong>, a <strong>curious cat</strong>, a <strong>vibrant fish</strong>, or even a{" "}
                    <strong>rare exotic companion</strong>. That’s why we curate a thoughtfully selected collection of food, toys, accessories, and essentials tailored to your furry (or finned!)
                    friend.
                </p>
                <p>
                    🧡 Our goal is not only to provide a <strong>wide variety of trusted products</strong>, but also to offer <strong>valuable guidance and inspiration</strong> to help you care for
                    your pets in the best possible way.
                </p>
                <p>
                    🐾 We’re passionate about connecting pet owners with sellers who share our <strong>commitment to quality and animal wellbeing</strong>. Enjoy a{" "}
                    <strong>seamless, user-friendly shopping experience</strong> — because your pets deserve nothing less than the very best!
                </p>
                <p>
                    📧 Our team continuously monitors and reviews the products to ensure you always receive the best and most up-to-date options. Plus, our friendly customer support is here to assist
                    you every step of the way.
                </p>
            </section>
        </div>
    );
}
