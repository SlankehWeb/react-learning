import Fattigdom from "./parts/fattigdom";
import LeaveNoOne from "./parts/leave-no-one-behind";
import Udfordringer from "./parts/udfordringer";
import Vækst from "./parts/vækst-vs-B";

const News = () => {
  return (
    <div className="news">
      <div className="parent">
        <Udfordringer />
        <Vækst />
        <div className="div3">
          <img src={require("./img/Image-Sustainability.jpg")} alt="" />
        </div>
        <LeaveNoOne />
        <div className="div5">
          <img src={require("./img/Image-Leave-No-One.jpg")} alt="" />
        </div>
        <Fattigdom />
        <div className="div7">
          <img src={require("./img/Image-Hunger.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default News;
