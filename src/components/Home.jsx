import React from "react";
import { useHistory } from "react-router-dom"; 

import "./Home.css";  
import "./Header.css";  

export default function MainPage() {
    const history = useHistory();  

    const handleClick = () => {
       
        
        history.push("/OrderPizza"); 
    };

   

    return (
        <div className="MainPage">
        <div className="form-container">
                <p className="form-subtitle">KOD ACIKTIRIR</p>
                <p className="form-subtitle">PİZZA, DOYURUR</p>
                <button onClick={handleClick}  className="form-submit">
                    ACIKTIM
                </button>
                </div>
        </div>
    );
}