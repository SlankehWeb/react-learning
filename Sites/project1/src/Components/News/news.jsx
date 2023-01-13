import Fattigdom from "./parts/fattigdom";
import LeaveNoOne from "./parts/leave-no-one-behind";
import Udfordringer from "./parts/udfordringer";
import Vækst from "./parts/vækst-vs-B";

const News = () => {
  return (
    <div class="news">
      <div class="parent">
        <Udfordringer />
        <Vækst />
        <div class="div3">
          <img src={require("./img/Image-Sustainability.jpg")} alt="" />
        </div>
        <LeaveNoOne />
        <div class="div5">
          <img src={require("./img/Image-Leave-No-One.jpg")} alt="" />
        </div>
        <Fattigdom />
        <div class="div7">
          <img src={require("./img/Image-Hunger.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default News;
