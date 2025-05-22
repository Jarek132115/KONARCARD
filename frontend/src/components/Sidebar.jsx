import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';
import settingsIcon from '../assets/icons/Settings-Icon.svg';
import profileIcon from '../assets/icons/Profile-Icon.svg';
import cardIcon from '../assets/icons/Card-Icon.svg';
import helpIcon from '../assets/icons/Help-Icon.svg';
import logoutIcon from '../assets/icons/Logout-Icon.svg';

export default function Sidebar() {
    const navigate = useNavigate();
    const [helpOpen, setHelpOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.post('/logout');
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const user = {
        email: 'jarek.kon0709@gmail.com',
        name: 'Jarek Konarski',
        profileImage: profileIcon, 
    };

    return (
        <div className='sidebar'>
            <div className="my-account-container">
                <img src={user.profileImage} alt="User" className="profile-pic" />
                <div className="user-info">
                    <p className="email">{user.email}</p>
                    <p className="name">{user.name}</p>
                </div>
                <img
                    src={settingsIcon}
                    alt="settings"
                    className="icon settings-icon"
                    onClick={() => navigate('/profile')}
                    style={{ cursor: 'pointer' }}
                />
            </div>

            <hr className="divider" />

            {/* MAIN LINKS */}
            <div className="main-links-container">
                <p className="section-title">MAIN</p>
                <div className="sidebar-buttons" onClick={() => navigate('/profile')}>
                    <img src={profileIcon} alt="profile" className="icon" />
                    <p className='desktop-body-s'>My Profile</p>
                </div>
                <div className="sidebar-buttons" onClick={() => navigate('/cards')}>
                    <img src={cardIcon} alt="card" className="icon" />
                    <p className='desktop-body-s'>NFC Cards</p>
                </div>
            </div>

            <hr className="divider" />

            {/* HELP DROPDOWN */}
            <div className="help-links-container">
                <p className="section-title">HELP</p>
                <div
                    className="sidebar-buttons"
                    onClick={() => setHelpOpen(!helpOpen)}
                >
                    <img src={helpIcon} alt="help" className="icon" />
                    <p className='desktop-body-s'>Help</p>
                    <span style={{ marginLeft: 'auto' }}>{helpOpen ? '▾' : '▸'}</span>
                </div>
                {helpOpen && (
                    <div className="help-submenu">
                        <p className="submenu-item" onClick={() => navigate('/contact')}>Contact Us</p>
                        <p className="submenu-item" onClick={() => navigate('/helpcentreinterface')}>Help Centre</p>
                    </div>
                )}
            </div>

            {/* LOGOUT */}
            <div
                className="sidebar-buttons logout-button"
                onClick={handleLogout}
            >
                <img src={logoutIcon} alt="logout" className="icon" />
                <p className='logout-text'>Logout Account</p>
            </div>
        </div>
    );
}
