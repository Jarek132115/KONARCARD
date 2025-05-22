import React from 'react';
import Sidebar from '../../components/Sidebar';

export default function Subscription() {
  return (
    <div className="subscription-layout">
      <Sidebar />

      <main className="subscription-main">
        <h1 className="subscription-title">Subscription</h1>

        <div className="subscription-card">
          <div className="subscription-card-header">
            <div>
              <h2 className="subscription-plan-title">Power Profile</h2>
              <p className="subscription-plan-subtitle">Win more work with a power profile</p>
            </div>
            <div className="subscription-badge">Most Popular</div>
          </div>

          <ul className="subscription-features">
            <li>✔ Upload unlimited photos (Portfolio / Gallery)</li>
            <li>✔ Add multiple social links and websites</li>
            <li>✔ Personalize your landing page URL (yourname.cardsite.com)</li>
            <li>✔ Priority support and setup help</li>
            <li>✔ Premium NFC card design options</li>
            <li>✔ CRM Integration.</li>
            <li>✔ Networking Toolkit.</li>
            <li>✔ Automated Follow-Ups.</li>
          </ul>

          <p className="subscription-note">
            <em>"For professionals and businesses ready to make every first impression count."</em>
          </p>

          <div className="subscription-footer">
            <p className="subscription-price">
              <strong>£5.95</strong> <span className="price-label">Per Month</span>
            </p>
            <button className="subscription-button">Upgrade to Power Profile</button>
          </div>
        </div>
      </main>
    </div>
  );
}
