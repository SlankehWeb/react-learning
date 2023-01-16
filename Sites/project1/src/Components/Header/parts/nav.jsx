const Nav = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a className="#" href="#verdensmålene">
          verdensmålene
        </a>
        <a href="#delmålene">delmålene</a>
        <a href="#udfordringer">udfordringer</a>
        <a href="#kontakt">kontak</a>
      </div>
    </div>
  );
};

export default Nav;
