import React from 'react';
import { Alert, BackHandler, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ACCOUNT_DATA} from '@constants';
import AccountView from '../views';
import { AccountContainerStyles as styles } from '../styles';

interface IProps {
  navigation: any;
  onGoBack: () => void;
}
interface IState {
  newData: {
    fullname: string;
    email: string;
    image: any;
  };
  editMode: boolean;
}

class AccountContainer extends React.Component<IProps, IState> {
  public _didFocusSubscription: any;
  public _willBlurSubscription: any;
  public data = Object.create(ACCOUNT_DATA);

  constructor(props: IProps) {
    super(props);

    const { navigation } = props;

    this.state = {
      newData: Object.create(ACCOUNT_DATA),
      editMode: false,
    };

    this._didFocusSubscription = navigation.addListener('didFocus', _payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid),
    );
  }
  
  componentDidMount() {
    const { navigation } = this.props;

    this._willBlurSubscription = navigation.addListener('willBlur', _payload =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid),
    );
  }

  onBackButtonPressAndroid = (): boolean => {
    const { editMode } = this.state;

    if (editMode) {
      this.callAlertDiscardChanges();
      
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }


  public render() {
    const { editMode, newData } = this.state;

    return (
      <React.Fragment>
        <View style={styles.headerContainer}>
            <View style={styles.headerLeftPart}>
              <Icon
                color='#FFF'
                name={editMode ? 'close' : 'arrow-left'}
                onPress={this.close}
                size={24}
                style={styles.icon}
              />
              <Text style={styles.title}>Account</Text>
            </View>
            <Icon
              color='#FFF'
              name={editMode ? 'content-save-edit' : 'pencil' }
              size={24}
              style={styles.icon}
              onPress={this.changeMode}
            />
          </View>
        <AccountView 
          editMode={editMode}
          newData={newData}
          onChangeFullname={this.onChangeFullname}
          openCamera={this.openCamera}
          openPicker={this.openPicker}
        />
      </React.Fragment>
    );
  }

  private callAlertDiscardChanges = (): void => {
    Alert.alert(
      '',
      'Discard changes?',
      [
        {
          text: 'YES',
          onPress: () => {
            this.setState({
              editMode: false,
              newData: Object.create(this.data),
            });
          },
        },
        {
          text: 'CLOSE',
          style: 'cancel',
        },
      ],
    );
  }
  
  private onChangeFullname = (value: string): void => {
    const {newData} = this.state;
    const customNewData = Object.create(newData);
    customNewData.fullname = value; 

    this.setState({
      newData: customNewData,
    });
  }

  private openCamera = (): void => {
    ImagePicker.openCamera({
      width: 360,
      height: 540,
      cropping: true,
    }).then(image => {
      const {newData} = this.state;
      const customNewData = Object.create(newData);

      customNewData.image = {
        // @ts-ignore
        uri: image.path,
        // @ts-ignore
        width: image.width,
        // @ts-ignore
        height: image.height,
        // @ts-ignore
        mime: image.mime,
      };

      this.setState({
        newData: customNewData,
      });
    }).catch();
  }

  private openPicker = (): void => {
    ImagePicker.openPicker({
      width: 360,
      height: 540,
      cropping: true,
    }).then(image => {
      const {newData} = this.state;
      const customNewData = Object.create(newData);

      customNewData.image = {
        // @ts-ignore
        uri: image.path,
        // @ts-ignore
        width: image.width,
        // @ts-ignore
        height: image.height,
        // @ts-ignore
        mime: image.mime,
      };

      this.setState({
        newData: customNewData,
      });
    }).catch();
  }

  private close = (): void => {
    const {onGoBack} = this.props;
    const {editMode} = this.state;
    
    if (editMode) {
      this.callAlertDiscardChanges();
    } else {
      onGoBack();
    }
  }

  private changeMode = (): void => {
    const {editMode, newData} = this.state;
    
    if (editMode) {
      this.data = Object.create(newData);
      this.setState(prevState => ({
        editMode: !prevState.editMode,
      }));
    } else {
      this.setState(prevState => ({
        editMode: !prevState.editMode,
      }));
    }
  }
}

export default AccountContainer;
