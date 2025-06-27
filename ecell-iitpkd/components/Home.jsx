// import React from "react";
import "./home.css";
// import Navbar from "./Navbar.jsx";
import {useRef} from "react";
import {useMediaQuery} from 'react-responsive';
// import userCard from "./UserCard";
import UserCard from "./UserCard";
import EventCard from "./EventCard";
import Footer from "./Footer";

// importing images
import arrow from "../src/assets/arrow.png";
import startTank from "../src/assets/startTank.jpg";
import hackathon from "../src/assets/hackathon.jpg";
import ideathon from "../src/assets/ideathon.jpg";

function Home(){
    const introContent = useRef();
    const isMobile = useMediaQuery({maxWidth:600});
    function handleClick(){
        introContent.current.scrollIntoView({behavior:"smooth"});      
    }
    
    return <div className="home">
        <div className="home-overlay">
            <div className="homeContent">
                <h1 className="slide-up-text">Entrepreneurship Cell</h1>
                <h1 className="slide-up-text">IIT Palakkad</h1>
                {/* <div className="explore slide-up-text" ref={introContent} onClick={handleClick}><h3>Explore</h3></div> */}
                <img src={arrow} alt="" className="arrow"  onClick={handleClick}/>
            </div>
            <div className="intro animate-elt" ref={introContent} >
                <h1>About Us</h1>
                <p>E-Cell IIT Palakkad is a student-driven initiative that nurtures the spirit of entrepreneurship through events, mentorship, and hands-on support.
                    At the core is <b>SURGE</b> ("Startup Upscaling and Resource Growth Engine")—a dynamic team of students, faculty, alumni, and experts from TechIn, IPTIF, and the CSquare Innovation Lab—dedicated to turning ideas into startups.
                </p>
                <h2>Got an idea? SURGE will help you:</h2>
                <div className="list">
                    <ul>
                        <li> Build Your Team – Connect with coders, designers, and doers.</li>
                        <li> Get Mentored – Guidance from industry pros, professors, and alumni.</li>
                        <li> Develop an MVP – Shape your idea into a working prototype.</li>
                        <li> Pitch to Investors – Gain access to funding and incubation.</li>
                    </ul>
                </div>
            </div>
            <div className="vision animate-elt">
                    <h1>Our Vision</h1> 
                    <p>The Entrepreneurship Cell of IIT Palakkad envisions building a thriving entrepreneurial ecosystem within the institute. With the launch of its flagship event, the E-Summit 2026, the E-Cell aims to position the institute as a hub of innovation and entrepreneurship. The vision is to empower students by providing them with real-world exposure, mentorship, and resources necessary to transform ideas into impactful ventures. Through national-level competitions, networking events, and collaborations with industry leaders, IIT Palakkad E-Cell seeks to inspire the next generation of entrepreneurs and foster a culture of creative problem-solving and startup excellence.
                    </p>
                </div>
                <div className="events-activities">
                    <h1>Events & Activities</h1>
                    <div className="container">
                        <EventCard image={startTank}>
                            <h1>Start Tank</h1> 
                    <p>A live startup pitching session where participants present their ideas to investors. We plan to make this interesting by also allowing the audience to do bidding on each idea with virtual currency that we allot to them and the idea getting maximing investment from the audience wins a prize money and inturn the idea promises the people who bid that when it is officially launched as a product and its’ share value reaches beyond a threshold, it would give a share proportionate to the people who bid in it .</p>
                        </EventCard>
                        <EventCard image={hackathon}>
                            <h1>Hackathon</h1>
                    <p>Teams will work on building prototypes and MVPs of innovative solutions.</p>
                        </EventCard>
                        <EventCard image={ideathon}>
                             <h1>Ideathon</h1>
                    <p>Following up on a problem statement teams will have 24 hours to thrive and come up with a proper scratch to product plan and also how the
company might sustain in the market. Teams simulate running the startup, making real-time business decisions.</p>
                        </EventCard>
                        <EventCard image={startTank}>
                            <h1 style={{paddingTop:'5rem' , fontFamily:"Cursive"}}>For all the events check out Events page</h1>
                    {/* <p>A platform for startups and businesses to showcase their innovations and connect with potential investors and customers. We shall be inviting startups from all across India and also those supported by E-Cells of other IITs.
                    </p> */}
                        </EventCard>
                    </div>
                </div>
                <div className="team">
                    <h1>Our Team</h1>
                    <div className="two-row">
                        <UserCard/>
                        <UserCard/>
                        {/* <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div> */}
                    </div>
                    <div className="three-row">
                        <UserCard/>
                        <UserCard/>
                        <UserCard/>
                        {/* <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div> */}
                    </div>
                    <div className="three-row">
                        <UserCard/>
                        <UserCard/>
                        <UserCard/>
                        {/* <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div> */}
                    </div>
                    <div className="three-row">
                        <UserCard/>
                        <UserCard/>
                        <UserCard/>
                        {/* <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div> */}
                    </div>
                    <div className="three-row">
                        <UserCard/>
                        <UserCard/>
                        <UserCard/>
                        {/* <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div> */}
                    </div>
                    <div className="three-row">
                        <UserCard/>
                        <UserCard/>
                        <UserCard/>
                        {/* <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div> */}
                    </div>
                    <div className="three-row">
                        <UserCard/>
                        <UserCard/>
                        <UserCard/>
                        {/* <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div> */}
                    </div>
                    <div className="two-row">
                        <UserCard/>
                        <UserCard/>
                        {/* <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p> 
                        </div> */}
                    </div>
                </div>
                {/* <footer>
                    
                    <div className="footer_div1">
                        <div className="footer_r1">
                        <img src="./ecell_final_logo.png" alt="logo" />
                        <h3>E-Cell IIT PALAKKAD</h3>
                        <h3>The Fire Within</h3>
                        </div>
                        <div className="footer_r2">
                            <ul>
                                <li><h3>Social Media</h3></li>
                                <li><a href="https://www.instagram.com/ecell_iitpkd?igsh=MXg1b3RjYzlibXU5dg==" target="_blank"><img src="../ig.svg" alt="" /></a></li>
                                <li><a href="https://www.linkedin.com/company/ecell-iitpkd/" target="_blank"><img src="../linkedin.svg" alt="" /></a></li>
                                <li><a href="https://x.com/E_Cell_IITPKD" target="_blank"><img src="../twitter.svg" alt="" /></a></li>
                                <li><a href="https://www.youtube.com/channel/UCMBYD5neK0bhsYHuios9KPw" target="_blank"><img src="../yt.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="footer_r3">
                            
                            <ul>
                                <li><h3>Useful Links</h3> </li>
                                <li>Home</li>
                                <li>Contact Us</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div className="footer_r4">
                            <h3>CONTACT</h3>
                            <address>Indian Institute of Technology Palakkad <br></br>
                                    Kanjikode | Palakkad <br />
                                    Kerala | Pin: 678623</address>
                            <p>Mail : Surge@iitpkd.ac.in</p>
                        </div>
                    </div>
                    <div className="footer_div2">
                        © {date} Copyright: E-Cell IIT Palakkad
                    </div>
                </footer> */}
                <Footer/>
        </div>
       
    </div>
}
export default Home;
