import React, { FunctionComponent } from 'react';
import { Image, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { THEME } from '@constants';
import { PLACEHOLDERS } from '@static';
import { IHomeBookListItem } from '@types';
import { formatAuthors } from '@utils';
import { BookListItemStyles as styles } from '../../styles';

const { default_user_avatar, book } = PLACEHOLDERS;
const { colors } = THEME;
const { primary } = colors;

const BookListItem:
  FunctionComponent<IHomeBookListItem> = (props): JSX.Element => {
    const { item, onBookDetails } = props;
    const { authors, image, owner, title } = item;
    const { fullname, photo } = owner;

    const urlReg = /(https?:\/\/[^\s]+)/g;

    const isBookImageUrl = urlReg.test(image);
    const isOwnerPhotoUrl = owner && urlReg.test(photo);

    const renderImage = () => {
      return <Image
        source={isBookImageUrl
          ? { uri: book }
          : image}
        style={styles.image}
      />;
    };

    const renderBookInfoSection = () => {
      return (
        <View style={styles.bookInfoSection}>
          <View style={styles.titleWrapper}>
            <Text
              style={styles.title}
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              style={styles.text}
              numberOfLines={1}
            >
              {formatAuthors(authors)}
            </Text>
          </View>
        </View>
      );
    };

    const renderOwnerInfoSection = () => {
      return (
        <View style={styles.ownerInfoSectionWrapper}>
          <View style={styles.ownerInfoSection}>
            {renderOwnerAvatar()}
            {renderUploadBy()}
          </View>
        </View>
      );
    };

    const renderOwnerAvatar = () => {
      return <Image
        source={isOwnerPhotoUrl
          ? { uri: default_user_avatar }
          : photo}
        style={styles.ownerPhoto}
      />;
    };

    const renderUploadBy = () => {
      return (
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
      );
    };

    return (
      <TouchableRipple
        onPress={() => onBookDetails(item)}
        rippleColor={primary}
        style={styles.wrapper}
      >
        <View style={styles.container}>
          {renderImage()}
          <View style={styles.bookInfo}>
            {renderBookInfoSection()}
            {renderOwnerInfoSection()}
          </View>
        </View>
      </TouchableRipple>
    );
  };

export default BookListItem;