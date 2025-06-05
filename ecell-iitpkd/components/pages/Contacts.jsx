import './Contacts.css';
function Contacts(){
    return <form action="submit">
        <h1>SEND US A MESSAGE</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Enter your E-Mail" />
        <input type="text" placeholder="Subject" />
        <textarea name="message" id="message" placeholder="Message" rows={10} cols={20}></textarea>
        <div className="btn">
            <button>Send</button>
        </div>
    </form>
    //TODO 
    //TODO1 : to make send functionality work  
}
export default Contacts;