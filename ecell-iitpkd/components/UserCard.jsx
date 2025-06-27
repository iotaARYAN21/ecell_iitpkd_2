import React from 'react'
import './userCard.css';
import user from  "../src/assets/user.jpg";
import userLinkedIn from "../src/assets/usercard_lk.svg";
import userMail from "../src/assets/usercard_mail.svg";
const UserCard = () => {
  return (
    <div className="card_container">
        <div className="user_card">
            <div className="image">
                <img src={user} alt="" className="user_img" />
            </div>
            <h3>User</h3>
            <h4>Role</h4>
            <div className="socials">
                <h3 >socials</h3>
                <ul >
                    {/* <li><a href="" className='card_a'><img src="../usercard_ig.svg" alt="insta" /></a></li> */}
                    <li><a href="" className='card_a'><img src={userLinkedIn} alt="linkedin" /></a></li>
                    <li><a href="" className='card_a'><img src={userMail} alt="mail" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default UserCard;
