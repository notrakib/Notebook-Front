import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {GetShareNote} from '../api/Note';

import Note from './note';

const SharedNote = () => {
  const [sharedNote, setSharedNote] = useState([]);

  useEffect(() => {
    GetShareNote()
      .then(note => setSharedNote(note))
      .catch();
  }, []);

  return (
    <ScrollView>
      {sharedNote.map((each, index) => {
        return <Note key={index} note={each} />;
      })}
    </ScrollView>
  );
};

export default SharedNote;
