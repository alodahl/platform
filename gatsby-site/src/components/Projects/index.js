import React from 'react';
import Link from 'gatsby-link';
import './projects.css';

const Projects = (props) => {
  return (
    <div className="project-container" id="projects">
        <div className="project">
          {/* <Link to="Phase0"> */}
            <img className="image" src='https://res.cloudinary.com/colark/image/upload/v1534454636/Colark%20Marketing%20Site/Colark_Marketing_Site_PhaseZeroEdited.png'/>
          {/* </Link> */}
        </div>
        <div className="project">
          {/* <Link to="Unstack"> */}
            <img className="image" src='http://res.cloudinary.com/colark/image/upload/r_10/v1534365717/Colark%20Marketing%20Site/Unstack.png'/>
          {/* </Link> */}
        </div>
    </div>
  );
};
<Link to="/">Go back to the homepage</Link>


export default Projects;