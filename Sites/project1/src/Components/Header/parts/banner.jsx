import img1 from "../img/ColorWheel.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={img1} alt="co2-img" />
      <div className="banner-text">
        <h1>THE GLOBAL GOALS</h1>
        <h2>For sustainable Development</h2>
      </div>
    </div>
  );
};

export default Banner;
