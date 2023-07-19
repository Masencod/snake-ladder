import { useEffect, useState } from "react";
import Players from "./Players";
import clsx from "clsx";

export default function Grid() {
  const [players, setPlayers] = useState([]);

  const handleGetPlayers = (prop) => {
    setPlayers(prop);
  };
  useEffect(() => {
    console.log(players);
  }, [players]);

  const row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const row2 = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
  const row3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const row4 = [40, 39, 38, 37, 36, 35, 34, 33, 32, 31];
  const row5 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
  const row6 = [60, 59, 58, 57, 56, 55, 54, 53, 52, 51];
  const row7 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
  const row8 = [80, 79, 78, 77, 76, 75, 74, 73, 72, 71];
  const row9 = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
  const row10 = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91];

  // Function to check if a player is present in a cell
  const isPlayerInCell = (cellId) => {
    return players.some((player) => player.position === cellId);
  };

  // Function to get the players' images in a cell
  const getPlayerImagesInCell = (cellId) => {
    return players
      .filter((player) => player.position === cellId)
      .map((player) => player.img);
  };

  return (
    <div className="flex flex-col justify-center md:items-center md:mt-10 ">
      <div className="grid board w-[100%] md:max-w-[700px] md:w-[70%] aspect-square bg-[url('./bg.jpg')] bg-contain">
        {[row10, row9, row8, row7, row6, row5, row4, row3, row2, row1].map(
          (row, rowIndex) => (
            <div key={rowIndex} className="grid rows">
              {row.map((cellId) => (
                <div key={cellId} id={cellId} className="cell flex justify-center items-center">
                  {isPlayerInCell(cellId) &&
                    getPlayerImagesInCell(cellId).map((imgSrc, index) => (
                      <img
                      className={clsx("max-w-[30px]")}
                      key={index} src={imgSrc} alt="player" />
                    ))}
                </div>
              ))}
            </div>
          )
        )}
      </div>
      <Players getPlayers={handleGetPlayers} />
    </div>
  );
}
