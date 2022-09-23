import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './landing.module.css';

const Landing = () => {
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require('./landing.webp')}></Image>
    </View>
  );
};

export default Landing;
