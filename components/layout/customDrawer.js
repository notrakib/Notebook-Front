import {
  Image,
  TouchableHighlight,
  Text,
  View,
  Animated,
  Easing,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import styles from './css/customDrawer.module.css';
import {useRef} from 'react';

const CustomDrawer = () => {
  const navigation = useNavigation();
  const logoutAnim = useRef(new Animated.Value(0));
  // console.log(navigation.getCurrentRoute().name);

  const MenuAnim = () => {
    Animated.timing(logoutAnim.current, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => logoutAnim.current.setValue(0));
  };

  return (
    <View style={styles.main}>
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={require('../images/c.jpeg')}></Image>
        <Text style={styles.name}>Rakibul Huda</Text>
        <Text style={styles.email}>rakibulhuda@gmail.com</Text>
      </View>

      <View style={styles.divider}></View>

      <TouchableHighlight
        underlayColor="#ff697d"
        onPress={() => navigation.navigate('Home')}>
        <View style={styles.option}>
          <Image
            style={styles.icon}
            source={require('../images/icons8-home-page-96.png')}></Image>
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor="#ff697d"
        onPress={() => navigation.navigate('Notes', {screen: 'Note'})}>
        <View style={styles.option}>
          <Image
            style={styles.icon}
            source={require('../images/icons8-note-96.png')}></Image>
          <Text style={styles.text}>Note</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor="#ff697d"
        onPress={() => navigation.navigate('Tasks')}>
        <View style={styles.option}>
          <Image
            style={styles.icon}
            source={require('../images/icons8-to-do-96.png')}></Image>
          <Text style={styles.text}>Task</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight underlayColor="#ff697d" onPress={() => {}}>
        <View style={styles.option}>
          <Image
            style={styles.icon}
            source={require('../images/icons8-settings-96.png')}></Image>
          <Text style={styles.text}>Settings</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.logout}
        underlayColor="white"
        onPressIn={() => MenuAnim()}>
        <View>
          <Text style={styles.logoutText}>Log out</Text>
          <Lottie
            style={styles.logoutMain}
            progress={logoutAnim.current}
            source={require('../images/lf30_editor_hplf3yoh.json')}></Lottie>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default CustomDrawer;
