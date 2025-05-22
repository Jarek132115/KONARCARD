import React from 'react';
import Sidebar from '../../components/Sidebar';

export default function Billing() {
  return (
    <div className="billing-layout">
      <Sidebar />

      <main className="billing-main">
        <h1 className="billing-title">Billing</h1>

        <div className="billing-card">
          <h2 className="billing-subtitle">Payment Methods</h2>
          <button className="billing-add-button">+ Add Payment Method</button>
        </div>

        <div className="billing-card">
          <h2 className="billing-subtitle">Invoice History</h2>
          <p className="billing-description">Download past invoices by clicking the button.</p>

          <div className="billing-table">
            <div className="billing-table-header">
              <span>Date</span>
              <span>Invoice Number</span>
              <span>Amount</span>
            </div>

            {[
              ['April 11 2025', 'INV-20240428-93847125-X5', '$7.99'],
              ['May 11 2025', 'INV-20250428-40293847-Z9', '$7.99'],
              ['June 11 2025', 'INV-20240428-83920384-A3', '$7.99'],
              ['July 11 2025', 'INV-20250428-12849375-L7', '$7.99'],
              ['August 11 2025', 'INV-20240428-65729381-W1', '$7.99'],
            ].map(([date, number, amount], index) => (
              <div className="billing-table-row" key={index}>
                <span>{date}</span>
                <span>{number}</span>
                <span>{amount}</span>
                <span className="billing-download-icon">📥</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
