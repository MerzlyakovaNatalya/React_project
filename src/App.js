
import "./App.css";
import { MessagePage } from "../src/PresenterAndContainer/index";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {props.text}
        <MessagePage />
      </header>
    </div>
  );
}

export default App;
