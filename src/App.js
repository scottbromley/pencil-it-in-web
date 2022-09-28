import './App.css';
import logo from "./p_logo.png";
import {MdOutlineMailOutline} from 'react-icons/md';
import {BsTelephone} from 'react-icons/bs';

function App() {
  return (
    <div className="App">
      <img src={logo} style={{width: "300px", height: "300px"}} />
      <h1 style={{color: "white", fontWeight: 400, marginBottom: "40px"}}>Pencil It In</h1>
      <p style={{color: "white", fontWeight: 400, width: "600px", textAlign: "center", marginBottom: "40px", fontWeight: "200", fontSize: "20px"}}>Hey, thanks for using Pencil It In! If you want to get in touch with us, then use the contacts details below.</p>
      <p style={{color: "white", fontWeight: 400, width: "400px", textAlign: "center", fontWeight: "200", fontSize: "20px"}}>Please feel free to contact us about support requests, ideas for new features, bugs or feedback!</p>
      <div className="contact__box">
        <MdOutlineMailOutline size={35} style={{marginRight: "20px"}}/>
        <h1 className="contact__box__text">
          pencilthedatein@gmail.com
        </h1>
      </div>
      <div className="contact__box">
        <BsTelephone size={35} style={{marginRight: "20px"}}/>
        <h1 className="contact__box__text">
          +447429313172
        </h1>
      </div>
    </div>
  );
}

export default App;
