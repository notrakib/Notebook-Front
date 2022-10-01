import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import styles from './css/share.module.css';

const Share = () => {
  return (
    <View style={[styles.main, style.main]}>
      <TextInput placeholder="User Email" style={styles.input} />
      <Button title="Share Now"></Button>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    shadowColor: 'blue',
    elevation: 3,
  },
});

export default Share;
