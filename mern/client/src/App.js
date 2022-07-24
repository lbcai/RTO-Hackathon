import React, {Component} from "react";
import './App.css';
import MapComponent from './Components/MapComponent';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}


render(){
  return (
    <div className="App">
      <MapComponent />
    </div>
  );
}
}

export default App;
