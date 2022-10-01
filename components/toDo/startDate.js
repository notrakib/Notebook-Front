import {Text, TextInput, View} from 'react-native';
import styles from './css/startDate.module.css';

const StartDate = props => {
  return (
    <View style={styles.half}>
      <Text style={styles.left}>Start </Text>
      <View style={styles.picker}>
        <Text
          style={styles.inputL1}
          onPress={() => {
            props.calHandaler();
          }}>
          {props.dateLeft}
        </Text>
        <TextInput
          onChangeText={newText => props.setTime(newText)}
          defaultValue={props.timeLeft}
          style={styles.inputL2}></TextInput>
      </View>
    </View>
  );
};

export default StartDate;
