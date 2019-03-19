import React, { FunctionComponent } from 'react';
import { Image, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME } from '@constants';
import { formatAuthors } from '@utils';
import { BookListItemStyles as styles } from '../../styles';
import { PLACEHOLDERS } from '@static';
const { default_user_avatar, book } = PLACEHOLDERS;
const { colors } = THEME;
const { primary, inactively } = colors;

const BookListItem: FunctionComponent<any> = (props): JSX.Element => {
  const { item, onBookDetails } = props;
  let { authors, imageUri, owner, title, rating } = item;
  const { fullName, avatar } = owner;

  const renderImage = () => {
    if (imageUri && imageUri.startsWith('http://books.google.com')) {
      const a = imageUri.indexOf('$');
      imageUri =
        imageUri.substring(0, a) +
        '?' +
        imageUri.substring(a + 2, imageUri.length - 1);
      console.log('imageUri', imageUri);
    }

    return (
      <Image
        source={imageUri ? { uri: imageUri } : book}
        style={styles.image}
      />
    );
  };

  const renderBookInfoSection = () => {
    return (
      <View style={styles.bookInfoSection}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.text} numberOfLines={1}>
            {formatAuthors(authors)}
          </Text>
          <View style={styles.ratingWrapper}>
            <Text style={styles.rating}>{rating.avg ? rating.avg : 0}</Text>
            <Icon name='star' color={inactively} size={12} />
          </View>
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
    return (
      <Image
        source={avatar ? { uri: avatar } : default_user_avatar}
        style={styles.ownerPhoto}
      />
    );
  };

  const renderUploadBy = () => {
    return (
      <View style={styles.ownerTextWrapper}>
        <Text numberOfLines={1} style={styles.text}>
          Upload By
        </Text>
        <Text numberOfLines={1} style={styles.owner}>
          {fullName}
        </Text>
      </View>
    );
  };

  return (
    <TouchableRipple
      onPress={() => onBookDetails(item.id)}
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
