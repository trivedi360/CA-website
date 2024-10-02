import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage">
            <img src="\Image\homepage5.png" alt="" className="homepage-img" />
            <header className="hero-section">

                <h1>Expert Tax Solutions for Businesses &
                    <br />Individuals</h1>
                <p>We handle your tax and compliance, so you can focus on your business.</p>
                <button>Book a Consultation</button>
            </header>

            <div>
                <h2 className='heading'>
                    <Link to="/services">Our Services</Link>
                </h2>
                <section className="services-overview">
                    <div className="services">
                        <div className="service-card">
                            <img src="https://via.placeholder.com/150" alt="Tax Filing" />
                            <h3>Tax Filing</h3>
                            <p>Expert tax filing for individuals and businesses.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://via.placeholder.com/150" alt="GST Payments" />
                            <h3>GST Payments</h3>
                            <p>We ensure hassle-free GST payments and compliance.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://via.placeholder.com/150" alt="Compliance Management" />
                            <h3>Compliance Management</h3>
                            <p>Stay compliant with corporate laws and regulations.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://via.placeholder.com/150" alt="Tax Filing" />
                            <h3>Tax Filing</h3>
                            <p>Expert tax filing for individuals and businesses.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://via.placeholder.com/150" alt="More Tax Filing" />
                            <h3>More Tax Filing</h3>
                            <p>Expert tax filing for individuals and businesses.</p>
                        </div>

                        <div className="service-card">
                            <img src="https://via.placeholder.com/150" alt="More Tax Filing" />
                            <h3>More Tax Filing</h3>
                            <p>Expert tax filing for individuals and businesses.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://via.placeholder.com/150" alt="More Tax Filing" />
                            <h3>More Tax Filing</h3>
                            <p>Expert tax filing for individuals and businesses.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://via.placeholder.com/150" alt="More Tax Filing" />
                            <h3>More Tax Filing</h3>
                            <p>Expert tax filing for individuals and businesses.</p>
                        </div>
                        <div className="service-card">
                            <img src="https://via.placeholder.com/150" alt="More Tax Filing" />
                            <h3>More Tax Filing</h3>
                            <p>Expert tax filing for individuals and businesses.</p>
                        </div>

                    </div>
                </section>
            </div>

            <div>
                <h2 className='heading'>
                    <Link to="/about">About Us</Link>
                </h2>
                <section className="services-overview">

                    <div className="services">
                        <div className="service-card">
                            <h3>Tax Filing</h3>
                            <p>Expert tax filing for individuals and businesses.</p>
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <h2 className='heading'>
                    <Link to="/pricing">Pricing</Link>
                </h2>
                <section className="services-overview">

                    <div className="services">
                        <div className="service-card">
                            <h3>Tax Filing</h3>
                            <p>$$$</p>
                            <p>Expert tax filing for individuals and businesses.</p>
                        </div>
                        <div className="service-card">
                            <h3>GST Payments</h3>
                            <p>$$$</p>
                            <p>We ensure hassle-free GST payments and compliance.</p>
                        </div>
                        <div className="service-card">
                            <h3>Compliance Management</h3>
                            <p>$$$</p>
                            <p>Stay compliant with corporate laws and regulations.</p>
                        </div>
                    </div>
                </section>
            </div>


            <div>
            <h2 className='heading'>
                    <Link to="/testimonials">Testimonials</Link>
                </h2>
            <div className="testimonials-page">
                <h1>What Our Clients Say</h1>
                <section className="testimonial">
                    <p>"Their tax service helped me save thousands. Highly recommend!" - Client A</p>
                </section>
                <section className="testimonial">
                    <p>"The team is professional, reliable, and affordable." - Client B</p>
                </section>
                {/* Add more testimonials */}
            </div>
            </div>
            

            <div>
                <section className="cta-section">
                    <h2>Why Choose Us?</h2>
                    <p>We provide tailored, cost-effective solutions with dedicated support.</p>
                    <button><Link to="/contact">Contact Us</Link></button>
                </section>
            </div>

        </div>
    );
};

export default HomePage;
