import {TextInput, StyleSheet, View, Text, Button} from 'react-native';
import {useRef, useState} from 'react';
import CustomCalendar from './customCalendar';
import StartDate from './startDate';
import EndDate from './endDate';
import SaveButton from './saveButton';
import styles from './css/editToDo.module.css';
import {EditTaskLists} from '../api/Tasks';
import {useNavigation, useRoute} from '@react-navigation/native';

const ToDo = () => {
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
        defaultValue={route.params.toDo.text}></TextInput>
      <View style={[styles.in, style.sec]}>
        <StartDate
          timeLeft={`${route.params.toDo.startAt.split(':', 3)[1]}:${
            route.params.toDo.startAt.split(':', 3)[2]
          }`}
          dateLeft={route.params.toDo.startAt.split(':', 1)[0]}
          calHandaler={() => {
            setShowCalLeft(true);
            setShowCalRight(false);
          }}
          setTime={newText => {
            settimeLeft(newText);
          }}
        />
        <EndDate
          timeRight={`${route.params.toDo.endAt.split(':', 3)[1]}:${
            route.params.toDo.endAt.split(':', 3)[2]
          }`}
          dateRight={route.params.toDo.endAt.split(':', 1)[0]}
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
            EditTaskLists(
              {
                text: txt.current._internalFiberInstanceHandleDEV.memoizedProps
                  .text,
                startAt: `${dateLeft}:${timeLeft}`,
                endAt: `${dateRight}:${timeRight}`,
              },
              route.params.toDo._id,
            )
              .then(() => {
                navigation.goBack();
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

export default ToDo;
