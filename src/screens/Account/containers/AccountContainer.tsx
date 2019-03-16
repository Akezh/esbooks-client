import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ACCOUNT_DATA} from '@constants';
import AccountView from '../views';
import { AccountContainerStyles as styles } from '../styles';

interface IProps {
  onGoBack: () => void;
}
interface IState {
  data: {
    fullname: string;
    email: string;
    image: any;
  };
  editMode: boolean;
}

class AccountContainer extends React.Component<IProps, IState> {
  public state = {
    data: ACCOUNT_DATA,
    editMode: false,
  };

  public render() {
    const { onGoBack } = this.props;
    const { data, editMode } = this.state;

    return (
      <React.Fragment>
        <View style={styles.headerContainer}>
            <View style={styles.headerLeftPart}>
              <Icon
                color='#FFF'
                name='arrow-left'
                onPress={onGoBack}
                size={24}
                style={styles.icon}
              />
              <Text style={styles.title}>Account</Text>
            </View>
            <Icon
              color='#FFF'
              name='pencil'
              size={24}
              style={styles.icon}
              onPress={this.changeMode}
            />
          </View>
        <AccountView 
          data={data}
          editMode={editMode}
          removeImage={this.removeImage}
        />
      </React.Fragment>
    );
  }

  private changeMode = (): void => {
    this.setState(prevState => ({
      editMode: !prevState.editMode,
    }));
  }

  private removeImage = (): void => {
    const {data} = this.state;
    const newData = data;
    newData.image = {};
    
    this.setState({
      data: newData,
    });
  }
}

export default AccountContainer;
