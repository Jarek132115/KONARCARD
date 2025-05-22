import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import settingsIcon from '../assets/icons/Settings-Icon.svg';
import profileIcon from '../assets/icons/Profile-Icon.svg';
import cardIcon from '../assets/icons/Card-Icon.svg';
import helpIcon from '../assets/icons/Help-Icon.svg';
import logoutIcon from '../assets/icons/Logout-Icon.svg';
import notificationIcon from '../assets/icons/Notification-Icon.svg';
import subscriptionIcon from '../assets/icons/Subscription-Icon.svg';
import billingIcon from '../assets/icons/Billing-Icon.svg';

export default function Sidebar() {
    const navigate = useNavigate();

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
        profileImage: profileIcon, // placeholder
    };

    return (
        <div className='sidebar'>
            {/* USER INFO */}
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
                <div className="sidebar-buttons" onClick={() => navigate('/myprofile')}>
                    <img src={profileIcon} alt="profile" className="icon" />
                    <p className='desktop-body-s'>My Profile</p>
                </div>
                <div className="sidebar-buttons" onClick={() => navigate('/nfccards')}>
                    <img src={cardIcon} alt="card" className="icon" />
                    <p className='desktop-body-s'>NFC Cards</p>
                </div>
            </div>

            <hr className="divider" />

            {/* ACCOUNT LINKS */}
            <div className="account-links-container">
                <p className="section-title">ACCOUNT</p>
                <div className="sidebar-buttons" onClick={() => navigate('/notifications')}>
                    <img src={notificationIcon} alt="notifications" className="icon" />
                    <p className='desktop-body-s'>Notifications</p>
                </div>
                <div className="sidebar-buttons" onClick={() => navigate('/subscription')}>
                    <img src={subscriptionIcon} alt="subscription" className="icon" />
                    <p className='desktop-body-s'>Subscription</p>
                </div>
                <div className="sidebar-buttons" onClick={() => navigate('/billing')}>
                    <img src={billingIcon} alt="billing" className="icon" />
                    <p className='desktop-body-s'>Billing</p>
                </div>
            </div>

            <hr className="divider" />

            {/* HELP LINKS */}
            <div className="help-links-container">
                <p className="section-title">HELP</p>
                <div className="sidebar-buttons" onClick={() => navigate('/myprofile')}>
                    <img src={helpIcon} alt="contact" className="icon" />
                    <p className='desktop-body-s'>Contact Us</p>
                </div>
                <div className="sidebar-buttons" onClick={() => navigate('/helpcentreinterface')}>
                    <img src={helpIcon} alt="help centre" className="icon" />
                    <p className='desktop-body-s'>Help Centre</p>
                </div>
            </div>

            {/* LOGOUT */}
            <div className="sidebar-buttons logout-button" onClick={handleLogout}>
                <img src={logoutIcon} alt="logout" className="icon" />
                <p className='logout-text'>Logout Account</p>
            </div>
        </div>
    );
}
