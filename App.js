import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNav from './components/Navigation/drawer';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default App;
