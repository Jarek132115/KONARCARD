import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import backgroundImg from '../../assets/images/background.png';
import facebookIcon from '../../assets/icons/Facebook-Icon.svg'
import appleIcon from '../../assets/icons/Apple-Icon.svg'
import googleIcon from '../../assets/icons/Google-Icon.svg'
import LogoIcon from '../../assets/icons/Logo-Icon.svg'


export default function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const { email, password } = data

        try {
            const response = await axios.post('/login', { email, password })

            if (response.data.error) {
                toast.error(response.data.error)
            } else {
                toast.success('Login successful')
                setData({ email: '', password: '' })
                navigate('/myprofile')
            }
        } catch (error) {
            console.error(error)
            toast.error('Something went wrong. Please try again.')
        }
    }

    return (
        <>
            <div className="login-wrapper">
                {/* Close Icon */}
                <div className="close-button" onClick={() => navigate('/')}>×</div>

                {/* Left Panel – Image + Quote */}
                <div className="login-left">
                    <img src={backgroundImg} alt="Login visual" className="login-visual" />
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
                        <h2 className="login-title">Welcome back!</h2>
                        <form className="login-form" onSubmit={loginUser}>
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
                            <button type="submit  desktop-body-s" className="primary-button">Sign In</button>
                        </form>

                        <p className="login-alt-text">
                            Don’t have an account? <Link to="/register">Create one</Link>
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
    )
}
