import Formula from "./parts/formula";

const Form = () => {
  return (
    <div className="form" id="kontakt">
      <div className="parent">
        <div className="div1">
          <img src={require("./img/UN-Logo-Large.png")} alt="" />
        </div>
        <Formula />
        <div className="div3">
          <h2>KONTAKT OS</h2>
          <p>
            Kontak os og hør mere om De Sytten Verdensmål. Udfyld fprmularen
            herunder.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
