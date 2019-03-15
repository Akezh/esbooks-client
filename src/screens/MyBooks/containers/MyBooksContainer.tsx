import React, { FunctionComponent } from 'react';
import { Alert, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IReader } from '@types';
import MyBooksView from '../views';
import { MyBooksContainerStyles as styles } from '../styles';

interface IProps {
  onAddAndChangeMyBook: () => void;
  onChangeMyBook: () => void;
  onGoBack: () => void;
  onTheQueueForTheBook: (reader: IReader, waitingList: IReader[]) => void;
}

const MyBooksContainer: FunctionComponent<IProps> = (props): JSX.Element => {
  const {
    onAddAndChangeMyBook,
    onChangeMyBook,
    onGoBack,
    onTheQueueForTheBook,
  } = props;

  const callBookReturnAlert = (): void => {
    Alert.alert(
      '',
      'Are you sure you want to send a request to return this book?',
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

  const callBookRemovalWarning = (): void => {
    Alert.alert(
      '',
      'Are you sure you want to remove this book?',
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

        <Icon
          color='#FFF'
          name='plus'
          onPress={onAddAndChangeMyBook}
          size={24}
          style={styles.icon}
        />
      </View>

      <MyBooksView
        callBookRemovalWarning={callBookRemovalWarning}
        callBookReturnAlert={callBookReturnAlert}
        onChangeMyBook={onChangeMyBook}
        onTheQueueForTheBook={onTheQueueForTheBook}
      />
    </React.Fragment>
  );
};

export default MyBooksContainer;