import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducers from "./../src/redux/rootReducers";
import { createLogger } from "redux-logger";
import "antd/dist/antd.css";
import MainContent from "./components/MainContent";

const logger = createLogger({
  timestamp: true,
});
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: reducers,
  middleware,
});

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router>
        <MainContent />
      </Router>
    </Provider>
  </div>
);

export default App;
