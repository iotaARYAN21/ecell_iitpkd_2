import "./allevents.css"
import Footer from "../Footer";
import startTank from  "../../src/assets/startTank.jpg"
function AllEvents(){
    return <>
        <div className="all-events">
                    <div className="event1">
                        <img src={startTank} alt="" className="card" />
                        <div className='event-content'>
                            <h1>Start Tank</h1>
                            <p className="desc">A live startup pitching event where participants present ideas to investors and the audience. Each audience member gets virtual currency to bid on ideas they like. The idea with the highest audience investment wins a prize. If that idea later launches and its share value crosses a set threshold, early audience backers receive proportional shares.</p>
                        </div>
                    </div>
                    <div className="event2">
                        <img src={startTank} alt="" className="card" />
                        <div className='event-content'>
                            <h1>Startup Expo</h1>
                        <p className="desc">A platform for startups and businesses to showcase their innovations and connect with potential investors and customers. We shall be inviting startups from all across India and also those supported by E-Cells of other IITs.</p>
                        </div>
                    </div>
                <div className="event3">
                    <img src={startTank} alt="" className="card" />
                        <div className='event-content'>
                            <h1>Technical Hackathon (48-hour challenge)</h1>
                        <p className="desc">Teams will work on building prototypes and MVPs of innovative solutions.</p>
                        </div>
                </div>
                <div className="event4">
                    <img src={startTank} alt="" className="card" />
                        <div className='event-content'>
                            <h1>IdeaThon (24 Hour Challenge)</h1>
                        <p className="desc">Following up on a problem statement teams will have 24 hours to thrive and come up with a proper scratch to product plan and also how the
        company might sustain in the market. Teams simulate running the startup, making real-time business decisions.</p>
                        </div>
                </div>
                <div className="event5">
                    <img src={startTank} alt="" className="card" />
                        <div className='event-content'>
                            <h1>TechXpo</h1>
                        <p className="desc">A platform for people across all colleges to showcase their projects. (The startup booth and TechXpo will happen simultaneously at the same place.)</p>
                        </div>
                </div>
                <div className="event6">
                    <img src={startTank} alt="" className="card" />
                        <div className='event-content'>
                            <h1>Business Plan Competition</h1>
                        <p className="desc">Teams will pitch a detailed business plan to a jury.</p>
                        </div>
                </div>
                <div className="event7">
                    <img src={startTank} alt="" className="card" />
                        <div className='event-content'>
                            <h1>Product Launch Challenge</h1>
                        <p className="desc">Teams work on branding, marketing, and sales strategies.</p>
                        </div>
                </div>
                <div className="event8">
                    <img src={startTank} alt="" className="card" />
                        <div className='event-content'>
                            <h1>Networking Dinners & Industry Meetups</h1>
                        <p className="desc">Exclusive invite-only networking sessions for selected participants, mentors, and investors.</p>
                        </div>
                </div>
                <div className="event9">
                    <img src={startTank} alt="" className="card" />
                        <div className='event-content'>
                            <h1>Technical and Entrepreneurial Workshops</h1>
                        <p className="desc">Covering cutting-edge technologies, product design, digital marketing, and financial modeling.</p>
                        </div>
                </div>
                <div className="event10">
                    <img src={startTank} alt="" className="card" />
                        <div className='event-content'>
                            <h1>MUN</h1>
                        <p className="desc">A nationwide MUN focussing on the entrepreneurial aspects ad the challenges the society faces in execution of ideas.</p>
                        </div>
                </div>
                <div className="event11">
                    <img src={startTank} alt="" className="card" />
                        <div className='event-content'>
                            <h1>Live Trading Simulation</h1>
                        <p className="desc">An interactive session for students to understand financial markets through virtual trading.</p>
                        </div>
                </div>
                <div className="event12">
                    <img src={startTank} alt="" className="card" />
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