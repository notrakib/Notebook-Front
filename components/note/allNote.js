import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import RNFS from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';
import AddButton from '../layout/addButton';
import styles from './css/allNote.module.css';
import Note from './note';
import global from '../../global';
import {SendFile} from '../api/Note';

const AllNote = () => {
  const [note, setNote] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    RNFS.readDir(RNFS.DocumentDirectoryPath)
      .then(() => {
        const path = RNFS.DocumentDirectoryPath + '/rakibulhuda3.txt';
        return Promise.all([RNFS.stat(path), path]);
      })
      .then(statResult => {
        return RNFS.readFile(statResult[1]);
      })
      .then(contents => {
        const content = JSON.parse(contents);
        setNote(content);
      })
      .catch();
  }, []);

  const Test = () => {
    DocumentPicker.pickSingle({
      type: [DocumentPicker.types.allFiles],
    })
      .then(file => {
        const formData = new FormData();
        formData.append('file', file);

        SendFile(formData)
          .then(res => console.log(res))
          .catch();
      })
      .catch(err => {
        if (DocumentPicker.isCancel(err)) {
          alert('Canceled from single doc picker');
        } else {
          alert('Unknown Error: ' + JSON.stringify(err));
        }
      });
  };

  return (
    <View>
      <ScrollView
        // onScroll={event => console.log(event.nativeEvent.contentOffset.y)}
        style={styles.main}>
        {note.map((each, index) => {
          return <Note key={index} note={each} index={index} />;
        })}
      </ScrollView>
      {/* <AddButton Navigate={() => navigation.navigate('WriteNote')} /> */}
      <AddButton Navigate={Test} />
    </View>
  );
};

export default AllNote;
