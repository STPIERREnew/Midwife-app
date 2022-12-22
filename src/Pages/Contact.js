import React from 'react'; 
import './Contact.css'

export default function Contact() {
    return (
        <body>
            
        <div class="container2">
            <section class="contact">
                <div class="content">
                    <h2>Contact Me</h2>
                </div>
                <div className="container1">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>PMCU-Boraluwewa</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>07151767878</p>
                            </div>
                        </div>
                        <div class="box">
                            <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>sadhikakrishanthia@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="contactForm">
                        <form className="contactus"  onsubmit="submitContactForm(event)">
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" id="name" name="name" required="required" placeholder="Full Name"/>
                                
                            </div>
                            <div className="inputBox">
                                <input type="text" id="email" name="email" required="required" placeholder="Email"/>
                                
                            </div>
                            <div className="inputBox">
                                <textarea required="required" id="message" name="message" placeholder="Message"></textarea>
                                
                            </div>
                            <div className="inputBox">
                                <input type="submit" name="" value="Submit" required="required"/>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </section>
        </div>
          
        
        <footer id="ftr">
            <p>Copyright &copy; 2022</p>
        </footer>
        
    </body>
    )
}