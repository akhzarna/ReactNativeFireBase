/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert,TextInput} from 'react-native';

import * as firebase from "firebase";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(){

  }

  componentWillMount(){

    firebase.initializeApp({
    apiKey: "AIzaSyB2dJQUavnutuaqmgJThSg3AqGtoKHI8bY",
    authDomain: "usmanproject-2ef7c.firebaseapp.com",
    databaseURL: "https://usmanproject-2ef7c.firebaseio.com",
    // projectId: "usmanproject-2ef7c",
    storageBucket: "usmanproject-2ef7c.appspot.com",
    // messagingSenderId: "1019420681785"
    });

  }


  render() {

    return (

    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TextInput
     style={{height: 140}}
     placeholder="User Name!"
     onChangeText={(text) => this.setState({text})}
   />

   <TextInput
   style={{height: 100}}
   placeholder="User Name!"
   onChangeText={(text) => this.setState({text})}
   />


      </View>

    );
  }


  componentDidMount(){



    // async signup(email, pass) {

    // try {

      // firebase.auth()
      //       .createUserWithEmailAndPassword(email, pass);
      //
      //   console.log("Account created");
      //   Alert.alert('Created');


        // Navigate to the Home page, the user is auto logged in

    // } catch (error) {
    //     console.log(error.toString())
    // }

// }


// firebase.auth()
//           .signInWithEmailAndPassword(email, pass);
//
//       console.log("Logged In!");

  // firebase.auth().signOut();



        // if (this.state.password != null) {
        //     Alert.alert("Passwords do not match");
        //     return;
        // }


        var email = "akhzarnazir345@yahoo.com";
        var pass = "123456";

      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,pass)
            .then(response => {

                firebase.database().ref('users').child(response.user.uid).set({
                    displayName: 'Akhzar',
                    phoneNumber: '03219434203',
                    bloodGroup: 'A+ve',
                    address: 'Block A',
                    email: 'akhzarnazir@yahoo.com',
                    cityName:'Lahore',
                });

                // this.navigatetoHome();

           //    firebase.auth().onAuthStateChanged(this.onAuthStateChanged)

             },
              (error) =>
              {
                Alert.alert(error.message)});

  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
