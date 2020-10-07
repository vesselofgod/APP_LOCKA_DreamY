/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, NativeModules, SafeAreaView, Text, View, Image, TouchableOpacity, PermissionsAndroid, Platform, Button} from 'react-native';
//import Block from './Block';
import ToastExample from './ToastExample';

class HomeScreen extends React.Component {
  onPressButton() {
    ToastExample.show("LOOKED", ToastExample.SHORT)
  }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.markArea}>
            <Image source={require('./images/ROKAmark.png')}/>
          </View>
          <View style={styles.appNameArea}>
            <Button title='click me' onPress={()=>this.onPressButton()}/>
          </View>
          <View style={styles.view}>
            <TouchableOpacity style={styles.button} onPress={() => NativeModules.Block.startService("START", ToastExample.SHORT)}>
              <Text>Start</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Lock Army</Text>
            <Button
              title = 'Lock'
              onPress = {()=>this.props.navigation.navigate('Locked')}
            />
          </View>
        </View>  


    );
  }
}

class LockedScreen extends React.Component {
  render() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.appNameText}>
            LOCKA
          </Text>
        <Button
          title = 'Unlock'
          onPress = {()=>this.props.navigation.navigate('Main')}
        />
        <TouchableOpacity style={styles.button} onPress={() => Block.stopService()}>
          <Text>Stop</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const AppNavigator = createStackNavigator(
  {
    Main: HomeScreen,
    Locked: LockedScreen
  },
  {
    initialRouteName: 'Main',
  }
);
  
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
},
settingView: {
  flex: 0.5,
  backgroundColor: 'black',
},
markArea: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
},
appNameText: {
  fontSize: 45,
  fontWeight: 'bold',
  color: 'navy'
},
appNameArea: {
  flex: 2,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'white',
},
buttonArea: {
  flex: 7,
  backgroundColor: 'navy',
  justifyContent: 'center',
},
buttonStyle: {
  alignItems: 'center',
  backgroundColor: '#f4511e',
  padding: 10,
},
textStyle: {
  fontSize: 18,
  color: 'white',
},
view: {
  flex: 0.3,
  justifyContent: 'center',
  alignItems: 'center',
},
button: {
  backgroundColor: 'gray',
  padding: 10,
  margin: 10,
},
});

/*


export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { clicked : true };
  }

  _checkedAnswer = () => this.setState({clicked: false});
 
  render() {
    return (
  
      <View style={styles.container}>
        <View style={styles.settingView}>
          <TouchableOpacity>
            <Image source={require('./images/setting.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.markArea}>
          <Image source={require('./images/ROKAmark.png')}/>
        </View>
        <View style={styles.appNameArea}>
          <Text style={styles.appNameText}>
            LOCKA
          </Text>
        </View>
        <View style={styles.buttonArea}>
          {
            this.state.clicked
              ? <Button title="LOCK" onPress={this._checkedAnswer}/>
              : <Text style={styles.appNameText}>LOCKED</Text>
          }
        </View>
      </View>
    );
  }
}
*/



/*
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

*/