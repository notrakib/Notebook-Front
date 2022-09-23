import {View, Text, TouchableOpacity} from 'react-native';
import styles from './navbar.module.css';

const Navbar = props => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => {}}>
        <Text onPress={() => props.SideMenuHandaler()} style={styles.nav_menu}>
          Creative Notebook
        </Text>
      </TouchableOpacity>

      <Text style={styles.nav_menu}>Sign in</Text>
    </View>
  );
};

export default Navbar;
