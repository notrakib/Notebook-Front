// import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './components/Navigation/mainNav';
import CustomModal from './components/layout/customModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <CustomModal
        SideMenuHandaler={() => setModalVisible(!modalVisible)}
        modalVisible={modalVisible}
      />
      <MainNav SideMenuHandaler={() => setModalVisible(!modalVisible)} />
    </NavigationContainer>
  );
};

export default App;
