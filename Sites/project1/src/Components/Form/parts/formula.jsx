import Buttons from "./formula-parts/buttons";
import Email from "./formula-parts/email";
import Fullname from "./formula-parts/fullname";
import Number from "./formula-parts/phonenumber";
import Textfield from "./formula-parts/textfield";

const Formula = () => {
  return (
    <div class="div2">
      <form>
        <Fullname />
        <Email> /</Email>
        <br />
        <Number />
        <br />
        <Textfield />
        <br />
        <Buttons />
      </form>
    </div>
  );
};

export default Formula;
