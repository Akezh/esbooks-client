import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { IReader } from '@types';
import { mapActionsToProps, mapStateToProps } from './TheQueueForTheBookContainerMaps';
import TheQueueForTheBookView from '../views';
import { TheQueueForTheBookContainerStyles as styles } from '../styles';

interface IProps {
  bookId: string;
  onGoBack: () => void;
  queues: any;
  reader: IReader;
  removeQueue: (userId: string, bookId: string, token: string) => void;
  waitingList: IReader[];
  token: string;
}

class TheQueueForTheBookContainer extends Component<IProps> {
  state = {
    waitingList: this.props.waitingList,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.queues !== this.props.queues) {
      this.setState({
        waitingList: nextProps.queues,
      });
    }
  }

  render() {
    const { onGoBack, reader } = this.props;
    const { waitingList } = this.state;

    const nav = {
      boostFromWaitToRead: this.boostFromWaitToRead,
      removePersonFromWaitingList: this.removePersonFromWaitingList,
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
            <Text style={styles.title}>The queue for the book</Text>
          </View>
        </View>
        <TheQueueForTheBookView
          reader={reader}
          waitingList={waitingList}
          nav={nav}
        />
      </React.Fragment>
    );
  }

  private removePersonFromWaitingList = async (
    userId: string,
    fullName: string,
  ) => {

    const { removeQueue, bookId, token } = this.props;

    Alert.alert(
      '',
      `Are you sure you want to remove ${fullName} from the queue?`,
      [
        {
          text: 'CONFIRM',
          onPress: async () => { await removeQueue(userId, bookId, token); },
        },
        {
          text: 'CANCEL',
          style: 'cancel',
        },
      ],
    );
  }

  private boostFromWaitToRead = (id: string, fullName: string): void => {
    Alert.alert(
      '',
      `Are you sure you want to let ${fullName} read this book?`,
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
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(TheQueueForTheBookContainer);
