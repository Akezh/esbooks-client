import React from 'react';
import { Alert, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { mapActionsToProps, mapStateToProps } from './MyBooksContainerMaps';
import { connect } from 'react-redux';
import { IReader } from '@types';
import { Loading } from '@components';
import MyBooksView from '../views';
import { MyBooksContainerStyles as styles } from '../styles';

interface IProps {
  onAddAndChangeMyBook: () => void;
  onChangeMyBook: () => void;
  onGoBack: () => void;
  onTheQueueForTheBook: (reader: IReader, waitingList: IReader[]) => void;
  isLoading: boolean;
  getMyBooksData: (token: string) => void;
  token: string;
  data: any;
}

class MyBooksContainer extends React.Component<IProps> {
  componentDidMount() {
    const { getMyBooksData, token, data } = this.props;
    getMyBooksData(token);
    console.warn(data);
  }

  render() {
    const {
      onAddAndChangeMyBook,
      onChangeMyBook,
      onGoBack,
      onTheQueueForTheBook,
      isLoading,
      data
    } = this.props;

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
          data={data}
          callBookRemovalWarning={callBookRemovalWarning}
          callBookReturnAlert={callBookReturnAlert}
          onChangeMyBook={onChangeMyBook}
          onTheQueueForTheBook={onTheQueueForTheBook}
        />

        {isLoading
          && <Loading />}

      </React.Fragment>
    );
  }
};

export default connect(mapStateToProps, mapActionsToProps)(MyBooksContainer);