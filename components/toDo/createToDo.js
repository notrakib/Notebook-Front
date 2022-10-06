import {useNavigation} from '@react-navigation/native';
import {useRef} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {CreateTask} from '../api/Tasks';
import styles from './css/createToDo.module.css';

const CreateToDo = () => {
  const navigation = useNavigation();
  const txt = useRef();

  return (
    <View style={styles.main}>
      <TextInput
        ref={txt}
        style={[styles.sec, style.sec]}
        multiline={true}
        numberOfLines={3}
        placeholder="ToDo Topic"></TextInput>
      <View style={styles.btn}>
        <Button
          onPress={() => {
            CreateTask({
              toDoTitle:
                txt.current._internalFiberInstanceHandleDEV.memoizedProps.text,
            })
              .then(taskList => {
                if (!taskList.error) {
                  navigation.goBack();
                }
              })
              .catch();
          }}
          title="Add ToDo"></Button>
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

export default CreateToDo;
