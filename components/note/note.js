import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './note.module.css';

const Note = props => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('EditNote')}
        style={[styles.sec, style.sec]}>
        <View style={styles.sidebar}></View>
        <View style={styles.text}>
          <Text style={styles.title}>{props.note.title}</Text>
          <Text style={styles.text}>{props.note.note}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  sec: {
    shadowColor: 'rgb(184, 3, 3)',
    elevation: 3,
  },
});

export default Note;
