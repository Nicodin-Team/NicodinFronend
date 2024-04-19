import React from 'react';
import { FaEnvelopeOpenText } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";


import './AnnouncementDetail.css';

class AnnouncementDetail extends React.Component {
  constructor(props) {
    super(props);
    // Assuming your announcement data is passed as props
    this.state = {
      announcement: props.announcement,
      isInterested: false // To track if the freelancer is interested in the project
    };
  }

  handleInterest = () => {
    // Toggle the interest state
    this.setState(prevState => ({
      isInterested: !prevState.isInterested
    }));
    // You can implement further logic here, like API calls to notify the employer
  }

  render() {
    const { announcement, isInterested } = this.state;
    return (
        <div className="wrapper">
            <div className="announcement-detail">
                <div className = "project-header"> <h1>Project Detail</h1></div>
                <div className="announcement-title"><h1><FaEnvelopeOpenText /> Title</h1><p>{announcement.title}</p></div>
                <div className="announcement-Description"><h2><MdOutlineAssignment /> Description</h2><p> {announcement.description}</p></div>
                <div className="announcement-Deadline"><h2><GiSandsOfTime style={{color: 'black'}}/> Deadline</h2> <p>{announcement.deadline}</p></div>
                <div className="announcement-Budget"><h2><RiMoneyDollarCircleFill style={{color: 'green'}} /> Budget</h2> <p>{announcement.budget}</p></div>
                <div className="announcement-Employee"><h2><MdEngineering /> Employee</h2> <p>{announcement.employer}</p></div>
                
                {isInterested ? (
                <button onClick={this.handleInterest}>Not Interested</button>
                ) : (
                <button onClick={this.handleInterest}>I Want to Do This Project</button>
                )}
            </div>
        </div>
    );
  }
}

export default AnnouncementDetail;
