import React, { FunctionComponent } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { THEME } from '@constants';
import { OTHER } from '@static';
import { IMyBookListItem } from '@types';
import BookMenu from '../BookMenu';
import { MyBookListItemStyles as styles } from '../../styles';

const { author } = OTHER;
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
    } = nav;

    const { fullname, photo } = reader;

    const formattedPublished = moment(date).format('DD MMMM YYYY');
    const formattedReaderDate = reader && moment(reader.date).format('DD MMMM YYYY');

    const urlReg = /(https?:\/\/[^\s]+)/g;
    const isImageUrl = urlReg.test(image);
    return (
      <TouchableOpacity
        onPress={onBookDetails}
        style={styles.containerWrapper}
      >
        <View style={styles.container}>

          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={isImageUrl
                ? { uri: image }
                : image}
            />

            {waiting_list.length
              ? <TouchableRipple
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
                  <Image source={photo} style={styles.readerPhoto} />

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