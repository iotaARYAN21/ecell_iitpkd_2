// import React from "react";
import "./home.css";
// import Navbar from "./Navbar.jsx";
import {useRef} from "react";
import {useMediaQuery} from 'react-responsive';
// import userCard from "./UserCard";
import UserCard from "./UserCard";
// import EventCard from "./EventCard";
import Footer from "./Footer";

// importing images
import arrow from "../src/assets/arrow.png";
import startTank from "../src/assets/startTank.jpg";
import hackathon from "../src/assets/hackathon.jpg";
import ideathon from "../src/assets/ideathon.jpg";
import rocket from "../src/assets/rocket.mp4";
import idea from "../src/assets/ideathon.mp4";
import readMore from "../src/assets/read-more.mp4";
import hackathonVideo from "../src/assets/hackathon.mp4";
import teamData from "../Backend/teamData25.js"
import Carousel from "./Carousel.jsx";
function Home(){
    const introContent = useRef();
    const isMobile = useMediaQuery({maxWidth:600});
    function handleClick(){
        introContent.current.scrollIntoView({behavior:"smooth"});      
    }
    
    return <div className="home">
        <div className="home-overlay">
            <div className="homeContent">
                <h1 className="slide-up-text  "><span>Entrepreneurship Cell</span><br />
  <span>IIT Palakkad</span></h1>
                {/* <h1 className="slide-up-text">IIT Palakkad</h1> */}
                {/* <div className="explore slide-up-text" ref={introContent} onClick={handleClick}><h3>Explore</h3></div> */}
                <img src={arrow} alt="" className="arrow"  onClick={handleClick}/>
            </div>
            <div className="intro animate-elt" ref={introContent} >
                <h1 className="heading">About Us</h1>
                <p className="text">E-Cell IIT Palakkad is a student-driven initiative that nurtures the spirit of entrepreneurship through events, mentorship, and hands-on support.
                    At the core is <b>SURGE</b> ("Startup Upscaling and Resource Growth Engine")—a dynamic team of students, faculty, alumni, and experts from TechIn, IPTIF, and the CSquare Innovation Lab—dedicated to turning ideas into startups.
                </p>
                <h2>Got an idea? SURGE will help you:</h2>
                <div className="list">
                    <ul className="text">
                        <li > Build Your Team – Connect with coders, designers, and doers.</li>
                        <li> Get Mentored – Guidance from industry pros, professors, and alumni.</li>
                        <li> Develop an MVP – Shape your idea into a working prototype.</li>
                        <li> Pitch to Investors – Gain access to funding and incubation.</li>
                    </ul>
                 </div>
            </div>
            
            <div className="vision animate-elt">
                    <h1>Our Vision</h1> 
                    <p className="text">The Entrepreneurship Cell of IIT Palakkad envisions building a thriving entrepreneurial ecosystem within the institute. With the launch of its flagship event, the E-Summit 2026, the E-Cell aims to position the institute as a hub of innovation and entrepreneurship. The vision is to empower students by providing them with real-world exposure, mentorship, and resources necessary to transform ideas into impactful ventures. Through national-level competitions, networking events, and collaborations with industry leaders, IIT Palakkad E-Cell seeks to inspire the next generation of entrepreneurs and foster a culture of creative problem-solving and startup excellence.
                    </p>
                </div>
                <div className="events-activities">
                    <h1>Events & Activities</h1>
                    <Carousel/>
                    {/* <div className="container">
                        <EventCard vid={rocket}>
                            <h1>Start Tank</h1> 
                    <p>A live startup pitching event where participants present ideas to investors and the audience. Each audience member gets virtual currency to bid on ideas they like. The idea with the highest audience investment wins a prize. If that idea later launches and its share value crosses a set threshold, early audience backers receive proportional shares.</p>
                        </EventCard>
                        <EventCard vid={hackathonVideo}>
                            <h1>Hackathon</h1>
                    <p>Teams will work on building prototypes and MVPs of innovative solutions.</p>
                        </EventCard>
                        <EventCard vid={idea}>
                                <h1>Ideathon</h1>
                        <p>Following up on a problem statement teams will have 24 hours to thrive and come up with a proper scratch to product plan and also how the
    company might sustain in the market. Teams simulate running the startup, making real-time business decisions.</p>
                        </EventCard>
                        <EventCard vid={readMore}>
                            <h1 style={{paddingTop:'5rem'}}>For all the events check out Events page</h1>
                        </EventCard>
                    </div> */}
                </div>
                <div className="team">
                    <h1>Our Team</h1>
                    <div className="three-row">
                        {teamData.slice(0,2).map((member,index)=>(
                            <UserCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                mail={member.mail}
                                linkedin={member.linkedin}
                            />
                        ))}
                    </div>
                    <div className="two-row">
                        
                        {teamData.slice(2,4).map((member,index)=>(
                            <UserCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                mail={member.mail}
                                linkedin={member.linkedin}
                            />
                        ))}

                    </div>
                    <div className="three-row">

                        {teamData.slice(4,7).map((member,index)=>(
                            <UserCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                mail={member.mail}
                                linkedin={member.linkedin}
                            />
                        ))}
                        
                    </div>
                    <div className="three-row">
                        {teamData.slice(8,11).map((member,index)=>(
                            <UserCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                mail={member.mail}
                                linkedin={member.linkedin}
                            />
                        ))}
                        
                    </div>
                    <div className="three-row">
                        {teamData.slice(11,14).map((member,index)=>(
                            <UserCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                mail={member.mail}
                                linkedin={member.linkedin}
                            />
                        ))}
                        
                        
                    </div>
                    <div className="three-row">
                        {teamData.slice(14,17).map((member,index)=>(
                            <UserCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                mail={member.mail}
                                linkedin={member.linkedin}
                            />
                        ))}
                        
                    </div>
                    <div className="three-row">
                        {teamData.slice(17,20).map((member,index)=>(
                            <UserCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                mail={member.mail}
                                linkedin={member.linkedin}
                            />
                        ))}
                        
                    </div>
{/*                     
                    <div className="two-row">
                        {teamData.slice(18,20).map((member,index)=>(
                            <UserCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                mail={member.mail}
                                linkedin={member.linkedin}
                            />
                        ))}
                        
                    </div> */}
                </div>
                <Footer/>
        </div>
       
    </div>
}
export default Home;
