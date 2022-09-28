import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Animated, Image, ScrollView, Text, View} from 'react-native';
import {useEffect, useRef} from 'react';
import styles from './sideMenu.module.css';

const SideMenu = props => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(-280)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [slideAnim]);

  const SlideAnimOut = () => {
    Animated.timing(slideAnim, {
      toValue: -280,
      duration: 500,
      useNativeDriver: false,
    }).start(() => props.SideMenuHandaler());
  };

  return (
    <Animated.View
      style={{
        width: 280,
        backgroundColor: 'white',
        height: '100%',
        marginLeft: slideAnim,
      }}>
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
        <Text
          onPress={() => navigation.navigate('SharedNote')}
          style={styles.option}>
          Share Note
        </Text>
        <Text onPress={() => navigation.navigate('ToDo')} style={styles.option}>
          To Do
        </Text>
        <Text style={styles.option}>Statistics</Text>
        <Text
          onPress={() => navigation.navigate('Tutorial')}
          style={styles.option}>
          Tutorial
        </Text>
        <Text style={styles.option}>Settings</Text>
        <Text onPress={() => SlideAnimOut()} style={styles.option}>
          Close
        </Text>
      </ScrollView>
    </Animated.View>
  );
};

export default SideMenu;
