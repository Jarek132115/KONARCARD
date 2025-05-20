import React from 'react';
import { Link } from 'react-router-dom'
import PlasticCards from '../../assets/images/PlasticCard.png';
import Navbar from '../../components/Navbar';
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer';
import ReviewStars from '../../assets/icons/Stars-Icon.svg'
import ReviewPerson from '../../assets/images/Review-Person.png'
import BoltIcon from '../../assets/icons/Bolt-Icon.svg'
import IDCardIcon from '../../assets/icons/IDCard-Icon.svg'
import NFCIcon from '../../assets/icons/NFC-Icon.svg'
import DeliveryIcon from '../../assets/icons/Delivery-Icon.svg'
import Section3_Image1 from '../../assets/images/Section3-Image1.png'
import Section3_Image2 from '../../assets/images/Section3-Image2.png'
import Section3_Image3 from '../../assets/images/Section3-Image3.png'
import Section3_Image4 from '../../assets/images/Section3-Image4.png'
import SideCardPlastic from '../../assets/images/Side-Card-Plastic.png'
import TapIcon from '../../assets/icons/Tap-Icon.svg'
import SaveIcon from '../../assets/icons/Save-Icon.svg'
import HowItWorks1 from '../../assets/images/HowItWorks-1.png'
import HowItWorks2 from '../../assets/images/HowItWorks-2.png'
import HowItWorks3 from '../../assets/images/HowItWorks-3.png'
import ProfileIcon from '../../assets/icons/Profile-Icon.svg'
import MaterialsIcon from '../../assets/icons/Materials-Icon.svg'
import Pencil from '../../assets/icons/Pencil-Icon.svg'
import ProfilePencil from '../../assets/icons/ProfilePencil-Icon.svg'
import TimeIcon from '../../assets/icons/Time-Icon.svg'
import PhoneIcon from '../../assets/icons/Phone-Icon.svg'
import NFCChipIcon from '../../assets/icons/NFCChip-Icon.svg'
import ShieldIcon from '../../assets/icons/Shield-Icon.svg'
import QRCode from '../../assets/icons/QR-Code-Icon.svg'







export default function PlasticCard() {
    return (
        <>
            <Navbar />
            <div className="section-breadcrumbs">
                <Breadcrumbs />
            </div>
            <div style={{ marginTop: 40 }} className="section-product">
                {/* Left Section - Large Card Preview */}
                <div className="product-preview">
                    <img src={PlasticCards} alt="Main Card" className="main-card" />
                    <div className="thumbnail-row">
                        <img src={PlasticCards} alt="Thumbnail 1" className="thumbnail" />
                        <img src={PlasticCards} alt="Thumbnail 2" className="thumbnail" />
                        <img src={PlasticCards} alt="Thumbnail 3" className="thumbnail" />
                        <img src={PlasticCards} alt="Thumbnail 4" className="thumbnail" />
                        <img src={PlasticCards} alt="Thumbnail 5" className="thumbnail" />
                    </div>
                </div>

                {/* Right Section - Options */}
                <div className="product-options">
                    <p className='desktop-h5'>Konar Card - Black Edition</p>
                    <p className='desktop-body'>The smart, durable card that instantly shows your profile — help customers see your work, your services, and how to contact you in seconds.</p>
                    <p style={{ fontSize: 18, fontWeight: 600, marginTop: 10, marginBottom: 20 }}>£19.95</p>
                    <div className="review-rating">
                        <img style={{ width: 120 }} src={ReviewStars} />
                        <p>(22)</p>
                    </div>
                    <div className="hero-tick">
                        <img src={DeliveryIcon} className="icon" />
                        <p style={{ fontSize: 14 }}>Order Before 3pm for Next Day Delivery</p>
                    </div>
                    <div className="option-group">
                        <p className="desktop-body-xs">Quantity:</p>
                        <div className="quantity-control">
                            <button className="qty-btn">-</button>
                            <span className="qty-display">1</span>
                            <button className="qty-btn">+</button>
                        </div>
                        <Link to="/login" style={{ display: 'flex', width: 'fit-content' }} className="black-button desktop-button margin-top-10">Buy Now</Link>
                    </div>
                </div>
            </div>



            <div className="section">
                <div className="section-1-title">
                    <h2 className='desktop-h3 text-center'>The #1 Tool Tradies Are Talking About</h2>
                    <h3 className='desktop-h6 text-center'>
                        Don’t take our word for it — see why tradespeople are switching to smarter, faster profiles.
                    </h3>
                </div>
                <div className="review-container-box">
                    <div className="review-container">
                        <div className="review-pair">
                            <div className="review-div">
                                <img className='stars' src={ReviewStars} />
                                <p className='desktop-body-s text-center'>“Since using this, I’m actually getting replies. Clients say it’s slick and they’ve even referred me to others.”</p>
                                <div className="review-div-person">
                                    <img src={ReviewPerson} />
                                    <div className="review-person-name">
                                        <p className='desktop-body-xs' style={{ color: '#333' }}>Plumber</p>
                                        <p className='desktop-body-s'>Mark B</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review-div">
                                <img className='stars' src={ReviewStars} />
                                <p className='desktop-body-s text-center'>“Since using this, I’m actually getting replies. Clients say it’s slick and they’ve even referred me to others.”</p>
                                <div className="review-div-person">
                                    <img src={ReviewPerson} />
                                    <div className="review-person-name">
                                        <p className='desktop-body-xs' style={{ color: '#333' }}>Plumber</p>
                                        <p className='desktop-body-s'>Mark B</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review-pair">
                            <div className="review-div">
                                <img className='stars' src={ReviewStars} />
                                <p className='desktop-body-s text-center'>“Since using this, I’m actually getting replies. Clients say it’s slick and they’ve even referred me to others.”</p>
                                <div className="review-div-person">
                                    <img src={ReviewPerson} />
                                    <div className="review-person-name">
                                        <p className='desktop-body-xs' style={{ color: '#333' }}>Plumber</p>
                                        <p className='desktop-body-s'>Mark B</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review-div">
                                <img className='stars' src={ReviewStars} />
                                <p className='desktop-body-s text-center'>“Since using this, I’m actually getting replies. Clients say it’s slick and they’ve even referred me to others.”</p>
                                <div className="review-div-person">
                                    <img src={ReviewPerson} />
                                    <div className="review-person-name">
                                        <p className='desktop-body-xs' style={{ color: '#333' }}>Plumber</p>
                                        <p className='desktop-body-s'>Mark B</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-container">
                        <div className="review-pair">
                            <div className="review-div">
                                <img className='stars' src={ReviewStars} />
                                <p className='desktop-body-s text-center'>“Since using this, I’m actually getting replies. Clients say it’s slick and they’ve even referred me to others.”</p>
                                <div className="review-div-person">
                                    <img src={ReviewPerson} />
                                    <div className="review-person-name">
                                        <p className='desktop-body-xs' style={{ color: '#333' }}>Plumber</p>
                                        <p className='desktop-body-s'>Mark B</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review-div">
                                <img className='stars' src={ReviewStars} />
                                <p className='desktop-body-s text-center'>“Since using this, I’m actually getting replies. Clients say it’s slick and they’ve even referred me to others.”</p>
                                <div className="review-div-person">
                                    <img src={ReviewPerson} />
                                    <div className="review-person-name">
                                        <p className='desktop-body-xs' style={{ color: '#333' }}>Plumber</p>
                                        <p className='desktop-body-s'>Mark B</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review-pair">
                            <div className="review-div">
                                <img className='stars' src={ReviewStars} />
                                <p className='desktop-body-s text-center'>“Since using this, I’m actually getting replies. Clients say it’s slick and they’ve even referred me to others.”</p>
                                <div className="review-div-person">
                                    <img src={ReviewPerson} />
                                    <div className="review-person-name">
                                        <p className='desktop-body-xs' style={{ color: '#333' }}>Plumber</p>
                                        <p className='desktop-body-s'>Mark B</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review-div">
                                <img className='stars' src={ReviewStars} />
                                <p className='desktop-body-s text-center'>“Since using this, I’m actually getting replies. Clients say it’s slick and they’ve even referred me to others.”</p>
                                <div className="review-div-person">
                                    <img src={ReviewPerson} />
                                    <div className="review-person-name">
                                        <p className='desktop-body-xs' style={{ color: '#333' }}>Plumber</p>
                                        <p className='desktop-body-s'>Mark B</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cta-center-text review-cta'>
                    <p className='desktop-h6'>Check out more reviews</p>
                    <Link to="/reviews" className="black-button desktop-button">Reviews</Link>
                </div>
            </div>




            <div className="section">
                <div className="section-1-title">
                    <h2 className="desktop-h3 text-center">How It Works</h2>
                    <h3 className="desktop-h6 text-center">
                        Tap the card on any phone. Your profile opens. Job done.
                    </h3>
                </div>

                <div className="how-it-works-container">
                    <div className="white-card-column">
                        <div className="how-it-works-info">
                            <img src={TapIcon} className="icon-40" />
                            <p className="desktop-h5">Tap the Card</p>
                            <p className="desktop-body">
                                Hold the card near most phones — it works without any app.
                            </p>
                        </div>
                        <img src={HowItWorks1} className="white-card-column-image" />
                    </div>

                    <div className="how-it-works-right">
                        <div className="white-card">
                            <div className="how-it-works-info">
                                <img src={ProfileIcon} className="icon-40" />
                                <p className="desktop-h5">Your Page Pops Up</p>
                                <p className="desktop-body">
                                    They see your name, photo, services, and how to reach you.
                                </p>
                            </div>
                            <img src={HowItWorks2} className="how-it-works-right-image" />
                        </div>

                        <div className="white-card">
                            <div className="how-it-works-info">
                                <img src={SaveIcon} className="icon-40" />
                                <p className="desktop-h5">They Save Your Info</p>
                                <p className="desktop-body">
                                    One tap saves your number, email, or connects to your socials.
                                </p>
                            </div>
                            <img src={HowItWorks3} className="how-it-works-right-image" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="section">
                <div className="section-1-title">
                    <h2 className='desktop-h3 text-center'>One Profile. Shared in Seconds.</h2>
                    <h3 className='desktop-h6 text-center'>Tap it. Scan it. Link it. Your trade page goes anywhere</h3>
                </div>
                <div className="section-3-container-flex">
                    <div className="section-3-container">
                        <div className="section-3-1x1-image-info">
                            <img src={Section3_Image1} className="" />
                            <p className='desktop-h5 text-center'>NFC Business Card</p>
                            <p className='desktop-body text-center'>Tap to share your details fast</p>
                        </div>
                        <div className="section-3-1x1-image-info">
                            <img src={Section3_Image2} className="" />
                            <p className='desktop-h5 text-center'>Apple & Google Wallet</p>
                            <p className='desktop-body text-center'>Save your card on your phone</p>
                        </div>
                    </div>
                    <div className="section-3-container">
                        <div className="section-3-1x1-image-info">
                            <img src={Section3_Image3} className="" />
                            <p className='desktop-h5 text-center'>QR Code</p>
                            <p className='desktop-body text-center'>Scan to open your full profile</p>
                        </div>

                        <div className="section-3-1x1-image-info">
                            <img src={Section3_Image4} className="" />
                            <p className='desktop-h5 text-center'>Link in Bio</p>
                            <p className='desktop-body text-center'>One link for everything you offer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-1-title">
                    <h2 className='desktop-h3 text-center'>Product Questions</h2>
                    <h3 className='desktop-h6 text-center'>For curious customers before they buy.</h3>
                </div>
                <div className="faq-container">
                    <div className="faq-column">
                        <div className="section-list">
                            <div className=" icon-white">
                                <img src={IDCardIcon} className="icon" />
                            </div>
                            <div className="section-list-info">
                                <p className='desktop-h6'>What is an NFC business card?</p>
                                <p className='desktop-body-s'>An NFC card lets you instantly share your contact information or social profiles by simply tapping a smartphone.</p>
                            </div>
                        </div>
                        <div className="section-list">
                            <div className=" icon-white">
                                <img src={NFCIcon} className="icon" />
                            </div>
                            <div className="section-list-info">
                                <p className='desktop-h6'>How does the NFC card work?</p>
                                <p className='desktop-body-s'>It uses NFC technology to instantly open your digital profile when tapped on a compatible phone.</p>
                            </div>
                        </div>
                        <div className="section-list">
                            <div className=" icon-white">
                                <img src={MaterialsIcon} className="icon" />
                            </div>
                            <div className="section-list-info">
                                <p className='desktop-h6'>What materials are available for the cards?</p>
                                <p className='desktop-body-s'>You can choose between Plastic, Wood, and Metal — each built for durability and style.</p>
                            </div>
                        </div>
                        <div className="section-list">
                            <div className=" icon-white">
                                <img src={Pencil} className="icon" />
                            </div>
                            <div className="section-list-info">
                                <p className='desktop-h6'>Can I customize the design of my card?</p>
                                <p className='desktop-body-s'>Yes, you can upload your logo, choose colors, and personalize the look during setup.</p>
                            </div>
                        </div>
                        <div className="section-list">
                            <div className=" icon-white">
                                <img src={ProfilePencil} className="icon" />
                            </div>
                            <div className="section-list-info">
                                <p className='desktop-h6'>Can I update my profile after ordering?</p>
                                <p className='desktop-body-s'>Absolutely! You can update your profile at any time without reprinting the card.</p>
                            </div>
                        </div>
                    </div>
                    <div className="faq-column">
                        <div className="section-list">
                            <div className=" icon-white">
                                <img src={TimeIcon} className="icon" />
                            </div>
                            <div className="section-list-info">
                                <p className='desktop-h6'>How long does an NFC card last?</p>
                                <p className='desktop-body-s'>With normal use, NFC cards can last for years without losing functionality.</p>
                            </div>
                        </div>
                        <div className="section-list">
                            <div className=" icon-white">
                                <img src={PhoneIcon} className="icon" />
                            </div>
                            <div className="section-list-info">
                                <p className='desktop-h6'>Does the card work with all smartphones?</p>
                                <p className='desktop-body-s'>Works with most phones: iPhone 7+ and most Androids with NFC enabled.</p>
                            </div>
                        </div>
                        <div className="section-list">
                            <div className=" icon-white">
                                <img src={QRCode} className="icon" />
                            </div>
                            <div className="section-list-info">
                                <p className='desktop-h6'>What if someone can't tap the card?</p>
                                <p className='desktop-body-s'>Every card includes a scannable QR code so your profile is always easy to access.</p>
                            </div>
                        </div>
                        <div className="section-list">
                            <div className=" icon-white">
                                <img src={NFCChipIcon} className="icon" />
                            </div>
                            <div className="section-list-info">
                                <p className='desktop-h6'>Is the NFC chip visible?</p>
                                <p className='desktop-body-s'>No, the NFC chip is securely hidden inside the design and doesn’t affect how it looks.</p>
                            </div>
                        </div>
                        <div className="section-list">
                            <div className=" icon-white">
                                <img src={ShieldIcon} className="icon" />
                            </div>
                            <div className="section-list-info">
                                <p className='desktop-h6'>Are the cards durable for daily use?</p>
                                <p className='desktop-body-s'>Yes, our cards are waterproof, scratch-resistant, and built to withstand frequent use over time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
}
