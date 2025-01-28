import React from "react";
import { useHistory } from "react-router-dom"; 

import "./Success.css";  
import "./Header.css";  
export default function Success() {
    const history = useHistory(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");

        
        history.push("/OrderPizza"); 
    };

    return (
        <div className="Success">
        <div className="form-container">
                <p className="form-subtitle">TEBRİKLER!</p>
                <p className="form-subtitle">SİPARİŞİNİZ ALINDI!</p>
                </div>
        </div>
    );

}