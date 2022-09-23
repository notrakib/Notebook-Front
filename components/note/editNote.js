import {Text, TextInput} from 'react-native';
import styles from './editNote.module.css';

const EditNote = () => {
  const note = {
    note: "11 How can i make my modal show from left to right the way a drawer came out. I'm using Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
  };

  return <TextInput style={styles.text}>{note.note}</TextInput>;
};

export default EditNote;
