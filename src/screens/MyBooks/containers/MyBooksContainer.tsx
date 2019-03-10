import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyBooksView from '../views';
import { MyBooksContainerStyles as styles } from '../styles';

interface IProps {
  onGoBack: () => void;
}

const MyBooksContainer: FunctionComponent<IProps> = (props): JSX.Element => {
  const { onGoBack } = props;

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
    <MyBooksView />
  </React.Fragment>;
};

export default MyBooksContainer;