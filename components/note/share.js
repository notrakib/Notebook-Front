import {useRef} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {PostShareNote} from '../api/Note';
import styles from './css/share.module.css';

const Share = props => {
  const email = useRef();

  const ShareNoteHandaler = () => {
    const note = {
      ...props.share_note,
      toShared:
        email.current._internalFiberInstanceHandleDEV.memoizedProps.text,
    };
    console.log(note);
    PostShareNote(note)
      .then(res => console.log(res))
      .catch();
  };

  return (
    <View style={[styles.main, style.main]}>
      <TextInput ref={email} placeholder="User Email" style={styles.input} />
      <Button onPress={ShareNoteHandaler} title="Share Now"></Button>
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
