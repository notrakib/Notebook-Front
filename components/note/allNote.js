import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import RNFS from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';
import AddButton from '../layout/addButton';
import styles from './css/allNote.module.css';
import Note from './note';
import global from '../../global';

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
      .then(res => {
        const formData = new FormData();
        formData.append('title', 'adwsdfawd');
        formData.append('file', res);
        console.log(formData);

        fetch(`${global.Base_URL}/post-note`, {
          method: 'POST',
          body: formData,
          // headers: {
          //   'Content-Type': 'multipart/form-data; ',
          // },
        })
          .then(res => {
            return res.json();
          })
          .then(returnObj => {
            if (returnObj.error) {
            } else {
              return returnObj;
            }
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        if (DocumentPicker.isCancel(err)) {
          alert('Canceled from single doc picker');
        } else {
          alert('Unknown Error: ' + JSON.stringify(err));
        }
      });

    // DocumentPicker.pickSingle({
    //   type: [DocumentPicker.types.allFiles],
    // })
    //   .then(res => {
    //     console.log(res);
    //     RNFS.uploadFiles({
    //       toUrl: 'http://10.0.2.2:8080/post-note',
    //       files: {
    //         name: res.name,
    //         filename: res.name,
    //         filepath: res.uri,
    //         filetype: res.type,
    //       },
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'multipart/form-data; ',
    //       },
    //       begin: () => {
    //         console.log('File Uploading Started...');
    //       },
    //       progress: response => {
    //         var percentage = Math.floor(
    //           (response.totalBytesSent / response.totalBytesExpectedToSend) *
    //             100,
    //         );
    //         console.log('UPLOAD IS ' + percentage + '% DONE!');
    //       },
    //     })
    //       .then(res => console.log(res))
    //       .catch(err => console.log(err));
    //   })
    //   .catch(err => {
    //     if (DocumentPicker.isCancel(err)) {
    //       alert('Canceled from single doc picker');
    //     } else {
    //       alert('Unknown Error: ' + JSON.stringify(err));
    //     }
    //   });
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
