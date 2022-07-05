const Overlay = ({ onShowOverlay }) => {
  return (
    <div
      className="h-full w-full absolute top-0 left-0 bg-black bg-opacity-50 z-10"
      onClick={onShowOverlay}
    ></div>
  );
};

export default Overlay;
