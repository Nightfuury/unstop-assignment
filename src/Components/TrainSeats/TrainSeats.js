import React from "react";
import './TrainSeats.css';

const TrainSeats = ({ index, status }) => {
    return (
        <div className={`seats ${status}`}>

            <p style={{ textAlign: "center" }}>{index + 1}</p>

        </div>
    );
}

export default TrainSeats;