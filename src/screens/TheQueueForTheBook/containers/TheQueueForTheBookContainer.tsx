import React, { FunctionComponent } from 'react';
import { Alert, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IReader } from '@types';
import TheQueueForTheBookView from '../views';
import { TheQueueForTheBookContainerStyles as styles } from '../styles';

interface IProps {
  onGoBack: () => void;
  reader: IReader;
  waitingList: IReader[];
}

const TheQueueForTheBookContainer:
  FunctionComponent<IProps> = (props): JSX.Element => {
    const {
      onGoBack,
      reader,
      waitingList,
    } = props;

    const removePersonFromWaitingList = (fullname: string): void => {
      Alert.alert(
        '',
        `Are you sure you want to remove ${fullname} from the queue?`,
        [
          {
            text: 'CONFIRM',
          },
          {
            text: 'CANCEL',
            style: 'cancel',
          },
        ],
      );
    };

    const boostFromWaitToRead = (fullname: string): void => {
      Alert.alert(
        '',
        `Are you sure you want to let ${fullname} read this book?`,
        [
          {
            text: 'CONFIRM',
          },
          {
            text: 'CANCEL',
            style: 'cancel',
          },
        ],
      );
    };

    const nav = {
      boostFromWaitToRead,
      removePersonFromWaitingList,
    };

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
            <Text style={styles.title}>My books</Text>
          </View>
        </View>
        <TheQueueForTheBookView
          reader={reader}
          waitingList={waitingList}
          nav={nav}
        />
      </React.Fragment>
    );
  };

export default TheQueueForTheBookContainer;