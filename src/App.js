import React, { useState } from "react";
import "./styles.css";

var games = {
  Indoor: [
    "Chowka bhara [Ludo]",
    "Aligulimane [Share & Conquer]",
    "Gutte [Swift Grabber]",
    "Snake & Ladder",
    "Hand Cricket"
  ],
  Outdoor: [
    "Gilli Dandu",
    "Lagori",
    "Goli [Marbles]",
    "Kuntebille [Hopscotch]",
    "Kho-Kho"
  ]
};
var gamesDesc = {
  "Chowka bhara [Ludo]": [
    "Players:2-4",
    "Requirement:5X5 board, 4 pawns to each player, 4 cowry shells",
    "Description:The game is controlled by throwing four cowry shells and counting how many are 'as it is' versus those that land 'inverted'. Based on this count the pawns are moved on board "
  ],
  "Aligulimane [Share & Conquer]": [
    "Players:2-4",
    "Requirement: Rectangular board, divided into 2 horizontal rows and seven vertical columns, 14 cups on the board and 146 counters(cowry shells or tamrid seeds are used)",
    "Description: Player picks a cup and takes all shells in them and start droping one shell in each cup clock-wise, when the shells he picked are over he picks from the immediate next cup & continue the process until he encounters an empty cup and takes all the shells present in the cup next to empty cup. the player with more shells at the end, wins the game"
  ],
  "Gutte [Swift Grabber]": [
    "Players:No Limit",
    "Requirement: 5 pebbles for each player",
    "Description: Player needs to spin a stone up in the air and gather the remaining stones lying on the floor with one hand without allowing the one in the air to fall to the ground. Next, the player has to throw two stones up in the air and collect the rest and so on. The player who finishes eight steps in the minimum number of tries is the winner."
  ],
  "Snake & Ladder": [
    "Players:2 or more",
    "Requirement: Game Board, 1 Pawn to each player, Dice",
    "Description: Player moves his pawn based on the number on dice, if he encounter ladder, he moves up & if he encounter snake he comes down. First player to reach finish line wins."
  ],
  "Hand Cricket": [
    "Players:2",
    "Requirement: Hands",
    "Description: Both the player plays together and makes a hand guesture that represents number, One player will be a batsman & the other will be bowler, the gesture made by batsman gets calculated has his score. When both the player makes the same guesture the Batsman gets out. Now other player has to chase the runs scored by batsman to win"
  ],
  "Gilli Dandu": [
    "Players:No limit",
    "Requirement: 2 unevenly sized sticks (Small one - Gilli, Big one - Dandu)",
    "Description: Flip the Gilli into the air with the Danda. While the Gilli is in the air, the player must hit it with the Danda as far as possible. The player also needs to run to touch a pre-decided point before the opponent can lay his hands on the Gilli"
  ],
  Lagori: [
    "Players:2 Teams",
    "Requirement: 7 stones, Ball",
    "Description: One player of the attacking team needs to strike the pile of stone with the ball to knock them over in three shots. Then the whole team has to try and restore the pile before being hit by the ball by the opposite team and declared ‘out’."
  ],
  "Goli [Marbles]": [
    "Players:2 or more",
    "Requirement: Marble stone",
    "Description: One standard idea is to have a target marble. Players flick their marbles with their thumbnail, and try to hit the target. Another version is where players try to hit each other's marbles out of a target zone."
  ],
  "Kuntebille [Hopscotch]": [
    "Players:2 or more",
    "Requirement: Stone (Pachi) ",
    "Description: The game involves drawing a grid on the ground and numbering it. Players take turns and throw an object, usually a small stone, onto the numbered blocks. They have to hop across the blocks to pick up the object jumping on one/two legs to finish the lap, taking care not to step on the border lines."
  ],
  "Kho-Kho": [
    "Players:2 teams of 9 players each",
    "Requirement: none ",
    "Description: Members of the chasing team sit on the ground in a straight row with alternative players positioned in opposite directions. The chasers have to catch the opposing team members before the stipulated time is over."
  ]
};

export default function App() {
  var [gamesData, setGamesData] = useState([]);
  function menuHandler(event) {
    var ipdata = event.target.value;
    var opdata = games[ipdata];
    setGamesData(opdata);
  }
  var [descData, setDescData] = useState([]);
  function descHandler(event) {
    var linData = event.target.value;
    var opDesc = gamesDesc[linData];
    setDescData(opDesc);
  }

  // list1=Object.keys(games);
  return (
    <div className="App">
      <h1>Nostalgia</h1>
      <div className="seg-one">
        <button className="mainButtons" value="Indoor" onClick={menuHandler}>
          Indoor
        </button>
        <button className="mainButtons" value="Outdoor" onClick={menuHandler}>
          Outdoor
        </button>
        <p> Note: Click on game to know more </p>
      </div>
      <div>
        {gamesData.map((item) => {
          return (
            <button
              key={item}
              className="secondaryButtons"
              value={item}
              onClick={descHandler}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="desciption">
        {descData.map((item) => {
          return (
            <ul key={item}>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
