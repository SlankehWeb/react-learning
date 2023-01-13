const Nav = () => {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a class="#" href="#verdensmålene">
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
