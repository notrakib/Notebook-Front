import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import styles from './tutorial.module.css';
const Tutorial = () => {
  const [tutorial, setTutorial] = useState(0);
  const navigation = useNavigation();

  const tutorialArray = [
    {
      title: 'Make Note',
      description:
        'Write down everything that occurs to you each day, an idea not written down is an idea lost.',
    },
    {
      title: 'Privacy',
      description:
        'You can keep your note private on your local device for better privacy or store it in online to access from anywhere.',
    },
    {
      title: 'Share Note',
      description:
        'Share your notes with your mates to discuss on your particular interest.',
    },
    {
      title: 'Schedule',
      description:
        'Store your tasks to get notified before schedule and manage them accordingly',
    },
    {
      title: 'Analysis Schedule',
      description:
        'Stay focused on what is coming and how far you achieved your goal with our Statistics tab',
    },
  ];

  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require('./back.jpg')}></Image>
      <View style={styles.text}>
        <Text style={styles.title}>{tutorialArray[tutorial].title}</Text>
        <Text style={styles.desc}>{tutorialArray[tutorial].description}</Text>
        <View style={styles.button}>
          {!(tutorial == 0) && (
            <Button
              color="rgb(184, 3, 3)"
              style={styles.btn}
              onPress={() => setTutorial(tutorial - 1)}
              title="Previous"></Button>
          )}
          {!(tutorial == 4) && (
            <Button
              color="rgb(184, 3, 3)"
              style={styles.btn}
              onPress={() => setTutorial(tutorial + 1)}
              title="Next"></Button>
          )}
          {tutorial == 4 && (
            <Button
              color="rgb(184, 3, 3)"
              style={styles.btn}
              onPress={() => navigation.navigate('AllNote')}
              title="Next"></Button>
          )}
        </View>
      </View>
    </View>
  );
};

export default Tutorial;
