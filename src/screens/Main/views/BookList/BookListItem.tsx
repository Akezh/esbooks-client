import React, { FunctionComponent } from 'react';
import { Image, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { THEME } from '@constants';
import { IMainBookListItem } from '@types';
import { formatAuthors, getBotImage } from '@utils';
import { BookListItemStyles as styles } from '../../styles';

const { colors } = THEME;
const { primary } = colors;

const BookListItem:
  FunctionComponent<IMainBookListItem> = (props): JSX.Element => {
    const { item, onBookDetails } = props;
    const { authors, image, owner, title } = item;
    const { fullname, photo } = owner;

    return (
      <TouchableRipple
        onPress={() => onBookDetails(item)}
        rippleColor={primary}
        style={styles.wrapper}
      >
        <View style={styles.container}>
          <Image source={getBotImage(image)} style={styles.image} />
          <View style={styles.bookInfoSection}>
            <View style={styles.titleWrapper}>
              <Text
                numberOfLines={2}
                style={styles.title}
              >
                {title}
              </Text>
              <Text
                numberOfLines={1}
                style={styles.text}
              >
                {formatAuthors(authors)}
              </Text>
            </View>
          </View>
          <View style={styles.ownerInfoSectionWrapper}>
            <View style={styles.ownerInfoSection}>
              <Image source={photo} style={styles.ownerPhoto} />
              <View style={styles.ownerTextWrapper}>
                <Text
                  numberOfLines={1}
                  style={styles.text}
                >
                  Upload By
                </Text>
                <Text
                  numberOfLines={1}
                  style={styles.owner}
                >
                  {fullname}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableRipple>
    );
  };

export default BookListItem;