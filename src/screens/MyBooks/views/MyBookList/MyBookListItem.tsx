import React, { FunctionComponent } from 'react';
import { Image, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import moment from 'moment';
import { OTHER } from '@static';
import { IMyBookListItem } from '@types';
import BookMenu from '../BookMenu';
import { MyBookListItemStyles as styles } from '../../styles';

const { author } = OTHER;

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
    const { callBookReturnAlert } = nav;
    const { fullname, photo } = reader;

    const formattedPublished = moment(date).format('DD MMMM YYYY');
    const formattedReaderDate = reader && moment(reader.date).format('DD.MM.YYYY');

    return (
      <View style={styles.bookInfoBlockWrapper}>
        <View style={styles.bookInfoBlock}>
          <Image source={image} />

          <View style={styles.bookInfoSection}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{title}</Text>
              <BookMenu waitingList={waiting_list} />
            </View>
            <View style={styles.authorInfoBlock}>
              <View style={styles.authorIconWrapper}>
                <Image
                  source={author}
                  style={styles.authorIcon}
                />
              </View>

              <View style={styles.authorInfoTextWrapper}>
                {authors.map((i, index) => (
                  <Text key={index} style={styles.author}>{i}</Text>
                ))}
                <Text style={styles.bookInfoText}>{publisher}</Text>
                <Text style={styles.bookInfoText}>{formattedPublished}</Text>
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
                  </View>

                  <TouchableRipple
                    style={styles.menuBtn}
                    onPress={callBookReturnAlert}
                  >
                    <Image
                      source={OTHER.menu}
                      style={styles.menuIcon}
                    />
                  </TouchableRipple>
                </View>

                <Text style={styles.readerDate}>{formattedReaderDate}</Text>
              </View>}
          </View>
        </View>
      </View>
    );
  };

export default MyBookListItem;