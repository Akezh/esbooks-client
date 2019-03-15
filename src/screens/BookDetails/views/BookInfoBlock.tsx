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
    authors: string[];
    categories: string[];
    image: any;
    owner: IOwner;
    published: Date | string;
    publisher: string;
    reader: IOwner;
    title: string;
    waiting_list: IOwner[];
  };
}

const { book } = PLACEHOLDERS;
const { author } = OTHER;

const BookInfoBlock: FunctionComponent<IProps> = (props): JSX.Element => {
  const { data } = props;
  const {
    authors,
    categories,
    image,
    owner,
    published,
    publisher,
    reader,
    title,
    waiting_list,
  } = data;
  const { photo, fullname } = owner;

  const formattedPublished = moment(published).format('DD MMMM YYYY');

  const urlReg = /(https?:\/\/[^\s]+)/g;

  const isBookImageUrl = urlReg.test(image);
  const isReaderPhotoUrl = reader && urlReg.test(photo);

  return (
    <View style={styles.bookInfoBlockWrapper}>
      <View style={styles.bookInfoBlock}>
        <Image
          source={isBookImageUrl
            ? { uri: book }
            : image}
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
                <Text key={index} style={styles.author}>{item}</Text>
              ))}
              <Text style={styles.bookInfoText}>{publisher}</Text>
              <Text style={styles.bookInfoText}>{formattedPublished}</Text>
            </View>
          </View>

          <CategoryList data={categories} />

          <View style={styles.ownerInfo}>
            <View style={styles.authorIconWrapper}>
              <Image
                source={isReaderPhotoUrl
                  ? { uri: book }
                  : photo}
                style={styles.ownerPhoto}
              />
            </View>
            <View style={styles.ownerInfoTextWrapper}>
              <Text
                numberOfLines={1}
                style={styles.bookInfoText}
              >
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

          {reader.fullname
            ? <View>
              <Text style={[styles.isBookStatus, styles.isNotBookFree]}>
                This book is busy
              </Text>
              <Text style={styles.waitingList}>({waiting_list.length} people waiting in line)</Text>
            </View>
            : <Text style={[styles.isBookStatus, styles.isBookFree]}>
              This book is free
          </Text>}

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