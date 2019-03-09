import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { BookDescriptionBlockStyles as styles } from '../styles';

interface IProps {
  description: string;
  subtitle: string;
}

interface IState {
  showFullText: boolean;
}

class BookDescriptionBlock extends Component<IProps, IState> {
  public state = {
    showFullText: false,
  };

  render() {
    const {
      description,
      subtitle,
    } = this.props;

    const { showFullText } = this.state;
    return (
      <View style={styles.block}>

        <View style={styles.container}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text
            numberOfLines={showFullText ? undefined : 4}
            style={styles.description}
            onPress={this.showMore}
          >
            {description}
          </Text>
        </View>
      </View >
    );
  }

  private showMore = (): void => {
    this.setState({
      showFullText: true,
    });
  }
}

export default BookDescriptionBlock;