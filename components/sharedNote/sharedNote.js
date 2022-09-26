import {ScrollView} from 'react-native';

import Note from './note';

const SharedNote = () => {
  const note = [
    {
      title: 'Akdum Bakdum',
      note: "11 How can i make my modal show from left to right the way a drawer came out. I'm using Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
      sharedBy: 'Me',
      sharedTo: 'Sabbir',
    },
    {
      title: 'Akdum Bakdum',
      note: 'mmunity/react-native-modal/blob/master/README.md.',
      sharedBy: 'Sabbir',
      sharedTo: 'Rakibul Huda',
    },
    {
      title: 'Akdum Bakdum',
      note: "11 How can i make my modal show from left to right the way a drawer came out. I'm using Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
      sharedBy: 'Khalid',
      sharedTo: 'Me',
    },
    {
      title: 'Akdum Bakdum',
      note: "11 How can i mg Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
      sharedBy: 'Moti',
      sharedTo: 'Me',
    },
    {
      title: 'Akdum Bakdum',
      note: "11 How can i mg Modal from 'react-native', but i also installed react-native-modal module from https://github.com/react-native-community/react-native-modal/blob/master/README.md.",
      sharedBy: 'Moti',
      sharedTo: 'Me',
    },
  ];

  return (
    <ScrollView>
      {note.map((each, index) => {
        return <Note key={index} note={each} />;
      })}
    </ScrollView>
  );
};

export default SharedNote;
