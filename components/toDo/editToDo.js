import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './editToDo.module.css';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useState} from 'react';

const ToDo = () => {
  const [showCal, setShowCal] = useState(false);

  const toDo = {
    text: 'By default, when you navigate a screen in the nested navigator,',
    startAt: 'wsedavgawdesgv',
    endAt: '3e4q2trfewqfedrfgv',
  };

  const ShowCalHandaler = () => {
    setShowCal(true);
  };

  return (
    <View style={styles.main}>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.sec, style.sec]}
        onPress={() => {}}
        defaultValue={toDo.text}></TextInput>
      <View style={[styles.cal, style.sec]}>
        <View style={styles.date}>
          <Text onPress={ShowCalHandaler} style={styles.start}>
            Add Start Date
          </Text>
          <Text onPress={ShowCalHandaler} style={styles.end}>
            Add End Date
          </Text>
        </View>
        <View style={styles.date}>
          <Text onPress={ShowCalHandaler} style={styles.start}>
            Start Time
          </Text>
          <Text onPress={ShowCalHandaler} style={styles.end}>
            End TIme
          </Text>
        </View>
        {showCal && <Calendar />}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  sec: {
    shadowColor: 'black',
    elevation: 3,
  },
});

export default ToDo;
