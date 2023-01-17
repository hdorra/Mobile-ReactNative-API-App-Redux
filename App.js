import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';
import {Provider} from 'react-redux';



export default function App() {

    return(
      <Provider store={store}>
      <AppNavigator/>
      </Provider>
    )
 
}

const styles = StyleSheet.create({

});
