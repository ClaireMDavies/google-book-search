import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Header from "./components/Header";
import library from "./images/book-library.jpg"

function App() {
  return (

    <Router>
    <div className="App">

      <Navbar/>
      <Header backgroundImage={library}/>
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
                        
    </div>
    </Router>
  );
}

export default App;
