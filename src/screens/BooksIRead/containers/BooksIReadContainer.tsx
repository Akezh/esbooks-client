import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BooksIReadView from '../views';
import { BooksIReadContainerStyles as styles } from '../styles';

interface IProps {
  onGoBack: () => void;
}

const BooksIReadContainer: FunctionComponent<IProps> = (props): JSX.Element => {
  const { onGoBack } = props;

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

      <BooksIReadView />
    </React.Fragment>
  );
};

export default BooksIReadContainer;