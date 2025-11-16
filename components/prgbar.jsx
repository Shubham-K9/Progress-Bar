const Prgbar = ({ progress }) => {
  return (
    <div className="outer-bar">
      <div className="inner-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default Prgbar;
