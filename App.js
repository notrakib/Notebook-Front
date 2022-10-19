import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNav from './components/Navigation/drawer';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  GoogleSignin.configure({
    webClientId:
      '667369973571-k05cslsu3d0hdt9rh004q2glri5t4hms.apps.googleusercontent.com',
  });

  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default App;
