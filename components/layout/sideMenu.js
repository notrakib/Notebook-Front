import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './sideMenu.module.css';

const SideMenu = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
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
    </View>
  );
};

export default SideMenu;
