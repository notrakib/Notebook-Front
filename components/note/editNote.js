import {useRoute} from '@react-navigation/native';
import {useRef, useState} from 'react';
import RNFS from 'react-native-fs';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import styles from './css/editNote.module.css';
import Share from './share';

const EditNote = () => {
  const [btn, setbtn] = useState(false);
  const [share, setshare] = useState(false);
  const route = useRoute();
  const titleRef = useRef();
  const noteRef = useRef();

  const NewNoteHandaler = () => {
    RNFS.readDir(RNFS.DocumentDirectoryPath)
      .then(result => {
        return Promise.all([RNFS.stat(result[5].path), result[5].path]);
      })
      .then(statResult => {
        return RNFS.readFile(statResult[1]);
      })
      .then(contents => {
        const note = JSON.parse(contents);
        note[route.params.index].title =
          titleRef.current._internalFiberInstanceHandleDEV.memoizedProps.text;
        note[route.params.index].note =
          noteRef.current._internalFiberInstanceHandleDEV.memoizedProps.text;
        return note;
      })
      .then(note => {
        const path = RNFS.DocumentDirectoryPath + '/rakibulhuda3.txt';
        return RNFS.writeFile(path, JSON.stringify(note), 'utf8');
      })
      .catch();
  };

  return (
    <ScrollView style={styles.main}>
      <TextInput
        ref={titleRef}
        onFocus={() => setbtn(false)}
        style={styles.title}
        defaultValue={route.params.note.title}
      />
      <View style={styles.divider} />

      <TextInput
        ref={noteRef}
        onFocus={() => setbtn(false)}
        multiline={true}
        style={styles.input}
        defaultValue={route.params.note.note}
      />
      <View style={styles.btn}>
        <Button
          onPress={NewNoteHandaler}
          disabled={btn}
          color="rgb(184, 3, 3)"
          title="Save"></Button>
        <Button
          onPress={() => setshare(!share)}
          color="blue"
          title="Share"></Button>
      </View>
      {share && (
        <Share
          share_note={{
            fromShared: 'wsad',
            title: route.params.note.title,
            note: route.params.note.note,
            sharedAt: 'Dhaka',
          }}
        />
      )}
    </ScrollView>
  );
};

export default EditNote;
