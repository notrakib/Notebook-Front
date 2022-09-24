import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import styles from './allNote.module.css';
import Note from './note';

const AllNote = () => {
  const navigation = useNavigation();

  const note = [
    {
      title: 'Akdum Bakdum',
      note: "11 How can i make my modal show from left to right the way a drawer came out. I'm using Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
    },
    {
      title: 'Akdum Bakdum',
      note: 'mmunity/react-native-modal/blob/master/README.md.',
    },
    {
      title: 'Akdum Bakdum',
      note: "11 How can i make my modal show from left to right the way a drawer came out. I'm using Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
    },
    {
      title: 'Akdum Bakdum',
      note: "11 How can i mg Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
    },
    {
      title: 'Akdum Bakdum',
      note: "11 How can i mg Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
    },
  ];

  return (
    <ScrollView style={styles.main}>
      {note.map((each, index) => {
        return <Note key={index} note={each} />;
      })}
    </ScrollView>
  );
};

export default AllNote;
