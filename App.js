import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navbar from './components/layout/navbar';
import SideMenu from './components/layout/sideMenu';
import {Modal} from 'react-native';
import styles from './App.module.css';
import MainNav from './components/Navigation/mainNav';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <Navbar SideMenuHandaler={() => setModalVisible(!modalVisible)} />
      <Modal
        style={styles.modal}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        transparent={true}
        visible={modalVisible}>
        <SideMenu SideMenuHandaler={() => setModalVisible(!modalVisible)} />
      </Modal>
      <MainNav />
    </NavigationContainer>
  );
};

export default App;
