import "./home.css";
import {useEffect,useRef} from "react";
import {useMediaQuery} from 'react-responsive';
import UserCard from "./UserCard";
import Footer from "./Footer";

// importing images
import arrow from "../src/assets/arrow2.svg";
import ecellHome from '../src/assets/ecell_home2.png'
import teamData from "../Backend/teamData25.js"
import Carousel from "./Carousel.jsx";
import RightNavBar from "./RightNavBar.jsx";
function Home(){
    const introContent = useRef();
    const isMobile = useMediaQuery({maxWidth:600});
    function handleClick(){
        introContent.current.scrollIntoView({behavior:"smooth"});      
    }
    useEffect(() => {
        // Select all elements that should animate on scroll
        // Ensure you apply the 'animate-elt' class to the elements you want to animate
        const elements = document.querySelectorAll('.slideUpElt');
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // If the element is now intersecting (visible)
                if (entry.isIntersecting) {
                    // Add the class that triggers the smooth slide-up animation
                    entry.target.classList.add('isVisible');
                    // Stop observing after the animation has been triggered once
                    observer.unobserve(entry.target);
                }
            });
        }, {
            // Options: triggers when 10% of the element is visible
            rootMargin: '0px',
            threshold: 0.1 
        });

        // Start observing each element
        elements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup function
        return () => observer.disconnect();
    }, []);


    return <div className="home">
        <div className="home-overlay">
            <section class="hero-split">
      <div class="hero-left">
        <h1 className="slide-up-text  "><span>Entrepreneurship Cell</span><br />
  <span>IIT Palakkad</span></h1>
        
      </div>
      <div class="hero-right">
        <img src={arrow} alt="" className="arrow"  onClick={handleClick}/>
        <img id="ecellHome" src={ecellHome} alt="" />
      </div>
    </section>

            {/* <div className="homeContent">
                <h1 className="slide-up-text  "><span>Entrepreneurship Cell</span><br />
  <span>IIT Palakkad</span></h1>
                <img src={arrow} alt="" className="arrow"  onClick={handleClick}/>
            </div> */}
            <div className="intro slideUpElt" ref={introContent} >
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
            
            <div className="vision slideUpElt">
                    <h1>Our Vision</h1> 
                    <p className="text">The Entrepreneurship Cell of IIT Palakkad envisions building a thriving entrepreneurial ecosystem within the institute. With the launch of its flagship event, the E-Summit 2026, the E-Cell aims to position the institute as a hub of innovation and entrepreneurship. The vision is to empower students by providing them with real-world exposure, mentorship, and resources necessary to transform ideas into impactful ventures. Through national-level competitions, networking events, and collaborations with industry leaders, IIT Palakkad E-Cell seeks to inspire the next generation of entrepreneurs and foster a culture of creative problem-solving and startup excellence.
                    </p>
            </div>
            <div className="events-activities slideUpElt">
                    <h1>Events & Activities</h1>
                    <Carousel/>
            </div>
            <div className="events slideUpElt">
                <div id="calendar-in-mainpage">
                <h1>Events Calendar</h1>
                <RightNavBar/>
            </div>
            </div>
                <div className="team slideUpElt">
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
                </div>
                <Footer/>
        </div>
       
    </div>
}
export default Home;
