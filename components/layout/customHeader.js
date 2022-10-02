import {Animated, Easing, Pressable, Text, View} from 'react-native';
import React, {useRef} from 'react';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './css/customHeader.module.css';

const CustomHeader = props => {
  const menuAnim = useRef(new Animated.Value(0));
  const signinAnim = useRef(new Animated.Value(0));
  const navigation = useNavigation();

  const MenuAnim = () => {
    Animated.timing(menuAnim.current, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => menuAnim.current.setValue(0));
  };

  const SigninAnim = () => {
    Animated.timing(signinAnim.current, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => signinAnim.current.setValue(0));
  };

  return (
    <View style={styles.header}>
      <Pressable
        style={styles.menu}
        onPressIn={() => MenuAnim()}
        onPressOut={() => navigation.openDrawer()}>
        <Lottie
          progress={menuAnim.current}
          source={require('../images/lf30_editor_t1ffhoss.json')}></Lottie>
      </Pressable>
      <Text style={styles.title}>{props.options.title}</Text>
      <Pressable
        style={styles.menu}
        onPressIn={() => SigninAnim()}
        onPressOut={() => {}}>
        <Lottie
          progress={signinAnim.current}
          source={require('../images/lf30_editor_fwbu9kau.json')}></Lottie>
      </Pressable>
    </View>
  );
};

export default CustomHeader;
