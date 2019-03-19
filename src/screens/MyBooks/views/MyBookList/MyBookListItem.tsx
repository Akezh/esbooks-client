import React, { FunctionComponent } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { THEME } from '@constants';
import { OTHER } from '@static';
import { IMyBookListItem } from '@types';
import { getImage } from '@utils';
import BookMenu from '../BookMenu';
import { MyBookListItemStyles as styles } from '../../styles';
import { PLACEHOLDERS } from '@static';

const { author } = OTHER;
const { colors } = THEME;
const { text } = colors;

const { default_user_avatar } = PLACEHOLDERS;

const MyBookListItem: FunctionComponent<IMyBookListItem> = (
  props,
): JSX.Element => {
  const { item, nav } = props;
  let {
    id,
    authors,
    publishDate,
    imageUri,
    publisher,
    reader,
    title,
    queues,
  } = item;

  const {
    callBookRemovalWarning,
    callBookReturnAlert,
    onBookDetails,
    onChangeMyBook,
    onTheQueueForTheBook,
  } = nav;

  const formattedPublished = moment(publishDate).format('DD MMMM YYYY');
  const formattedReaderDate =
    reader && moment(reader.date).format('DD MMMM YYYY');

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
    <TouchableOpacity
      onPress={() => onBookDetails(id)}
      style={styles.containerWrapper}
    >
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={getImage(imageUri, 'book')} />

          {queues.length ? (
            <TouchableRipple
              onPress={() => onTheQueueForTheBook(id, reader, queues)}
              style={styles.numberOfWaitingPeopleBtn}
            >
              <Text style={styles.numberOfWaitingPeopleBtnText}>
                {queues.length}
              </Text>
            </TouchableRipple>
          ) : null}
        </View>

        <View style={styles.bookInfo}>
          <View style={styles.bookInfoTitleWrapper}>
            <Text numberOfLines={1} style={styles.bookInfoTitle}>
              {title}
            </Text>
            <BookMenu
              onChangeMyBook={onChangeMyBook}
              callBookRemovalWarning={callBookRemovalWarning}
            />
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

          {reader && (
            <View style={styles.readerInfoWrapper}>
              <View style={styles.readerInfo}>
                <Image
                  source={
                    reader.avatar ? { uri: reader.avatar } : default_user_avatar
                  }
                  style={styles.readerPhoto}
                />

                <View style={styles.readerInfoTextWrapper}>
                  <Text numberOfLines={1} style={styles.bookInfoText}>
                    The book is at
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[styles.bookInfoText, styles.readerName]}
                  >
                    {reader.fullName}'s
                  </Text>
                  <Text style={styles.readerDate}>{formattedReaderDate}</Text>
                </View>

                <Icon
                  color={text}
                  name='restore'
                  onPress={callBookReturnAlert}
                  size={20}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyBookListItem;
