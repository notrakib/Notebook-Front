import {useState} from 'react';
import {Button, ScrollView, TextInput, View} from 'react-native';
import styles from './writeNote.module.css';

const WriteNote = () => {
  const [btn, setbtn] = useState(false);

  return (
    <ScrollView style={styles.main}>
      <TextInput
        onFocus={() => setbtn(false)}
        style={styles.title}
        placeholder="Add Title"
      />
      <View style={styles.divider} />

      <TextInput
        onFocus={() => setbtn(false)}
        multiline={true}
        style={styles.input}
        placeholder="Start you note here"
      />
      <View style={styles.btn}>
        <Button
          onPress={() => setbtn(true)}
          disabled={btn}
          color="rgb(184, 3, 3)"
          title="Save"></Button>
      </View>
    </ScrollView>
  );
};

export default WriteNote;
