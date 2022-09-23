import {ScrollView} from 'react-native';
import styles from './sharedNote.module.css';

import Note from './note';

const SharedNote = () => {
  const note = [
    {
      note: "11 How can i make my modal show from left to right the way a drawer came out. I'm using Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
      sharedBy: 'Me',
      sharedTo: 'Sabbir',
    },
    {
      note: 'mmunity/react-native-modal/blob/master/README.md.',
      sharedBy: 'Sabbir',
      sharedTo: 'Rakibul Huda',
    },
    {
      note: "11 How can i make my modal show from left to right the way a drawer came out. I'm using Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
      sharedBy: 'Khalid',
      sharedTo: 'Me',
    },
    {
      note: "11 How can i mg Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
      sharedBy: 'Moti',
      sharedTo: 'Me',
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

export default SharedNote;