import "./allevents.css"
import Footer from "../Footer";
import startTank from  "../../src/assets/startTank.jpg";
import rocket from "../../src/assets/rocket.mp4";
import idea from "../../src/assets/ideathon.mp4";
import readMore from "../../src/assets/read-more.mp4";
import hackathonVideo from "../../src/assets/hackathon.mp4";
import business from "../../src/assets/business.mp4";
import investment from "../../src/assets/investment.mp4";
import mun from "../../src/assets/mun.mp4";
import networking from "../../src/assets/networking.mp4";
import productLaunch from "../../src/assets/productLaunch.mp4";
import techWork from "../../src/assets/techWorkshop.mp4";
import techXpo from "../../src/assets/techXpo.mp4";
import trading from "../../src/assets/trading.mp4";
function AllEvents(){
    return <>
        <div className="all-events">
                    <div className="event1">
                        <video src={rocket} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>Start Tank</h1>
                            <p className="desc">A live startup pitching event where participants present ideas to investors and the audience. Each audience member gets virtual currency to bid on ideas they like. The idea with the highest audience investment wins a prize. If that idea later launches and its share value crosses a set threshold, early audience backers receive proportional shares.</p>
                        </div>
                    </div>
                    <div className="event2">
                        <video src={rocket} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>Startup Expo</h1>
                        <p className="desc">A platform for startups and businesses to showcase their innovations and connect with potential investors and customers. We shall be inviting startups from all across India and also those supported by E-Cells of other IITs.</p>
                        </div>
                    </div>
                <div className="event3">
                    <video src={hackathonVideo} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>Technical Hackathon (48-hour challenge)</h1>
                        <p className="desc">Teams will work on building prototypes and MVPs of innovative solutions.</p>
                        </div>
                </div>
                <div className="event4">
                    <video src={idea} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>IdeaThon (24 Hour Challenge)</h1>
                        <p className="desc">Following up on a problem statement teams will have 24 hours to thrive and come up with a proper scratch to product plan and also how the
        company might sustain in the market. Teams simulate running the startup, making real-time business decisions.</p>
                        </div>
                </div>
                <div className="event5">
                    <video src={techXpo} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>TechXpo</h1>
                        <p className="desc">A platform for people across all colleges to showcase their projects. (The startup booth and TechXpo will happen simultaneously at the same place.)</p>
                        </div>
                </div>
                <div className="event6">
                    <video src={business} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>Business Plan Competition</h1>
                        <p className="desc">Teams will pitch a detailed business plan to a jury.</p>
                        </div>
                </div>
                <div className="event7">
                    <video src={productLaunch} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>Product Launch Challenge</h1>
                        <p className="desc">Teams work on branding, marketing, and sales strategies.</p>
                        </div>
                </div>
                <div className="event8">
                    <video src={networking} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>Networking Dinners & Industry Meetups</h1>
                        <p className="desc">Exclusive invite-only networking sessions for selected participants, mentors, and investors.</p>
                        </div>
                </div>
                <div className="event9">
                    <video src={techWork} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>Technical and Entrepreneurial Workshops</h1>
                        <p className="desc">Covering cutting-edge technologies, product design, digital marketing, and financial modeling.</p>
                        </div>
                </div>
                <div className="event10">
                    <video src={mun} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>MUN</h1>
                        <p className="desc">A nationwide MUN focussing on the entrepreneurial aspects and the challenges the society faces in execution of ideas.</p>
                        </div>
                </div>
                <div className="event11">
                    <video src={trading} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>Live Trading Simulation</h1>
                        <p className="desc">An interactive session for students to understand financial markets through virtual trading.</p>
                        </div>
                </div>
                <div className="event12">
                    <video src={investment} className='card' autoPlay loop muted playsInline></video>
                        <div className='event-content'>
                            <h1>Investment Game</h1>
                        <p className="desc">Participants act as investors and entrepreneurs, negotiating deals based on real-time data.</p>
                        </div>
                </div>
    </div>
    <Footer/>
    </>
}
export default AllEvents;