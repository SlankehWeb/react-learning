import "./App.scss";
import Articels from "./Components/Articles/Articles";
import Footer from "./Components/Footer/footer";
import Form from "./Components/Form/form";
import Gallery from "./Components/Gallery/gallery";
import Header from "./Components/Header/Header";
import News from "./Components/News/news";

function App() {
  return (
    <div className="App">
      <Header />
      <Articels />
      <Gallery />
      <News />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
