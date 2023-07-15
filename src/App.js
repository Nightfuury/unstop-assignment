import React from "react";
import UserInput from "./Components/UserInput/UserInput";
import TrainCoach from "./Container/TrainCoach/TrainCoach";

import './App.css';

function App() {

  const totalSeats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [coachSeats, setCoachSeats] = React.useState([...totalSeats]);
  const [userBookedSeats, setUserBookedSeats] = React.useState([]);
  const [availableSeats, setAvailableSeats] = React.useState(80);
  const [lastBookedSeat, setLastBookedSeat] = React.useState(0);


  const coachSeatHandler = (userInput) => {

    let arr = [...coachSeats];
    let userArr = [];

    let limit = +lastBookedSeat + +userInput;
    for (let i = +lastBookedSeat; i < limit; i++) {
      arr[i] = 1;
      userArr.push(i+1);
    }
    setUserBookedSeats([...userArr]);
    setCoachSeats([...arr]);
    setAvailableSeats(availableSeats - userInput);
    setLastBookedSeat(limit);
  }



  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Book Your Seats</h1>

      <div className="homepage">

        <UserInput coachSeatHandler={coachSeatHandler} availableSeats={availableSeats} userBookedSeats={userBookedSeats}/>

        <TrainCoach coachSeats={coachSeats} availableSeats={availableSeats} lastBookedSeat={lastBookedSeat} />

      </div>

    </div>

  );
}

export default App;
