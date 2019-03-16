import React from 'react';
import { Alert, BackHandler, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { mapActionsToProps, mapStateToProps } from './AccountContainerMaps';
import AccountView from '../views';
import { AccountContainerStyles as styles } from '../styles';
import { Loading } from '@components';

interface IProps {
  prevData: {
    avatar: any;
    email: string;
    fullName: string;
  };
  provider: string;
  token: string;
  navigation: any;
  onGoBack: () => void;
  setUserInfo: (data: any) => void;
  isLoading: boolean;
  updateUserInfo: (data: any, token: string, provider: string) => void;
}

interface IState {
  newData: {
    avatar: any;
    email: string;
    fullName: string;
  };
  editMode: boolean;
}

class AccountContainer extends React.Component<IProps, IState> {
  public _didFocusSubscription: any;
  public _willBlurSubscription: any;
  public prevData = this.props.prevData;

  constructor(props: IProps) {
    super(props);

    const { prevData, navigation } = props;

    this.state = {
      newData: prevData,
      editMode: false,
    };

    this._didFocusSubscription = navigation.addListener('didFocus', _payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid),
    );
  }

  async componentDidMount() {
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
    const { isLoading } = this.props;
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

        {isLoading && <Loading />}
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
              newData: {...this.props.prevData},
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
    const { newData } = this.state;
    const customNewData = {...newData};
    customNewData.fullName = value; 

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
      const { newData } = this.state;
      const customNewData = {...newData};

      customNewData.avatar = {
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
    }).then((image: any) => {
      const { newData } = this.state;
      const customNewData = {...newData};

      const path = image.path.split('/');

      customNewData.avatar = {
        uri: image.path,
        type: image.mime,
        name: path[path.length - 1],
        size: image.size,
      };

      this.setState({
        newData: customNewData,
      });
    }).catch();
  }

  private close = (): void => {
    const { onGoBack } = this.props;
    const { editMode } = this.state;
    
    if (editMode) {
      this.callAlertDiscardChanges();
    } else {
      onGoBack();
    }
  }

  private changeMode = async () => {
    const { setUserInfo, provider, token, updateUserInfo } = this.props;
    const { editMode, newData } = this.state;
    
    if (editMode) {
      const data = new FormData();
      if (newData.avatar.uri) {
        data.append('image', newData.avatar);
        data.append('old_image_uri', this.prevData.avatar);
      } else {
        data.append('avatar', newData.avatar);
      }

      data.append('full_name', newData.fullName);

      await updateUserInfo(data, token, provider);
      
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

export default connect(mapStateToProps, mapActionsToProps)(AccountContainer);
