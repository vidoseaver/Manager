import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'

import reducers from './reducers'
import firebaseConfig from '../firebase_config.json'

import LoginForm from "./components/LoginForm";
class App extends Component {

  componentDidMount() {
    const config = firebaseConfig

    firebase.initializeApp(config); 
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm/>
        </View>
      </Provider>
    )
  }
}

export default App;