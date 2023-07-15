import React from "react";
import './UserInput.css';

const UserInput = ({ coachSeatHandler, availableSeats, userBookedSeats }) => {
    const [input, setInput] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);
    const [inputDisabled, setInputDisabled] = React.useState(false);
    const [disReason, setDisReason] = React.useState("Cannot be 0");

    const inputChangeHandler = (e) => {
        let value = e.target.value;

        if (value > availableSeats) {
            setInput(e.target.value);
            alert(`Only ${availableSeats} seats available`);
            setDisabled(true);
        } else {
            if (value > 0 && value <= 7) {
                setInput(e.target.value);
                setDisabled(false);
                setInput(e.target.value);
            } else {
                setInput(e.target.value);
                setDisabled(true);
                setDisReason("Enter a valid number.Input can be 0 < input <= 7")
            }
        }
    }

    const checkFull = () => {
        if (availableSeats == 0) {
            setInputDisabled(true)
            setDisabled(true);
            setDisReason("Seats Full")
        }
    }

    const submitHandler = () => {
        coachSeatHandler(input);
        setInput(0);
    }

    React.useEffect(() => {
        checkFull();
    }, [availableSeats])

    return (
        <div className="user-input">
            <div className="input-div">
                <p>
                    Number of Seats to book :
                </p>
                {
                    (inputDisabled == true) ? <input type="text" value="Seats Full" disabled style={{ cursor: 'not-allowed' }} /> :
                        <input type="number" value={input} onChange={inputChangeHandler} />
                }

            </div>

            <ul>
                <li>You can only book 7 seats at a time.</li>
            </ul>

            {
                (disabled == true) ? <button className="submit-btn-disabled" title={`${disReason}`}>Book</button> :
                    <button className="submit-btn" onClick={submitHandler}>Book</button>
            }

            {
                (userBookedSeats.length > 0) &&
                <div className="input-div">
                    <p>Seats Booked : </p>

                    {
                        userBookedSeats.map((seats, index) => (
                            <p key={index}>{seats}</p>
                        ))
                    }
                </div>
            }




        </div>
    );
}

export default UserInput;