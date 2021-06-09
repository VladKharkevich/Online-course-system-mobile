import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text} from 'react-native';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {rootReducer} from "./src/redux/rootReducer";

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default function App() {
  return (
      <Provider store={store}>
        <Text> text </Text>
      </Provider>
  );
}
