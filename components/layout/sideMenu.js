import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useEffect, useRef} from 'react';
import styles from './sideMenu.module.css';

const SideMenu = props => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 280,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{width: fadeAnim, backgroundColor: 'white', height: '100%'}}>
      <View style={styles.profile}>
        <Image style={styles.image} source={require('./c.jpeg')}></Image>
        <Text style={styles.name}>Rakibul Huda</Text>
        <Text style={styles.email}>rakibulhuda@gmail.com</Text>
      </View>

      <View style={styles.divider}></View>

      <ScrollView style={styles.dropdown}>
        <Text onPress={() => navigation.navigate('Note')} style={styles.option}>
          Notes
        </Text>
        <Text onPress={() => navigation.navigate('ToDo')} style={styles.option}>
          ToDos
        </Text>
        <Text
          onPress={() => navigation.navigate('SharedNote')}
          style={styles.option}>
          Shared Notes
        </Text>
        <Text style={styles.option}>Statistics</Text>
        <Text
          onPress={() => navigation.navigate('Tutorial')}
          style={styles.option}>
          Tutorial
        </Text>
        <Text style={styles.option}>Settings</Text>
        <Text onPress={() => props.SideMenuHandaler()} style={styles.option}>
          Close
        </Text>
      </ScrollView>
    </Animated.View>
  );
};

export default SideMenu;
