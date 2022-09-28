import {Modal} from 'react-native';
import SideMenu from './sideMenu';

const CustomModal = props => {
  return (
    <Modal
      style={{backgroundColor: 'white'}}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      transparent={true}
      visible={props.modalVisible}>
      <SideMenu SideMenuHandaler={() => props.SideMenuHandaler()} />
    </Modal>
  );
};

export default CustomModal;
