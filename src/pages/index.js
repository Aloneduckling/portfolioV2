import React, { useState } from "react";
import Project from "../components/Project";
import { graphql } from "gatsby";
import Availablebtn from "../components/AvailableBtn";
import heroImage from "../images/hero-section-image-sm.png";
import { BiSolidChevronRight } from "react-icons/bi";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillHeart, AiFillInstagram } from "react-icons/ai";
import { FaDev } from "react-icons/fa";



//index page
const IndexPage = ({ data }) => {
    const [showMessage, setshowMessage] = useState(false);
    const [formError, setFormError] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        e.target.reset();
        try {
            await fetch(
                "https://getform.io/f/7e55e3c6-d05b-4e37-8310-dd7e19aefde4",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                }
            ).then((res) =>  {
                if (res.status !== 200) {
                    throw new Error('err');
                }
            });
        } catch (error) {
            setFormError(true);
        }
        
        setshowMessage(true);
        setTimeout(() => {
            setshowMessage(false);
            setFormError(false);
        }, 3000);
    };

    const availability = data.sanityAvailability.isAvailable;

    const pr = data.allSanityProjects.edges.filter((item) => {
        return item.node.category === "pr";
    });

    const we = data.allSanityProjects.edges.filter((item) => {
        return item.node.category === "we";
    });

    const one = pr.map((item, id) => {
        return <Project key={item.node.id} project={item.node} />;
    });

    const two = we.map((item, id) => {
        return <Project key={item.node.id} project={item.node} />;
    });

    return (
        <>
            <div className='container'>
                <nav className='top'>
                    <div className='top-greet'>
                        <span className='top-hello'>👋 Hello</span>
                        <p className='top-intro'>I am Shantanu Kaushik</p>
                    </div>
                    <Availablebtn isAvailable={availability} />
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

                <Availablebtn isAvailable={availability} cls={"ava-btn--2"} />

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
                    {one}
                </section>

                <section className='projects'>
                    <h1 className='projects-heading'>My Work Experience</h1>
                    {two}
                </section>

                <section className='contact' id='contact'>
                    <h2 className='contact-heading'>
                        Send me a message
                        <span className='contact-subheading'>
                            I would love to hear from you
                        </span>
                    </h2>

                    <form className='contact-form' onSubmit={handleFormSubmit}>
                        <div className='contact-form-group'>
                            <label htmlFor='name' className='form-label'>
                                YOUR NAME
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                className='form-input'
                                required
                            />
                        </div>
                        <div className='contact-form-group'>
                            <label htmlFor='email' className='form-label'>
                                EMAIL ADDRESS
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                className='form-input'
                                required
                            />
                        </div>
                        <div className='contact-form-group'>
                            <label htmlFor='message' className='form-label'>
                                YOUR MESSAGE
                            </label>
                            <textarea
                                id='message'
                                className='form-input'
                                name='message'
                                rows={10}
                                required
                            />
                        </div>
                        <input
                            type='hidden'
                            name='_gotcha'
                            style={{ display: "none !important" }}
                        ></input>
                        <div className='contact-form-group'>
                            <button className='submit'>Send</button>
                            {showMessage && (
                                <p className='message'>
                                    {formError
                                        ? `An error occurred, please try again later`
                                        : `Thanks for getting in touch! we will get
                                    back to you soon.`}
                                </p>
                            )}
                        </div>
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
                            rel='noreferrer'
                        >
                            <BsGithub className='footer-left-icon' />
                        </a>

                        <a
                            href='https://www.linkedin.com/in/shantanu-kaushik-731258176/'
                            className='footer-left-link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <BsLinkedin className='footer-left-icon' />
                        </a>

                        <a
                            href='https://dev.to/aloneduckling'
                            className='footer-left-link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaDev className='footer-left-icon' />
                        </a>

                        <a
                            href='https://twitter.com/Shantan05703379'
                            className='footer-left-link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <BsTwitter className='footer-left-icon' />
                        </a>

                        <a
                            href='https://www.instagram.com/shantanukaushik12/'
                            className='footer-left-link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <AiFillInstagram className='footer-left-icon' />
                        </a>
                    </div>
                </div>

                <div className='footer-right'>
                    <a
                        href='https://drive.google.com/file/d/1L09DSidXgztOxBvfafelq3vh--4LR5ZO/view?usp=sharing'
                        className='footer-right-btn'
                        target='_blank'
                        rel='noreferrer'
                    >
                        My Resume
                    </a>
                </div>
            </footer>
        </>
    );
};

export default IndexPage;




//graphQL query
export const data = graphql`
    query q1 {
        allSanityProjects {
            edges {
                node {
                    id
                    name
                    description
                    tech_stack
                    category
                    github
                    web_link
                    image {
                        asset {
                            url
                        }
                    }
                }
            }
        }
        sanityAvailability {
            isAvailable
        }
    }
`;

//<head> confing
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
