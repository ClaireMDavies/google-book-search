import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Header from "./components/Header";
import library from "./images/book-library.jpg"
import Wrapper from "./components/Wrapper";

function App() {
  return (

    <Router>
    <div className="App">

      <Navbar/>
      <Header backgroundImage={library}/>
      <Wrapper>
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
      </Wrapper>   
      <Footer />              
    </div>
    </Router>
  );
}

export default App;
