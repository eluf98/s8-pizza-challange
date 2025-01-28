import React from "react";
import { useHistory } from "react-router-dom";  // useHistory hook

import "./font.css";    

export default function OrderResult() {
    const history = useHistory();  // useHistory hook

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form gönderme işlemi yapılabilir
        console.log("Form submitted");

        // Butona tıkladığında 'PizzaOrderForm' sayfasına yönlendir
        history.push("/OrderPizza");  // History.push ile yönlendir
    };

    return (
        <div className="OrderPizza">
        <div className="form-container">
            
                <p className="form-subtitle">TEBRİKLER!</p>
                <p className="form-subtitle">SİPARİŞİNİZ ALINDI!</p>
                </div>
        </div>
    );

}