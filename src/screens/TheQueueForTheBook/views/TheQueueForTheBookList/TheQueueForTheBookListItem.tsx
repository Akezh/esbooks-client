import React, { FunctionComponent } from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PLACEHOLDERS } from '@static';
import { ITheQueueForTheBookListItem } from '@types';
import { TheQueueForTheBookListItemStyles as styles } from '../../styles';
import { THEME } from '@constants';

const { colors } = THEME;
const { error, accent } = colors;

const { default_user_avatar } = PLACEHOLDERS;

const TheQueueForTheBookListItem:
  FunctionComponent<ITheQueueForTheBookListItem> = (props): JSX.Element => {
    const {
      index,
      item,
      nav,
      reader,
    } = props;
    const { fullname, photo, date } = item;
    const {
      boostFromWaitToRead,
      removePersonFromWaitingList,
    } = nav;

    const urlReg = /(https?:\/\/[^\s]+)/g;

    const isWaitingPersonPhotoUrl = photo && urlReg.test(photo);
    const formattedWaitingPersonDate = moment(date).format('DD MMMM YYYY');

    return (
      <View style={styles.container}>
        <Text style={styles.index}>{index})</Text>
        <View style={styles.section}>

          <View style={styles.infoWaitingPersonWrapper}>
            <Image
              source={isWaitingPersonPhotoUrl
                ? { uri: default_user_avatar }
                : photo}
              style={styles.readerPhoto}
            />

            <View style={styles.infoWaitingPerson}>
              <Text
                numberOfLines={1}
                style={styles.fullname}
              >
                {fullname}
              </Text>
              <Text style={styles.date}>{formattedWaitingPersonDate}</Text>
            </View>
          </View>

          <View style={styles.btnsWrapper}>
            <Icon
              name='close'
              color={error}
              onPress={() => removePersonFromWaitingList(fullname)}
              size={24}
              style={[styles.closeBtn, reader.fullname
                ? styles.closeBtnMargin
                : undefined]}
            />

            {!reader.fullname
              && <Icon
                color={accent}
                name='check'
                onPress={() => boostFromWaitToRead(fullname)}
                size={24}
                style={styles.applyBtn}
              />}
          </View>
        </View>
      </View>
    );
  };

export default TheQueueForTheBookListItem;