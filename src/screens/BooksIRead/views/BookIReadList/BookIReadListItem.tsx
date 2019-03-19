import React, { FunctionComponent } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import moment from 'moment';
import { OTHER } from '@static';
import { IBookIReadListItem } from '@types';
import { BookIReadListItemStyles as styles } from '../../styles';
import { PLACEHOLDERS } from '@static';

const { author } = OTHER;

const { default_user_avatar, book } = PLACEHOLDERS;

const BookIReadListItem: FunctionComponent<IBookIReadListItem> = (
  props,
): JSX.Element => {
  const { item } = props;
  let {
    authors,
    publishedDate,
    imageUri,
    publisher,
    owner,
    title,
    readAt,
  } = item;

  const formattedPublished = moment(publishedDate).format('DD MMMM YYYY');
  const formattedStartDateOfReading = moment(readAt).format('DD MMMM YYYY');

  if (imageUri && imageUri.startsWith('http://books.google.com')) {
    const a = imageUri.indexOf('$');
    imageUri =
      imageUri.substring(0, a) +
      '?' +
      imageUri.substring(a + 2, imageUri.length - 1);
    console.log('imageUri', imageUri);
  }

  if (imageUri && imageUri.startsWith('https://esbooks-bucket.s3')) {
    const a = imageUri.indexOf('$');
    imageUri =
      imageUri.substring(0, a) +
      '?' +
      imageUri.substring(a + 2, imageUri.length - 1);
    console.log('imageUri', imageUri);
  }

  return (
    <TouchableOpacity style={styles.containerWrapper}>
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={imageUri ? { uri: imageUri } : book}
            />
          </View>

          <View style={styles.bookInfo}>
            <View style={styles.bookInfoTitleWrapper}>
              <Text numberOfLines={1} style={styles.bookInfoTitle}>
                {title}
              </Text>
            </View>
            <View style={styles.bookInfoAuthorInfoBlock}>
              <Image source={author} style={styles.bookInfoAuthorIcon} />

              <View style={styles.bookInfoAuthorWrapper}>
                {authors.map((i, index) => (
                  <Text
                    key={index}
                    numberOfLines={1}
                    style={styles.bookInfoAuthor}
                  >
                    {i}
                  </Text>
                ))}
                <Text numberOfLines={1} style={styles.bookInfoText}>
                  {publisher}
                </Text>
                <Text numberOfLines={1} style={styles.bookInfoText}>
                  {formattedPublished}
                </Text>
              </View>
            </View>

            <View style={styles.ownerInfoWrapper}>
              <View style={styles.ownerInfo}>
                <Image
                  source={
                    owner.avatar ? { uri: owner.avatar } : default_user_avatar
                  }
                  style={styles.ownerPhoto}
                />

                <View style={styles.ownerInfoTextWrapper}>
                  <Text numberOfLines={1} style={styles.bookInfoText}>
                    Upload By
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[styles.bookInfoText, styles.ownerName]}
                  >
                    {owner.fullName}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.ownerDate}>
          {formattedStartDateOfReading !== 'Invalid date'
            ? formattedStartDateOfReading
            : '17 March 2019'}
        </Text>
      </React.Fragment>
    </TouchableOpacity>
  );
};

export default BookIReadListItem;
