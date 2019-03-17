import React, { FunctionComponent } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import moment from 'moment';
import { CategoryList } from '@components';
import { OTHER, PLACEHOLDERS } from '@static';
import { IOwner } from '@types';
import { BookInfoBlockStyles as styles } from '../styles';

interface IProps {
  data: {
    authors: string[],
    categories: string[],
    image_uri: any,
    owner: IOwner,
    published_date: Date | string,
    publisher: string,
    reader: IOwner,
    title: string,
    queues: IOwner[],
  };
}
const { book, default_user_avatar } = PLACEHOLDERS;
const { author } = OTHER;

const BookInfoBlock: FunctionComponent<IProps> = (props): JSX.Element => {
  const { data } = props;
  const {
    authors,
    categories,
    image_uri,
    owner,
    published_date,
    publisher,
    reader,
    title,
    queues,
  } = data;
  const { avatar, fullName } = owner;

  const formattedPublished = moment(published_date).format('DD MMMM YYYY');

  return (
    <View style={styles.bookInfoBlockWrapper}>
      <View style={styles.bookInfoBlock}>
        <Image
          source={image_uri ? { uri: image_uri } : book}
          style={styles.image}
        />

        <View style={styles.bookInfoSection}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.authorInfoBlock}>
            <View style={styles.authorIconWrapper}>
              <Image source={author} style={styles.authorIcon} />
            </View>

            <View style={styles.authorInfoTextWrapper}>
              {authors.map((item, index) => (
                <Text key={index} style={styles.author}>
                  {item}
                </Text>
              ))}
              <Text style={styles.bookInfoText}>{publisher}</Text>
              <Text style={styles.bookInfoText}>{formattedPublished}</Text>
            </View>
          </View>

          <CategoryList data={categories} />

          <View style={styles.ownerInfo}>
            <View style={styles.authorIconWrapper}>
              <Image
                source={avatar ? { uri: avatar } : default_user_avatar}
                style={styles.ownerPhoto}
              />
            </View>
            <View style={styles.ownerInfoTextWrapper}>
              <Text numberOfLines={1} style={styles.bookInfoText}>
                Upload By
              </Text>
              <Text
                numberOfLines={1}
                style={[styles.bookInfoText, styles.ownerName]}
              >
                {fullName}
              </Text>
            </View>
          </View>

          {reader ? (
            <View>
              <Text style={[styles.isBookStatus, styles.isNotBookFree]}>
                This book is busy
              </Text>
              <Text style={styles.waitingList}>
                ({queues.length} people waiting in line)
              </Text>
            </View>
          ) : (
            <Text style={[styles.isBookStatus, styles.isBookFree]}>
              This book is free
            </Text>
          )}
        </View>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableRipple style={styles.btn}>
          <Text style={styles.btnText}>JOIN THE QUEUE</Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

export default BookInfoBlock;
