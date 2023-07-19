import clsx from "clsx";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";

export default function Players({ getPlayers }) {
  // variables
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let defaultPlayers = [
    {
      id: "1",
      name: "player 1",
      color: "cyan",
      img: "./cyan.png",
      position: 0,
    },
    {
      id: "2",
      name: "player 2",
      color: "blue",
      img: "./blue.png",
      position: 0,
    },
    {
      id: "3",
      name: "player 3",
      color: "purple",
      img: "./purple.png",
      position: 0,
    },
    {
      id: "4",
      name: "player 4",
      color: "green",
      img: "./green.png",
      position: 0,
    },
  ];

  const [diceAmount, setDiceAmount] = useState(1);
  const [players, setPlayers] = useState(defaultPlayers);
  const [activePlayer, setActivePlayer] = useState(players[0]);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [playerAmount, setPlayerAmount] = useState(2);
  const [winner, setWinner] = useState({})

  //handlers
  const handlePlayers = () => {
    if (playerAmount != 4) {
      setPlayers(players.slice(0, -(4 - playerAmount)));
    }
  };

  const handleDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceAmount(randomNumber);
    let newPosition = posRules(activePlayer.position + randomNumber);

    const updatedPlayers = players.map((player) => {
      if (player.id === activePlayer.id) {
        return { ...player, position: newPosition };
      }
      return player;
    });

    setPlayers(updatedPlayers);
    const handleWin = (arr) => {
      const atEnd = arr.filter(e => e.position == 100)
      if (atEnd.length > 0) {
        setWinner(atEnd);
      }
    }
    handleWin(updatedPlayers);

    if (activePlayer.id === playerAmount) {
      setActivePlayer(players[0]);
      getPlayers(updatedPlayers);
    } else {
      setActivePlayer(players[activePlayer.id]);
      getPlayers(updatedPlayers);
    }
  };

  //rules
  const posRules = (pos) => {
    switch (pos) {
      case 3:
        return 20;
      case 6:
        return 14;
      case 8:
        return 4;
      case 11:
        return 28;
      case 15:
        return 34;
      case 17:
        return 74;
      case 18:
        return 1;
      case 22:
        return 37;
      case 26:
        return 10;
      case 38:
        return 59;
      case 39:
        return 5;
      case 49:
        return 67;
      case 51:
        return 7;
      case 54:
        return 36;
      case 56:
        return 1;
      case 57:
        return 76;
      case 60:
        return 23;
      case 61:
        return 78;
      case 73:
        return 86;
      case 75:
        return 28;
      case 81:
        return 98;
      case 83:
        return 45;
      case 85:
        return 59;
      case 88:
        return 91;
      case 92:
        return 25;
      case 97:
        return 87;
      case 99:
        return 63;
    }
    return pos;
  };
  return (
    <div className="w-full mt-10 md:max-w-[700px] md:w-[70%]">
      {winner[name] &&       <ReactModal
        isOpen={isOpenModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div>
          <p><span className='text-orange-500 text-xl'>{winner.name}</span> IS THE WINNER</p>
        </div>
      </ReactModal>}
      <ReactModal
        isOpen={isOpenModal}
        onAfterClose={() => handlePlayers()}
        style={customStyles}
        ariaHideApp={false}
      >
        <div>
          <p>Select the amount of Players</p>
          <div className="flex justify-between p-2  mt-5">
            <select
              className="bg-gray-300 rounded-lg px-3"
              name="player amount"
              onChange={({ target }) => {
                setPlayerAmount(target.value);
              }}
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button
              onClick={() => {
                setIsOpenModal(!isOpenModal);
              }}
              className="p-2 border border-gray-800 bg-teal-200 rounded-md hover:bg-teal-400 transition-all duration-200 ease-in-out"
            >
              Select
            </button>
          </div>
        </div>
      </ReactModal>
      <div className="flex justify-between mt-2 w-full">
        <div className="grid grid-flow-col flex-1 w-[100px] ml-2 gap-y-2">
          {players.map((e) => {
            if (e.position != 0) {
              return null;
            }
            return (
              <img
                className={clsx("max-w-[30px]", {
                  "w-[50%]": playerAmount == 4 && !isOpenModal,
                  "w-[40%]": playerAmount == 3 && !isOpenModal,
                  "w-[30%]": playerAmount == 2 && !isOpenModal,
                  "w-[49%]": isOpenModal,
                })}
                key={e.id}
                src={e.img}
                alt="tokens"
              />
            );
          })}
        </div>
        <div className={`flex-1 flex items-center justify-center`}>
          <p className="flex gap-x-2 text-xl font-semibold">
            Turn:
            <span
              className={clsx("", {
                "text-cyan-500": activePlayer.color === "cyan",
                "text-green-500": activePlayer.color === "green",
                "text-purple-500": activePlayer.color === "purple",
                "text-blue-500": activePlayer.color === "blue",
              })}
            >
              {activePlayer.name}
            </span>
          </p>
        </div>
        <div className="flex-1 flex flex-col items-end justify-center mr-4">
          <div className="flex flex-col items-center">
            <div className="p-2">{diceAmount}</div>
            <button
              className={clsx(
                "py-2 px-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 ease-in-out",
                {
                  "bg-red-300": activePlayer.color === "red",
                  "bg-green-300": activePlayer.color === "green",
                  "bg-purple-300": activePlayer.color === "purple",
                  "bg-blue-300": activePlayer.color === "blue",
                }
              )}
              onClick={handleDice}
            >
              Roll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
