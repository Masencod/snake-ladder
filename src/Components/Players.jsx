import { useEffect, useState } from "react";
import ReactModal from "react-modal";

export default function Players() {
  // variables
  let defaultPlayers = [
    {
      id: "1",
      name: "player 1",
      color: "red",
      img: "./red.png",
    },
    {
      id: "2",
      name: "player 2",
      color: "blue",
      img: "./blue.png",
    },
    {
      id: "3",
      name: "player 3",
      color: "purple",
      img: "./purple.png",
    },
    {
      id: "4",
      name: "player 4",
      color: "green",
      img: "./green.png",
    },
  ];
  const [positions, setPositions] = useState({});
  const [players, setPlayers] = useState(defaultPlayers);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [playerAmount, setPlayerAmount] = useState(2);

  //custom style
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

  const handlePlayers = () => {
    if (playerAmount !== 4) {
      setPlayers(players.slice(0, -(4 - playerAmount)));
    }
  };

  useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <div className="w-full md:max-w-[700px] md:w-[70%]">
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
              onSelect={({ target }) => {
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
      <div className="mt-2">
        <div className="flex gap-x-2">
          {players.map((e) => {
            return (
              <img className="w-[5%]" key={e.id} src={e.img} alt="tokens" />
            )
          })}
        </div>
      </div>
    </div>
  );
}
