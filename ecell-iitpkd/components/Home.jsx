// import React from "react";
import "./home.css";
import Navbar from "./Navbar.jsx";
import {useRef} from "react";
// import arrow from "../public/arrow.png"
function Home(){
    const introContent = useRef();
    function handleClick(){
        introContent.current.scrollIntoView({behavior:"smooth"});      
    }
    const date = new Date().getFullYear();
    return <div className="home">
        <div className="home-overlay">
            <div className="homeContent">
                <h1 className="slide-up-text">Entrepreneurship Cell</h1>
                <h1 className="slide-up-text">IIT Palakkad</h1>
                {/* <div className="explore slide-up-text" ref={introContent} onClick={handleClick}><h3>Explore</h3></div> */}
                <img src="/arrow.png" alt="" className="arrow"  onClick={handleClick}/>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quidem assumenda distinctio! Et odio iusto perspiciatis ullam dolore labore quasi adipisci nobis exercitationem distinctio expedita quo saepe accusamus deserunt, magni nostrum repellat, quisquam ab perferendis explicabo? Repudiandae inventore corporis dolores ipsa repellat deserunt fuga cumque laudantium, minima suscipit facere, nihil laborum, sint vero. Porro nobis nesciunt deleniti vel itaque. Possimus unde, eaque quasi nihil sint ducimus ipsa placeat earum, ut ipsum, totam fugit a. Repudiandae numquam, deleniti laboriosam ducimus consequatur rem explicabo quis iusto reprehenderit sunt a fugiat. Officia distinctio optio molestiae quae adipisci id delectus! Recusandae animi et impedit officia mollitia explicabo repudiandae ipsa veritatis ratione quaerat. A assumenda, velit rerum sapiente omnis alias ullam iste rem aspernatur quisquam laborum! Voluptatum qui dolorum soluta eius fugiat eum dicta laudantium mollitia sed, culpa, blanditiis non officia maiores. Eius laudantium nesciunt at quas neque corporis eos animi asperiores, quaerat ipsum iusto. Perspiciatis totam similique explicabo numquam doloremque maxime quo fugit enim velit nostrum magnam a, eaque nulla tempore qui quae tenetur provident corporis, ut molestiae rerum odit facilis sequi. Corrupti impedit eligendi odit, fuga doloribus voluptatibus consectetur in assumenda voluptate minima iure corporis nesciunt culpa nam quam perspiciatis harum omnis aspernatur? Mollitia, aliquid unde impedit delectus laborum quibusdam soluta sit nulla a qui quae veniam exercitationem natus perspiciatis vero dolores eligendi eveniet expedita maxime! Est iste nisi earum impedit quasi et corporis quibusdam. Animi repellat quae dolorem dolores dolore eaque, voluptatem ipsa velit praesentium, illum aperiam vero reiciendis aut ipsam! Perferendis.
                    </p>
                </div>
                <div className="events-activities animate-elt">
                    <h1>Events & Activities</h1>
                    <div className="container">
                        <div className="content">
                            <img src="/startTank.jpg" alt="" className="card" />
                            <div className="description">
                                <h1>Start Tank</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, repellendus! Provident nisi reprehenderit eos, autem totam nemo non voluptatum saepe? Hic reiciendis sit illum quia incidunt voluptatem aliquam illo sunt itaque velit esse, autem, officia dolor dolorem vitae facere quibusdam tempore libero minus repudiandae quidem non? Consequuntur ex debitis eum.</p>
                            </div>
                        </div>
                        <div className="content">
                            <img src="/startup expo.jpg" alt="" className="card" />
                            <div className="description">
                                <h1>Startup Expo</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae unde facilis possimus at soluta ad architecto sint sequi nam, doloribus saepe distinctio sed consequuntur corrupti quis eligendi neque consequatur? Assumenda eligendi nobis, quas molestiae hic iusto quae nam eum aliquam reprehenderit, distinctio id, ipsum itaque beatae iure qui unde consectetur?
                                </p>
                            </div>
                        </div>
                        <div className="content">
                            <img src="/hackathon.jpg" alt="" className="card" />
                            <div className="description">
                                <h1>Hackathon</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odit suscipit dolores a nemo exercitationem perferendis fugit magni accusantium eius est amet eos non sapiente, facilis sit illum quos voluptatum temporibus architecto assumenda. Corporis dignissimos a ex quidem, dolorem laudantium ut tenetur deleniti distinctio tempore veniam dolorum accusantium reiciendis quaerat?</p>
                            </div>
                        </div>
                        <div className="content">
                            <img src="/ideathon.jpg" alt="" className="card" />
                            <div className="description">
                                <h1>Ideathon</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui explicabo dolores incidunt ut repudiandae ad expedita magni ab perferendis tenetur, modi iure molestiae assumenda et non laboriosam totam doloribus consectetur tempore consequuntur esse! Voluptas, officiis inventore nemo facere reprehenderit ipsa necessitatibus quaerat adipisci? Dignissimos ducimus obcaecati nulla id eveniet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <h1>Our Team</h1>
                    <div className="two-row">
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                    </div>
                    <div className="three-row">
                        <div className="member">
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
                        </div>
                    </div>
                    <div className="three-row">
                        <div className="member">
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
                        </div>
                    </div>
                    <div className="three-row">
                        <div className="member">
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
                        </div>
                    </div>
                    <div className="three-row">
                        <div className="member">
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
                        </div>
                    </div>
                    <div className="three-row">
                        <div className="member">
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
                        </div>
                    </div>
                    <div className="three-row">
                        <div className="member">
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
                        </div>
                    </div>
                    <div className="two-row">
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p>
                        </div>
                        <div className="member">
                            <img src="./user.jpg" alt="user" />
                            <h4>John Doe</h4>
                            <p>Role</p> 
                        </div>
                    </div>
                </div>
                <footer>
                    {/* logo
                        social media
                        useful links
                        contact
                    */}
                    <div className="footer_div1">
                        <div className="footer_r1">
                        <img src="./arrow.png" alt="logo" />
                        <h3>E-Cell IIT PALAKKAD</h3>
                        <h3>The Fire Within</h3>
                        </div>
                        <div className="footer_r2">
                            <ul>
                                <li><h3>Social Media</h3></li>
                                <li>Instagram</li>
                                <li>X (Twitter)</li>
                                <li>LinkedIn</li>
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
                            <address>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, id.</address>
                            <p>mail</p>
                        </div>
                    </div>
                    <div className="footer_div2">
                        © {date} Copyright: E-Cell IIT Palakkad
                    </div>
                </footer>
        </div>
       
    </div>
}
export default Home;
