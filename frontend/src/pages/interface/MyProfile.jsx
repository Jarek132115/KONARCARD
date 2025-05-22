import React from 'react';
import Sidebar from '../../components/Sidebar';
import ProfileCardImage from '../../assets/images/background-hero.png'; 
import UserAvatar from '../../assets/images/People.png'; 

export default function MyProfile() {
  return (
    <div className="myprofile-layout">
      <Sidebar />
      <main className="myprofile-main">
        <h1 className="myprofile-greeting">Good Afternoon Jarek!</h1>

        <div className="myprofile-content">
          {/* Phone Preview */}
          <div className="myprofile-preview">
            <div className="mock-phone">
              <img src={ProfileCardImage} alt="Cover" className="mock-cover" />
              <h2 className="mock-title">Best Bathroom Renovator In The World Always</h2>
              <p className="mock-subtitle">Best Bathroom Renovator in The World Always</p>
              <button className="mock-button">Exchange Contact</button>

              <div className="mock-about">
                <img src={UserAvatar} alt="Avatar" className="mock-avatar" />
                <div>
                  <p className="mock-name">Jarek Konarski</p>
                  <p className="mock-role">Web Designer</p>
                  <p className="mock-bio">
                    I am a young talented web design based out in London who loves what he does and is one of the best at
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="myprofile-editor">
            <h2 className="editor-title">Create Your Digital Business Card</h2>

            <div className="input-block">
              <label>Business Card Name</label>
              <input type="text" placeholder="My Business Card" />
            </div>

            <div className="input-block">
              <label>Page Theme</label>
              <div className="option-row">
                <button className="theme-button">Light Mode</button>
                <button className="theme-button">Dark Mode</button>
              </div>
            </div>

            <div className="input-block">
              <label>Font</label>
              <div className="option-row">
                <button className="font-button">Inter</button>
                <button className="font-button">Montserrat</button>
                <button className="font-button">Poppins</button>
              </div>
            </div>

            <hr className="divider" />

            <h3 className="editor-subtitle">Hero Section</h3>

            <div className="input-block">
              <label>Cover Photo</label>
              <img src={ProfileCardImage} alt="Cover" className="cover-preview" />
            </div>

            <div className="input-block">
              <label>Main Heading</label>
              <input type="text" placeholder="Best Bathroom Renovator In The World Always" />
            </div>

            <div className="input-block">
              <label>Subheading</label>
              <input type="text" placeholder="Best Bathroom Renovator in The World Always" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
