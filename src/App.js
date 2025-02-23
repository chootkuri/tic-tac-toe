import "./App.css";
import { useState } from "react";

const Square = ({ data, play }) => {
  // return 부분은 ui를 구성하는 부분이다. 화면에 보여지는 부분
  return (
    <button className="square" onClick={play}>
      {data}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  // let isX = true;
  const [isX, setIsX] = useState(true);
  const [message, setMessage] = useState("");

  const handleClick = (index) => {
    if (squares[index] !== "") return;
    // setSquares(["", "", "", "X", "", "", "", "", ""]);
    const newSquares = [...squares];
    if (isX) {
      newSquares[index] = "X";
    } else {
      newSquares[index] = "O";
    }
    // isX = !isX;
    setIsX(!isX);
    setSquares(newSquares); // 상태를 업데이트하는 함수

    // 승자가 있는지 확인
    const winner = calculateWinner(newSquares);
    if (winner) {
      //alert(`${winner}님의 승리입니다!`);
      setMessage(`${winner}님의 승리입니다!`);
      setTimeout(() => {
        setSquares(["", "", "", "", "", "", "", "", ""]);
        setMessage("");
      }, 2000);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      // 가로줄
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // 세로줄
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // 대각선
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]; // a, b, c에 각각 lines[i]의 0, 1, 2번째 인덱스를 할당
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // X 또는 O
      }
    }
    return null;
  };

  return (
    <>
      <div className="board-row">
        <Square data={squares[0]} play={() => handleClick(0)} />
        <Square data={squares[1]} play={() => handleClick(1)} />
        <Square data={squares[2]} play={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square data={squares[3]} play={() => handleClick(3)} />
        <Square data={squares[4]} play={() => handleClick(4)} />
        <Square data={squares[5]} play={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square data={squares[6]} play={() => handleClick(6)} />
        <Square data={squares[7]} play={() => handleClick(7)} />
        <Square data={squares[8]} play={() => handleClick(8)} />
      </div>
      <div>{message}</div>
    </>
  );
};

export default Board;
