import { Provider, useDispatch } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";


function App() {

  return (
    <div className="">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
