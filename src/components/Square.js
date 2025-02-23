const Square = ({ data, play }) => {
  // return 부분은 ui를 구성하는 부분이다. 화면에 보여지는 부분
  return (
    <button className="square" onClick={play}>
      {data}
    </button>
  );
};

export default Square;