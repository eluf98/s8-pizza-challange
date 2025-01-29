import React from "react";
import { useHistory } from "react-router-dom"; 
import { Link } from "react-router-dom"; 

import "./Home.css";  
import "./Header.css";  

const SpecialOfferSection = () => {
    return (
        <div className="special-offers">
            <div className="offer-card">
                <img src="/images/iteration-2-images/cta/kart-1.png" alt="Özel Lezzetus" />
                <div className="offer-content">
                    <p className="offer-title">Özel Lezzetus</p>
                    <p className="offer-subtitle">Position:Absolute Acı Burger</p>
                    <button className="order-btn">SİPARİŞ VER</button>
                </div>
            </div>
            <div className="offer-card">
                <img src="/images/iteration-2-images/cta/kart-2.png" alt="Hackathlon Burger Menü" />
                <div className="offer-content">
                    <p className="offer-title">Hackathlon Burger Menü</p>
                    <button className="order-btn">SİPARİŞ VER</button>
                </div>
            </div>
            <div className="offer-card">
                <img src="/images/iteration-2-images/cta/kart-3.png" alt="Çoooook Hızlı NPM Kurye" />
                <div className="offer-content">
                    <p className="offer-title">Çoooook hızlı npm gibi kurye</p>
                    <button className="order-btn">SİPARİŞ VER</button>
                </div>
            </div>
        </div>
    );
};

const MenuList = [
    {
        imageSrc: "/images/iteration-2-images/pictures/food-1.png",
        title: "Terminal Pizza",
        reviews: 127,
        price: 70,
        rating: 4.2,
    },
    {
        imageSrc: "/images/iteration-2-images/pictures/food-2.png",
        title: "Position Absolute Acı Pizza",
        reviews: 200,
        price: 80.5,
        rating: 4.9,
    },
    {
        imageSrc: "/images/iteration-2-images/pictures/food-3.png",
        title: "useEffect Tavuklu Burger",
        reviews: 49,
        price: 60,
        rating: 3.8,
    },
];

const MenuDisplay = () => {
    return (
        <div className="menu-display">
            {MenuList.map((item, index) => (
                <div className="menu-item" key={index}>
                    <img src={item.imageSrc} className="menu-image" alt={item.title} />
                    <p className="menu-title">{item.title}</p>
                    <div className="menu-details">
                        <p>{item.rating} ⭐</p>
                        <p>({item.reviews} yorum)</p>
                        <p className="menu-price">{item.price}₺</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const NavigationLinks = [
    { id: "ramen", title: "Ramen", iconSrc: "/images/iteration-2-images/icons/1.svg" },
    { id: "pizza", title: "Pizza", iconSrc: "/images/iteration-2-images/icons/2.svg" },
    { id: "burger", title: "Burger", iconSrc: "/images/iteration-2-images/icons/3.svg" },
    { id: "fries", title: "Kızartmalar", iconSrc: "/images/iteration-2-images/icons/4.svg" },
    { id: "fast-food", title: "Fast Food", iconSrc: "/images/iteration-2-images/icons/5.svg" },
    { id: "drinks", title: "Gazlı içecek", iconSrc: "/images/iteration-2-images/icons/6.svg" },
];

const Navigation = () => {
    return (
        <nav className="navigation">
            {NavigationLinks.map((link) => (
                <Link key={link.id} to="#" className="nav-link">
                    <img src={link.iconSrc} alt={link.title} className="nav-icon" />
                    <p>{link.title}</p>
                </Link>
            ))}
        </nav>
    );
};

export default function Home() {
    const history = useHistory();  

    const handleClick = () => {
        history.push("/OrderPizza"); 
    };

    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-subtitle-container">
                        <p className="hero-subtitle">Fırsatı Kaçırma</p>
                    </div>
                    <h1 className="hero-title">KOD ACIKTIRIR,<br />PİZZA DOYURUR</h1>
                    <button onClick={handleClick} className="cta-btn">ACIKTIM</button>
                </div>
            </section>
            <div className="navigation-bar">
                <Navigation />
            </div>
            <div className="main-content">
                <SpecialOfferSection />
                <div className="intro-text">
                    <p className="intro-title">En Çok Paketlenen Menüler</p>
                    <p className="intro-subtitle">Acıktıran Kodlara Doyuran Lezzetler</p>
                    <Navigation />
                </div>
                <MenuDisplay />
            </div>
        </div>
    );
}