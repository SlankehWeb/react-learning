const Header = () => {
    return (
        <header>
            <div class="banner">
            <img src="./ColorWheel.png" alt="colorwheel" class="banner-img"/>
            <div class="banner-text">
                <h1>THE GLOBAL GOALS</h1>
                <h2>For sustainable Development</h2>
            </div>

            </div>
            <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
  <a class="#" href="#">verdensmålene</a>
               <a href="#">delmålene</a>
               <a href="#">udfordringer</a>
               <a href="#">kontak</a>
  </div>
</div>
        </header>
    )
}

export default Header