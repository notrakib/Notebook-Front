import {useRef, useState} from 'react';
import RNFS from 'react-native-fs';
import {Button, ScrollView, TextInput, View} from 'react-native';
import styles from './css/writeNote.module.css';

const WriteNote = () => {
  const [btn, setbtn] = useState(false);
  const titleRef = useRef();
  const noteRef = useRef();

  const NewNoteHandaler = () => {
    const inputTitle =
      titleRef.current._internalFiberInstanceHandleDEV.memoizedProps.text;
    const inputNote =
      noteRef.current._internalFiberInstanceHandleDEV.memoizedProps.text;
    if (inputTitle === '' || inputNote === '') {
      return;
    }

    RNFS.readDir(RNFS.DocumentDirectoryPath)
      .then(() => {
        const path = RNFS.DocumentDirectoryPath + '/rakibulhuda3.txt';
        return Promise.all([RNFS.stat(path), path]);
      })
      .then(statResult => {
        return RNFS.readFile(statResult[1]);
      })
      .then(contents => {
        const note = JSON.parse(contents);
        note.push({
          title:
            titleRef.current._internalFiberInstanceHandleDEV.memoizedProps.text,
          note: noteRef.current._internalFiberInstanceHandleDEV.memoizedProps
            .text,
        });
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
        placeholder="Add Title"
      />
      <View style={styles.divider} />

      <TextInput
        ref={noteRef}
        onFocus={() => setbtn(false)}
        multiline={true}
        style={styles.input}
        placeholder="Start you note here"
      />
      <View style={styles.btn}>
        <Button
          onPress={NewNoteHandaler}
          disabled={btn}
          color="rgb(184, 3, 3)"
          title="Save"></Button>
      </View>
    </ScrollView>
  );
};

export default WriteNote;
