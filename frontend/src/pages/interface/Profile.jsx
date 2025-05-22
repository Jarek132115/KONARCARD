import React from 'react';
import Sidebar from '../../components/Sidebar';
import People from '../../assets/images/People.png';

export default function Profile() {
  return (
    <div className="profile-layout">
      <Sidebar />
      <div className="profile-main">
        <h1 className="profile-main-title">Profile</h1>

        <div className="profile-card-box">
          <div className="profile-avatar-section">
            <div className="profile-avatar-wrapper">
              <img src={People} alt="Profile" className="profile-avatar" />
              <label htmlFor="upload-input" className="upload-avatar-label">Change</label>
              <input id="upload-input" type="file" style={{ display: 'none' }} />
            </div>
          </div>

          <div className="profile-input-block">
            <label>Display Name</label>
            <input type="text" placeholder="Jarek Konarski" />
          </div>

          <div className="profile-input-row">
            <div className="profile-input-block">
              <label>Email</label>
              <input type="email" placeholder="hello@konardesign.com" />
            </div>
            <div className="profile-input-block">
              <label>Phone Number</label>
              <div className="profile-phone-inputs">
                <select>
                  <option value="+44">+44</option>
                </select>
                <input type="tel" placeholder="07935 956564" />
              </div>
            </div>
          </div>

          <div className="profile-input-block">
            <label>Password</label>
            <div className="profile-password-wrapper">
              <input type="password" placeholder="********" />
              <button className="profile-reset-button">Reset</button>
            </div>
          </div>

          <div className="profile-action-row">
            <button className="profile-delete-button">Delete Your Account</button>
            <button className="profile-save-button">Save Updates</button>
          </div>
        </div>
      </div>
    </div>
  );
}
