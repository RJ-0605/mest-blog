

import React from 'react';
import './NewCssApp.css';
import './weather.css';
import { Link } from 'react-router-dom';


export default function ChildrenComponent(props) {
    
    const articleiD="ajfsdaadgagdga234"

    return (
        <div>
            <h1 className="bigblue"> Weather App </h1>
            <br />
            {/* {props.loggedin === true ?
			   <p>" Hello Welcome {props.email}"</p>

			  :null} */}

            <Link to={{pathname:'/', articleiD:articleiD, data:"MTN" }}>Home</Link>

        </div>

    );

}

 ;