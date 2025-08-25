import '../assets/css/Footer.css'        
import Link from 'next/link'

const FooterComp = () =>{
    return(
        <>
        <footer>
            <div className="footer-row">
                <div className="footer-column">
                    <h3 className='footer-logo'>International Youth Chemistry Olympiad</h3>
                    <p className='web-desc'>
                        An event for the achievement of talented young academics from various countries around the world in solving global problems
                    </p>
                </div>
                <div className="footer-column">
                    <h5>Infromation Links</h5>
                    <ul className='footer-links'>
                        <li>
                            <Link href="/#contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="https://iysa.or.id" target='_blank'>Our Main Website</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Navigation</h5>
                    <ul className='footer-links'>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/#about">About</Link>
                        </li>
                        <li>
                            <Link href="https://drive.google.com/file/d/1oTKgi-6BYUVDPh-Mn_K2w86dxGqaAIyO/view?usp=sharing" 
                                target='_blank'>
                                    Guide Book
                            </Link>
                        </li>
                        <li>
                            <Link href="/#category">Category</Link>
                        </li>
                        <li>
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Get In Touch</h5>
                    <ul className='contact-details'>
                        <li>
                            <i className='fas fa-map-marked-alt'></i>
                            <span>Jl. Kemang No. 63 RT 03 RW 06</span>
                        </li>
                        <li>
                            <i className='fas fa-phone-alt'></i>
                            <span>+6283870026877</span>
                        </li>
                        <li>
                            <i className='fas fa-envelope'></i>
                            <span>iysa.olympiad@gmail.com</span>
                        </li>
                    </ul>
                    <ul className='social-link-icons'>
                        <li>
                            <Link href="https://www.facebook.com/profile.php?id=100063979907207" 
                                target='_blank'>
                                <i className='fab fa-facebook-f'></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/iyco.official?utm_source=ig_web_button_share_sheet&igsh=MXU2cm8xMWx0N284MA==" 
                                target='_blank'>
                                <i className='fab fa-instagram'></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/@IYSAOfficial" 
                                target='_blank'>
                                <i className='fab fa-youtube'></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.tiktok.com/@iysa.official" 
                                target='_blank'>
                                <i className='fab fa-tiktok'></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" 
                                target='_blank'>
                                <i className='fab fa-linkedin'></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-details">
            <div className="bottom_text">
                <span className="copyright_text">Copyright &#169; 2024 <a href="#">IYCO Official.</a>All rights reserved</span>
                <span className="policy_terms">
                    <Link href="#">Privacy policy</Link>
                    <Link href="#">Terms & Condition</Link>
                </span>
            </div>
        </div>
        </footer>
        </>
    )
}

export default FooterComp
