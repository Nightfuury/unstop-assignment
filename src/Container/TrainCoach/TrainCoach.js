import React from "react";
import "./TrainCoach.css";
import TrainSeats from "../../Components/TrainSeats/TrainSeats";

const TrainCoach = ({
    coachSeats,
    availableSeats,
    lastBookedSeat
}) => {
    return (
        <div style={{ width: "70%" }}>
            <div className="coach">

                <ul>
                    {
                        coachSeats.map((seat, index) => (
                            (seat == 1) ?
                                (< li key={index}><TrainSeats index={index} status="booked" /></li>)
                                :
                                (< li key={index}><TrainSeats index={index} status="available" /></li>)

                        ))

                    }
                </ul>

            </div >

            <div className="coach-info">

                <p><span className="green-dot"></span>Available Seats : {availableSeats}</p>

                <p><span className="red-dot"></span>Last Booked Seat : {lastBookedSeat}</p>

            </div>

        </div>
    );
}

export default TrainCoach;