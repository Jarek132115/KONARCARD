import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="success-page">
      <div className="success-box">
        <h1>🎉 Payment Successful!</h1>
        <p>Thank you for your order. Your smart card is on its way.</p>

        <div className="success-buttons">
          <Link to="/" className="success-btn">🏠 Go to Home</Link>
          <Link to="/myprofile" className="success-btn outline">📋 Go to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
