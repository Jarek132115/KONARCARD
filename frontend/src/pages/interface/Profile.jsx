import React from 'react';
import Sidebar from '../../components/Sidebar';
import People from '../../assets/images/People.png';

export default function Profile() {
  return (
    <div className="profile-page">
      <Sidebar />
      <div className="profile-content">
        <h1 className="profile-title">Profile</h1>

        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-pic-wrapper">
              <img src={People} alt="Profile" className="profile-img" />
              <label htmlFor="upload-input" className="upload-label">Change</label>
              <input id="upload-input" type="file" style={{ display: 'none' }} />
            </div>
          </div>

          <div className="input-group">
            <label>Your Display Name</label>
            <input type="text" placeholder="Jarek Konarski" />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="hello@konardesign.com" />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <div className="phone-wrapper">
                <select>
                  <option value="+44">+44</option>
                </select>
                <input type="tel" placeholder="07935 956564" />
              </div>
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input type="password" placeholder="********" />
              <button className="reset-btn">Reset</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="delete-btn">Delete Your Account</button>
            <button className="save-btn">Save Updates</button>
          </div>
        </div>
      </div>
    </div>
  );
}
