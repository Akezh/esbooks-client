import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { mapActionsToProps, mapStateToProps } from './BooksIReadContainerMaps';
import { connect } from 'react-redux';
import { Loading } from '@components';
import BooksIReadView from '../views';
import { BooksIReadContainerStyles as styles } from '../styles';

interface IProps {
  isLoading: boolean;
  onGoBack: () => void;
  getBooksIReadData: (token: string) => void;
  token: string;
  data: any;
}

class BooksIReadContainer extends React.Component<IProps> {
  async componentDidMount() {
    const { getBooksIReadData, token } = this.props;
    await getBooksIReadData(token);
  }

  render() {
    const { onGoBack, isLoading, data } = this.props;

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
            <Text style={styles.title}>Books I read</Text>
          </View>
        </View>

        <BooksIReadView data={data} />

        {isLoading && <Loading />}
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(BooksIReadContainer);
