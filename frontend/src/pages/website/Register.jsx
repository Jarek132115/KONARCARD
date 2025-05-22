import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import backgroundImg from '../../assets/images/background.png';
import facebookIcon from '../../assets/icons/Facebook-Icon.svg';
import appleIcon from '../../assets/icons/Apple-Icon.svg';
import googleIcon from '../../assets/icons/Google-Icon.svg';

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('/register', {
                name,
                email,
                password,
                confirmPassword,
            });

            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                toast.success('Account created successfully');
                setData({ name: '', email: '', password: '', confirmPassword: '' });
                navigate('/myprofile');
            }
        } catch (err) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <>
            {/* Close Button */}
            <Link to="/" className="close-button">×</Link>

            <div className="login-wrapper">
                {/* Left Panel – Background Image + Quote */}
                <div className="login-left">
                    <img src={backgroundImg} alt="Visual" className="login-visual" />
                    <div className="login-quote">
                        <span className="quote-icon">“</span>
                        <p className="quote-text">
                            “This has completely changed the way I find work. Instead of chasing leads, I just tap my card and let my profile do the talking. Clients love it.”
                        </p>
                        <p className="quote-author">Liam Turner – Electrical Contractor</p>
                    </div>
                </div>

                {/* Right Panel – Form */}
                <div className="login-right">
                    <div className="login-card">
                        <h2 className="login-title">Create Your Account</h2>

                        <form onSubmit={registerUser} className="login-form">
                            <input
                                type="text"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={data.confirmPassword}
                                onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                            />

                            <label className="terms-label">
                                <input type="checkbox" className="terms-checkbox" required />
                                <span className="desktop-body-xs">
                                    I agree to the <a href="/policies">Terms of Service</a> & <a href="/policies">Privacy Policy</a>
                                </span>
                            </label>

                            <button type="submit" className="primary-button">Register</button>
                        </form>

                        <p className="login-alt-text">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>

                        <div className="divider"><span>or</span></div>

                        <div className="social-buttons">
                            <a className="social-button" href="http://localhost:8000/auth/google">
                                <img src={googleIcon} alt="Google" />
                                Continue with Google
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
