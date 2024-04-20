import { createStore } from "redux";
import rootred from "./Components/redux/reducers/Index";

const store = createStore(rootred)

export default store;