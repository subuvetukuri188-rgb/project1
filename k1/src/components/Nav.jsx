import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tigerLogo from "../assets/logo.png";

const menu = {
  BAGS: [
    "Totes",
    "Handbags",
    "Crossbody",
    "Mini Bags",
    "Laptop Bags",
    "Backpacks",
    "Duffle Bags",
    "Luggage Bags",
  ],
  ACCESSORIES: [
    "Jewellery",
    "Wallets",
    "Card Holder",
    "Passport Holder",
    "Diaries",
    "Belts",
    "Charms",
    "Laptop Sleeve",
    "Keychains",
  ],
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      {/* TOP BAR */}
      <div className="top-offer">
        USE LEGEND10 CODE TO GET 10% OFF
      </div>

      {/* LOGO */}
      <div className="nav-top">
        <h1 className="brand">
          TIGER
          <img
            src={tigerLogo}
            alt="Tiger Marrón"
            className="brand-logo-img"
          />
          MARRÓN
        </h1>

        <div className="icons">
          <span onClick={() => navigate("/login")}>👤</span>
          <span>🔍</span>
          <span>👜</span>
        </div>
      </div>

      {/* MENU */}
      <nav className="menu-bar">
        <ul className="menu-list">
          <li className="sale">SALE</li>
          <li>MARTINGALE COLLECTION</li>
          <li>FESTIVE</li>

          {/* BAGS */}
          <li
            className="menu-item"
            onMouseEnter={() => setActiveMenu("BAGS")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            BAGS
            {activeMenu === "BAGS" && (
              <div className="dropdown-vertical">
                <ul>
                  {menu.BAGS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* ACCESSORIES */}
          <li
            className="menu-item"
            onMouseEnter={() => setActiveMenu("ACCESSORIES")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            ACCESSORIES
            {activeMenu === "ACCESSORIES" && (
              <div className="dropdown-vertical">
                <ul>
                  {menu.ACCESSORIES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li>CORPORATE GIFTS</li>
          <li onClick={() => navigate("/")}>HOME</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
