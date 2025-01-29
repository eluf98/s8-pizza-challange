import React, { useState } from "react";
import axios from "axios";
import "./OrderPizza.css";
import "./Success.css";
import "./Header.css";
import { useHistory } from "react-router-dom";  

const OrderPizza = () => {
  const [name, setName] = useState(""); 
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const history = useHistory();


  const toppingOptions = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalapeno",
    "Sucuk",
  ];

  const handleToppingChange = (topping) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter((t) => t !== topping));
    } else {
      if (toppings.length < 10) {
        setToppings([...toppings, topping]);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz.");
      }
    }
  };
  const calculateTotal = () => {
    const basePrice = 85.5;
    const toppingPrice = 5;
    const toppingsCost = toppings.length * toppingPrice;
    return (basePrice + toppingsCost) * quantity;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


   console.log("Pizza boyutu:", size);

    setIsSubmitting(true);

    const orderData = {
      isim: name,
      boyut: size,
      hamur: crust,
      malzemeler: toppings,
      not: note,
      adet: quantity,
    };

    try {
        const response = await axios.post("https://reqres.in/api/pizza", orderData, { 
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const result = response.data;
          console.log("Sipariş Özeti:", result);
          alert("Sipariş başarıyla gönderildi!");


          history.push("/Success");



        } catch (error) {
          console.error("Sipariş gönderiminde hata:", error);
          alert("Sipariş gönderilirken bir hata oluştu.");
        } finally {
          setIsSubmitting(false); 
        }
      };

  return (
    <div className="form-container"> 
    
    <div className="form-header-image"></div>
      <form onSubmit={handleSubmit}>
        <h2 className="subtitle">Position Absolute Acı Pizza</h2>
        <p className="form-price">85.50₺</p>
        <p className="description">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.
        </p>

        <div className="form-group">
          <label className="form-label">Boyut Seç *</label>
          <div className="form-options">
          {["Küçük", "Orta", "Büyük"].map((option) => (
  <label key={option} className="form-option">
    <input
      type="radio"
      name="size"
      value={option}
      checked={size === option}
      onChange={() => setSize(option)}
      required
      data-cy="size-input"
    />
    <span>{option}</span>
  </label>
))}
          </div>
        </div>



        <div className="form-group">
          <label className="form-label">Hamur Seç *</label>
          <select
            className="form-select"
            value={crust}
            onChange={(e) => setCrust(e.target.value)}
            required
          >
            <option value="">Hamur Kalınlığı</option>
            <option value="İnce">İnce</option>
            <option value="Normal">Normal</option>
            <option value="Kalın">Kalın</option>
            data-cy="hamur-input"
          </select>
        </div>



        <div className="form-group">
    <label className="form-label">
      Ek Malzemeler (En fazla 10 malzeme seçebilirsiniz. 5₺)
    </label>
    <div className="form-toppings">
      {toppingOptions.map((topping) => (
        <label key={topping} className="form-option">
          <input
            type="checkbox"
            checked={toppings.includes(topping)}
            onChange={() => handleToppingChange(topping)}
            disabled={toppings.length >= 10 && !toppings.includes(topping)}
            data-cy="ekler-input"
          />
          <span>{topping}</span>
        </label>
      ))}
    </div>
  </div>



        <div className="form-group">
          <label className="form-label">Sipariş Notu</label>
          <textarea
            className="form-textarea"
            placeholder="Siparişe eklemek istediğiniz bir not var mı?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>




        <div className="form-group form-quantity">
          <button
            type="button"
            className="quantity-button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <span className="quantity-value">{quantity}</span>

          <button
            type="button"
            className="quantity-button"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>



        <div className="form-group">
          <p className="form-total">
            Sipariş Toplamı: <span>{calculateTotal().toFixed(2)}₺</span>
          </p>
        </div>



        <button
          type="submit"
          className="form-submit"
          disabled={isSubmitting}
        >
          Sipariş Ver
        </button>
      </form>
    </div>
  );
};

export default OrderPizza;