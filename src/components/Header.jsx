import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; // useHistory kullanarak sayfa yolunu alacağız
import "./Header.css";

export default function Header() {
  const [currentPage, setCurrentPage] = useState(""); // Sayfa yolunu tutacak state
  const history = useHistory(); // Geçerli sayfa bilgisini almak için useHistory

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(history.location.pathname); // Sayfa yolunu state'e kaydediyoruz
    };

    handleLocationChange(); // Başlangıçta sayfanın yolunu al

    // Sayfa değiştirme durumunu dinle
    history.listen(handleLocationChange);

    // Temizleme işlemi
    return () => {
      history.listen(handleLocationChange);
    };
  }, [history]);

  // Sadece "/OrderPizza" sayfasında linkleri göster
  const showOrderLinks = currentPage === "/OrderPizza";

  return (
    <header>
      <img src="images/iteration-1-images/logo.svg" alt="Logo" className="logo" />
      {/* Linkler sadece "/OrderPizza" sayfasında görünsün */}
      {showOrderLinks && (
        <nav>
          <a href="/">Ana Sayfa</a>
          <a href="/OrderPizza">Sipariş Oluştur</a>
        </nav>
      )}
    </header>
  );
}