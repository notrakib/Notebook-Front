import {TextInput, StyleSheet, View, Text, Button} from 'react-native';
import styles from './css/editToDo.module.css';
import {useRef, useState} from 'react';
import CustomCalendar from './customCalendar';
import EndDate from './endDate';
import SaveButton from './saveButton';
import StartDate from './startDate';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CreateTaskLists} from '../api/Tasks';

const CreateToDoList = () => {
  const [showCalLeft, setShowCalLeft] = useState(false);
  const [showCalRight, setShowCalRight] = useState(false);
  const [dateLeft, setdateLeft] = useState('0000-00-00');
  const [dateRight, setdateRight] = useState('0000-00-00');
  const [timeLeft, settimeLeft] = useState('00:00');
  const [timeRight, settimeRight] = useState('00:00');
  const navigation = useNavigation();
  const route = useRoute();
  const txt = useRef();

  return (
    <View style={styles.main}>
      <TextInput
        ref={txt}
        multiline={true}
        numberOfLines={4}
        style={[styles.sec, style.sec]}
        placeholder="Enter your todo"></TextInput>
      <View style={[styles.in, style.sec]}>
        <StartDate
          timeLeft={timeLeft}
          dateLeft={dateLeft}
          calHandaler={() => {
            setShowCalLeft(true);
            setShowCalRight(false);
          }}
          setTime={newText => {
            settimeLeft(newText);
          }}
        />
        <EndDate
          timeRight={timeRight}
          dateRight={dateRight}
          calHandaler={() => {
            setShowCalRight(true);
            setShowCalLeft(false);
          }}
          setTime={newText => {
            settimeRight(newText);
          }}
        />
      </View>
      {showCalLeft && (
        <CustomCalendar
          calHandaler={day => {
            setdateLeft(day['dateString']);
            setShowCalLeft(false);
          }}
        />
      )}
      {showCalRight && (
        <CustomCalendar
          calHandaler={day => {
            setdateRight(day['dateString']);
            setShowCalRight(false);
          }}
        />
      )}
      <View style={styles.btn}>
        <SaveButton
          dateLeft={dateLeft}
          timeLeft={timeLeft}
          dateRight={dateRight}
          timeRight={timeRight}
          saveHandaler={() => {
            CreateTaskLists(
              {
                text: txt.current._internalFiberInstanceHandleDEV.memoizedProps
                  .text,
                startAt: `${dateLeft}:${timeLeft}`,
                endAt: `${dateRight}:${timeRight}`,
              },
              route.params.taskId,
            )
              .then(taskList => {
                if (!taskList.error) {
                  navigation.goBack();
                }
              })
              .catch();
          }}
        />
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

export default CreateToDoList;
