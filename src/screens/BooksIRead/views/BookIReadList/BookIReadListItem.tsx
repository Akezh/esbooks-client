import React, { FunctionComponent } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import moment from 'moment';
import { OTHER } from '@static';
import { IBookIReadListItem } from '@types';
import { getImage } from '@utils';
import { BookIReadListItemStyles as styles } from '../../styles';

const { author } = OTHER;

const BookIReadListItem: FunctionComponent<IBookIReadListItem> = (
  props,
): JSX.Element => {
  const { item } = props;
  const {
    authors,
    date,
    image,
    publisher,
    owner,
    title,
    startDateOfReading,
  } = item;

  const { fullname, photo } = owner;

  const formattedPublished = moment(date).format('DD MMMM YYYY');
  const formattedStartDateOfReading = moment(startDateOfReading).format(
    'DD MMMM YYYY',
  );

  return (
    <TouchableOpacity style={styles.containerWrapper}>
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={getImage(image, 'book')} />
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
                  source={getImage(photo, 'user')}
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
                    {fullname}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.ownerDate}>{formattedStartDateOfReading}</Text>
      </React.Fragment>
    </TouchableOpacity>
  );
};

export default BookIReadListItem;
