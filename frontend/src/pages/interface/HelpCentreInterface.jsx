import React from 'react';
import Sidebar from '../../components/Sidebar';
import HeroBackground from '../../assets/images/background-hero.png';

export default function HelpCentre() {
  return (
    <div className="help-layout">
      <Sidebar />

      <main className="help-main">
        <h1 className="help-title">Help Centre</h1>

        <div className="help-video-card">
          <img src={HeroBackground} alt="Profile Setup" className="help-video-thumb" />
          <div className="help-video-content">
            <h2 className="help-video-title">How To Set Up Your Profile</h2>
            <p className="help-video-desc">
              Learn how to create your profile, add your details, and save it for instant sharing.
            </p>
            <p className="help-video-time">Watch Time: 46 seconds</p>
            <button className="help-video-button">Watch Now</button>
          </div>
        </div>

        <div className="help-video-card reverse">
          <div className="help-video-content">
            <h2 className="help-video-title">How to Activate Your NFC Card</h2>
            <p className="help-video-desc">
              Step-by-step activation process to connect your physical card to your digital profile.
            </p>
            <p className="help-video-time">Watch Time: 46 seconds</p>
            <button className="help-video-button">Watch Now</button>
          </div>
          <img src={HeroBackground} alt="Card Activation" className="help-video-thumb" />
        </div>
      </main>
    </div>
  );
}
