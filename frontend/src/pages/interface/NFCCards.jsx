import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import PlasticCard from '../../assets/images/PlasticCard.png';
import WoodenCard from '../../assets/images/WoodenCard.png';

export default function NFCCards() {
  return (
    <div className="nfc-page-wrapper">
      <Sidebar />

      <div className="nfc-main-content">
        <header className="nfc-header">
          <h1 className="nfc-title">Choose Your Perfect Card</h1>
          <p className="nfc-subtitle">
            Premium materials. Custom designs. Instantly share your contact details with a single tap.
          </p>
        </header>

        <div className="nfc-card-grid">
          {/* Black Edition Card */}
          <div className="nfc-card">
            <img src={PlasticCard} alt="Plastic NFC Card" className="nfc-card-img" />
            <div className="nfc-card-tag">1-month subscription included</div>
            <h2 className="nfc-card-name">Konar Card - Black Edition</h2>
            <p className="nfc-card-desc">Engineered to impress. Built to last.</p>
            <p className="nfc-card-price">£19.95</p>
            <Link to="/shopnfccards/blackcard" className="nfc-buy-button">Buy Now</Link>
          </div>

          {/* White Edition Card */}
          <div className="nfc-card">
            <img src={WoodenCard} alt="Wooden NFC Card" className="nfc-card-img" />
            <div className="nfc-card-tag">1-month subscription included</div>
            <h2 className="nfc-card-name">Konar Card - White Edition</h2>
            <p className="nfc-card-desc">Designed for clarity. Built for connection.</p>
            <p className="nfc-card-price">£19.95</p>
            <Link to="/shopnfccards/whitecard" className="nfc-buy-button">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
