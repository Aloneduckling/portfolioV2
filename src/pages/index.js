import * as React from "react";
import Availablebtn from "../components/AvailableBtn";
import heroImage from "../images/hero-section-image-sm.png";
import { BiSolidChevronRight } from "react-icons/bi";
import { FiLink2 } from "react-icons/fi";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillHeart, AiFillInstagram } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

const IndexPage = () => {
    return (
        <>
            <div className='container'>
                <nav className='top'>
                    <div className='top-greet'>
                        <span className='top-hello'>👋 Hello</span>
                        <p className='top-intro'>I am Shantanu Kaushik</p>
                    </div>
                    <Availablebtn isAvailable={false} />
                    <div>
                        <ul className='top-nav'>
                            <li className='top-nav-item' href='#about'>
                                <a href='#about'>About</a>
                            </li>
                            <li className='top-nav-item' href='#projects'>
                                <a href='#projects'>Projects</a>
                            </li>
                            <li className='top-nav-item' href='#contact'>
                                <a href='#contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Availablebtn isAvailable={false} cls={"ava-btn--2"} />

                <header className='hero'>
                    <div className='hero-cta'>
                        <h1 className='hero-cta-primary'>
                            Need a{" "}
                            <span className='hero-cta-primary-subtext'>
                                website{" "}
                            </span>{" "}
                            that is both{" "}
                            <span className='hero-cta-primary-subtext'>
                                beautiful
                            </span>{" "}
                            and{" "}
                            <span className='hero-cta-primary-subtext'>
                                functional
                            </span>{" "}
                            ?{" "}
                            <span className='color-green'>
                                I can make it for you.
                            </span>
                        </h1>

                        <p className='hero-cta-secondary'>
                            I am a full-stack web developer and I design and
                            build websites that stand out.
                        </p>

                        <p className='font-base mb-2rem'>Want to Hire me?</p>

                        <a className='hero-cta-btn' href='#contact'>
                            Yes Build Me A Website{" "}
                            <BiSolidChevronRight className='hero-cta-btn-icon' />
                        </a>
                    </div>
                    <img src={heroImage} alt='hero' className='hero-profile' />
                </header>

                <section className='about-me' id='about'>
                    <h2 className='about-me-heading'>About Me</h2>

                    <p className='about-me-p'>
                        Hello there! I'm Shantanu Kaushik, a passionate and
                        creative full-stack web developer with a deep love for
                        crafting exceptional online experiences. With a keen eye
                        for design and a strong command over various web
                        technologies, I take great pride in my ability to bring
                        ideas to life and build stunning, functional websites.
                    </p>
                    <p className='about-me-p'>
                        My journey into the world of web development started
                        with a fascination for the boundless possibilities that
                        the internet offers. Over the years, I've honed my
                        skills and expertise in an array of technologies that
                        empower me to create dynamic and user-friendly websites.
                    </p>
                </section>

                <section className='projects' id='projects'>
                    <h1 className='projects-heading'>My projects</h1>

                    <div className='project'>
                        <div className='project-details'>
                            <h2 className='project-title'>Coavoid-web-app</h2>
                            <ul className='project-tech_stack-list'>
                                <li className='project-tech_stack-list-item'>
                                    Node.js
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Express
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Bootstrap
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Geocoding API
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Mapbox
                                </li>
                            </ul>
                            <div className='project-link'>
                                <a href='#' className='project-link__weblink'>
                                    <FiLink2 className='project-link__svg' />
                                </a>
                                <a href='#' className='project-link__github'>
                                    <BsGithub className='project-link__svg' />
                                </a>
                            </div>
                            <p className='project-description'>
                                Coavoid-web-app is a tool which enables the user
                                to get informed about the amount crowd at a
                                place beforehand. I created this during the 2nd
                                wave of Covid-19 to solve the problem that I
                                myself faced.
                            </p>
                        </div>
                        <img
                            src={heroImage}
                            alt='coavoid'
                            className='project-image'
                        />
                    </div>

                    <div className='project row-reverse'>
                        <div className='project-details'>
                            <h2 className='project-title'>Coavoid-web-app</h2>
                            <ul className='project-tech_stack-list'>
                                <li className='project-tech_stack-list-item'>
                                    Node.js
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Express
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Bootstrap
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Geocoding API
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Mapbox
                                </li>
                            </ul>
                            <div className='project-link'>
                                <a href='#' className='project-link__weblink'>
                                    <FiLink2 className='project-link__svg' />
                                </a>
                                <a href='#' className='project-link__github'>
                                    <BsGithub className='project-link__svg' />
                                </a>
                            </div>
                            <p className='project-description'>
                                Coavoid-web-app is a tool which enables the user
                                to get informed about the amount crowd at a
                                place beforehand. I created this during the 2nd
                                wave of Covid-19 to solve the problem that I
                                myself faced.
                            </p>
                        </div>
                        <img
                            src={heroImage}
                            alt='coavoid'
                            className='project-image'
                        />
                    </div>
                </section>

                <section className='projects'>
                    <h1 className='projects-heading'>My Work Experience</h1>
                    <div className='project'>
                        <div className='project-details'>
                            <h2 className='project-title'>Coavoid-web-app</h2>
                            <ul className='project-tech_stack-list'>
                                <li className='project-tech_stack-list-item'>
                                    Node.js
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Express
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Bootstrap
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Geocoding API
                                </li>
                                <li className='project-tech_stack-list-item'>
                                    Mapbox
                                </li>
                            </ul>
                            <div className='project-link'>
                                <a href='#' className='project-link__weblink'>
                                    <FiLink2 className='project-link__svg' />
                                </a>
                                <a href='#' className='project-link__github'>
                                    <BsGithub className='project-link__svg' />
                                </a>
                            </div>
                            <p className='project-description'>
                                Coavoid-web-app is a tool which enables the user
                                to get informed about the amount crowd at a
                                place beforehand. I created this during the 2nd
                                wave of Covid-19 to solve the problem that I
                                myself faced.
                            </p>
                        </div>
                        <img
                            src={heroImage}
                            alt='coavoid'
                            className='project-image'
                        />
                    </div>
                </section>

                <section className='contact' id='contact'>
                    <h2 className='contact-heading'>
                        Send me a message
                        <span className='contact-subheading'>
                            I would love to hear from you
                        </span>
                    </h2>

                    <form action='#' className='contact-form'>
                        <div className='contact-form-group'>
                            <label htmlFor='name' className='form-label'>
                                YOUR NAME
                            </label>
                            <input
                                type='text'
                                id='name'
                                className='form-input'
                            />
                        </div>
                        <div className='contact-form-group'>
                            <label htmlFor='email' className='form-label'>
                                EMAIL ADDRESS
                            </label>
                            <input
                                type='email'
                                id='email'
                                className='form-input'
                            />
                        </div>
                        <div className='contact-form-group'>
                            <label htmlFor='message' className='form-label'>
                                YOUR MESSAGE
                            </label>
                            <textarea
                                id='message'
                                className='form-input'
                                rows={10}
                            />
                        </div>
                        <button className='submit'>Send</button>
                    </form>
                </section>
            </div>
            <footer className='footer'>
                <div className='footer-left'>
                    <h1 className='footer-left-name'>Shantanu Kaushik</h1>

                    <p className='footer-left-subtext'>
                        Made With <AiFillHeart className='footer-left-heart' />
                    </p>

                    <div className='footer-left-icon-tray'>
                        <a
                            href='https://github.com/Aloneduckling/'
                            className='footer-left-link'
                            target='_blank'
                        >
                            <BsGithub className='footer-left-icon' />
                        </a>

                        <a
                            href='https://www.linkedin.com/in/shantanu-kaushik-731258176/'
                            className='footer-left-link'
                            target='_blank'
                        >
                            <BsLinkedin className='footer-left-icon' />
                        </a>

                        <a
                            href='https://dev.to/aloneduckling'
                            className='footer-left-link'
                            target='_blank'
                        >
                            <FaDev className='footer-left-icon' />
                        </a>

                        <a
                            href='https://twitter.com/Shantan05703379'
                            className='footer-left-link'
                            target='_blank'
                        >
                            <BsTwitter className='footer-left-icon' />
                        </a>

                        <a
                            href='https://www.instagram.com/shantanukaushik12/'
                            className='footer-left-link'
                            target='_blank'
                        >
                            <AiFillInstagram className='footer-left-icon' />
                        </a>
                    </div>
                </div>

                <div className='footer-right'>
                    <a
                        href='https://drive.google.com/file/d/180d8NhcX9-fuyUF1qsSADoluLpu0aBPd/view?usp=sharing'
                        className='footer-right-btn'
                        target='_blank'
                    >
                        My Resume
                    </a>
                </div>
            </footer>
        </>
    );
};

export default IndexPage;

export const Head = () => {
    return (
        <>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link
                rel='preconnect'
                href='https://fonts.gstatic.com'
                crossorigin
            />
            <link
                href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;800&family=Poppins:wght@300;400;700;800&display=swap'
                rel='stylesheet'
            />
        </>
    );
};
