import React, {Component} from "react";
import './App.css';
import MapComponent from './Components/MapComponent';
import RecordList from "./Components/recordList";


class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}
callAPI() {
  fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
  this.callAPI();
}

render(){
  return (
    <div className="App">
      <RecordList />
    </div>
  );
}
}

export default App;
