import React, { FunctionComponent } from 'react';
import { Alert, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyBooksView from '../views';
import { MyBooksContainerStyles as styles } from '../styles';

interface IProps {
  onBookDetails: () => void;
  onGoBack: () => void;
}

const MyBooksContainer: FunctionComponent<IProps> = (props): JSX.Element => {
  const { onBookDetails, onGoBack } = props;

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

  return <React.Fragment>
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
        size={24}
        style={styles.icon}
      />
    </View>

    <MyBooksView
      callBookRemovalWarning={callBookRemovalWarning}
      callBookReturnAlert={callBookReturnAlert}
      onBookDetails={onBookDetails}
    />
  </React.Fragment>;
};

export default MyBooksContainer;