import {useState} from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import styles from './editNote.module.css';

const EditNote = () => {
  const [btn, setbtn] = useState(false);

  const note = {
    title: 'Akdum Bakdum',
    note: "11 How can i make my modal show from left to right the way a drawer came out. I'm using Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
  };

  return (
    <ScrollView style={styles.main}>
      <TextInput
        onFocus={() => setbtn(false)}
        style={styles.title}
        defaultValue={note.title}
      />
      <View style={styles.divider} />

      <TextInput
        onFocus={() => setbtn(false)}
        multiline={true}
        style={styles.input}
        defaultValue={note.note}
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

export default EditNote;
