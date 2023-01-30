import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginRegistrReducer from './reducers/logInRegistrReducer'
import textBlocksReducer from "./reducers/textBlocksReducer";


const rootReducer = combineReducers({
  loginRegistrReducer, 
  textBlocksReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

