import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import styles from './css/createToDo.module.css';

const CreateToDo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <TextInput
        style={[styles.sec, style.sec]}
        multiline={true}
        numberOfLines={3}
        placeholder="ToDo Topic"></TextInput>
      <View style={styles.btn}>
        <Button
          onPress={() => navigation.navigate('AllToDo')}
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
