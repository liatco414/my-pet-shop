import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function NavBar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(`.${styles.sidebar}`) && !event.target.closest(`.${styles.dropdownToggle}`) && !event.target.closest(`.${styles.mobileMenuIcon}`)) {
                setSidebarOpen(false);
                setMobileMenuOpen(false);
            }
        };

        if (isSidebarOpen || isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen, isMobileMenuOpen]);

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>My Pet Shop</div>

                {/* אייקון המבורגר למובייל */}
                <div className={styles.mobileMenuIcon} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    &#9776;
                </div>

                {/* תפריט רגיל לשולחן עבודה */}
                <ul className={styles.navLinks}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <button className={styles.dropdownToggle} onClick={() => setSidebarOpen(true)}>
                            Get to Know Your Pet
                        </button>
                    </li>
                </ul>
            </nav>

            {/* תפריט מובייל (גלוי רק כשהאייקון נלחץ) */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <ul>
                        <li>
                            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                                Contact
                            </a>
                        </li>
                        <li>
                            <button
                                className={styles.dropdownToggle}
                                onClick={() => {
                                    setSidebarOpen(true);
                                    setMobileMenuOpen(false);
                                }}
                            >
                                Get to Know Your Pet
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            {/* Sidebar */}
            <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
                <div className={styles.sidebarHeader}>
                    <span>🐾 Discover common illnesses, favorite foods, and how to care for your pet</span>
                    <button className={styles.closeButton} onClick={() => setSidebarOpen(false)}>
                        ×
                    </button>
                </div>
                <ul className={styles.sidebarList}>
                    <li>
                        <Link href="/pets/dogs">🐶 Dogs</Link>
                    </li>
                    <li>
                        <Link href="/pets/cats">🐱 Cats</Link>
                    </li>
                    <li>
                        <Link href="/pets/fish">🐟 Fish</Link>
                    </li>
                    <li>
                        <Link href="/pets/hamsters">🐹 Hamsters</Link>
                    </li>
                    <li>
                        <Link href="/pets/snakes">🐍 Snakes</Link>
                    </li>
                    <li>
                        <Link href="/pets/tarantulas">🕷 Tarantulas</Link>
                    </li>
                    <li>
                        <Link href="/pets/bugs">🐛 Bugs</Link>
                    </li>
                    <li>
                        <Link href="/pets/birds">🐦 Birds</Link>
                    </li>
                    <li>
                        <Link href="/pets/rabbits">🐰 Rabbits</Link>
                    </li>
                    <li>
                        <Link href="/pets/turtles">🐢 Turtles</Link>
                    </li>
                    <li>
                        <Link href="/pets/turtles">🐍 Snakes</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
