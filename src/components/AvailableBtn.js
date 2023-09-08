import * as React from "react";
import { GoDotFill } from 'react-icons/go';

const AvailableBtn = ({isAvailable, cls}) => {
    console.log('cls = ', cls);
    return (
        <div className={`ava-btn ${cls ? cls : ''} ${isAvailable === true ? 'color-green' : 'color-red'}`}>
            <GoDotFill className='ava-btn-icon'/>
            <p className="ava-btn-text">
                { isAvailable === true ? "Available to work " : "Currently Unavailable"}
            </p>
        </div>
    )

};



export default AvailableBtn;




