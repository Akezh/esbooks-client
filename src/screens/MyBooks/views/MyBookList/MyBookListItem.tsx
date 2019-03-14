import React, { FunctionComponent } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { THEME } from '@constants';
import { OTHER, PLACEHOLDERS } from '@static';
import { IMyBookListItem } from '@types';
import BookMenu from '../BookMenu';
import { MyBookListItemStyles as styles } from '../../styles';

const { author } = OTHER;
const { default_user_avatar, book } = PLACEHOLDERS;
const { colors } = THEME;
const { text } = colors;

const MyBookListItem:
  FunctionComponent<IMyBookListItem> = (props): JSX.Element => {
    const { item, nav } = props;
    const {
      authors,
      date,
      image,
      publisher,
      reader,
      title,
      waiting_list,
    } = item;

    const {
      callBookRemovalWarning,
      callBookReturnAlert,
      onBookDetails,
      onChangeMyBook,
      onTheQueueForTheBook,
    } = nav;

    const { fullname, photo } = reader;

    const urlReg = /(https?:\/\/[^\s]+)/g;

    const formattedPublished = moment(date).format('DD MMMM YYYY');
    const isBookImageUrl = urlReg.test(image);

    const isReaderPhotoUrl = reader && urlReg.test(photo);
    const formattedReaderDate = reader && moment(reader.date).format('DD MMMM YYYY');

    return (
      <TouchableOpacity
        onPress={onBookDetails}
        style={styles.containerWrapper}
      >
        <View style={styles.container}>

          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={isBookImageUrl
                ? { uri: book }
                : image}
            />

            {waiting_list.length
              ? <TouchableRipple
                onPress={() => onTheQueueForTheBook(reader, waiting_list)}
                style={styles.numberOfWaitingPeopleBtn}
              >
                <Text style={styles.numberOfWaitingPeopleBtnText}>
                  {waiting_list.length}
                </Text>
              </TouchableRipple>
              : null}
          </View>

          <View style={styles.bookInfo}>
            <View style={styles.bookInfoTitleWrapper}>
              <Text
                numberOfLines={1}
                style={styles.bookInfoTitle}
              >
                {title}
              </Text>
              <BookMenu
                onChangeMyBook={onChangeMyBook}
                callBookRemovalWarning={callBookRemovalWarning}
              />
            </View>
            <View style={styles.bookInfoAuthorInfoBlock}>
              <Image
                source={author}
                style={styles.bookInfoAuthorIcon}
              />

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
                <Text
                  numberOfLines={1}
                  style={styles.bookInfoText}
                >
                  {publisher}
                </Text>
                <Text
                  numberOfLines={1}
                  style={styles.bookInfoText}
                >
                  {formattedPublished}
                </Text>
              </View>
            </View>

            {reader.fullname
              && <View style={styles.readerInfoWrapper}>
                <View style={styles.readerInfo}>
                  <Image
                    source={isReaderPhotoUrl
                      ? { uri: default_user_avatar }
                      : photo}
                    style={styles.readerPhoto}
                  />

                  <View style={styles.readerInfoTextWrapper}>
                    <Text
                      numberOfLines={1}
                      style={styles.bookInfoText}
                    >
                      The book is at
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[styles.bookInfoText, styles.readerName]}
                    >
                      {fullname}'s
                    </Text>
                    <Text style={styles.readerDate}>
                      {formattedReaderDate}
                    </Text>
                  </View>

                  <Icon
                    color={text}
                    name='restore'
                    onPress={callBookReturnAlert}
                    size={20}
                  />
                </View>
              </View>}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

export default MyBookListItem;