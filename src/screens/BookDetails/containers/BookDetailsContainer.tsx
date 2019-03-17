import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IRateBookData } from '@types';
import BookDetailsView from '../views';
import { BookDetailsContainerStyles as styles } from '../styles';
import { mapActionsToProps, mapStateToProps } from './BookDetailsContainerMaps';
import { connect } from 'react-redux';
import { Loading } from '@components';

interface IProps {
  onGoBack: () => void;
  onRateBook: (item: IRateBookData, value?: number) => void;
  isLoading: boolean;
  data: any;
  token: string;
  bookId: any;
  getBookDetails: (bookId: any, token: string) => void;
}

class BookDetailsContainer extends React.Component<IProps> {
  public async componentDidMount() {
    const { getBookDetails, bookId, token } = this.props;

    await getBookDetails(bookId, token);
  }

  public render() {
    const { onGoBack, onRateBook, data, isLoading } = this.props;
    return !isLoading ? <React.Fragment>
        <View style={styles.headerContainer}>
          <Icon
            color='#FFF'
            name='arrow-left'
            onPress={onGoBack}
            size={24}
            style={styles.arrow_back}
          />
          <Text style={styles.title}>Employees Share Books</Text>
        </View> 
   
        { data && data.id ? <BookDetailsView
          incompleteData={data}
          onRateBook={onRateBook}
        /> : null }

    </React.Fragment> : <Loading />;
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(BookDetailsContainer);
