import React, { FunctionComponent } from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ITheQueueForTheBookListItem } from '@types';
import { getImage } from '@utils';
import { TheQueueForTheBookListItemStyles as styles } from '../../styles';
import { THEME } from '@constants';

const { colors } = THEME;
const { error, accent } = colors;

const TheQueueForTheBookListItem: FunctionComponent<any> = (
  props,
): JSX.Element => {
  const { index, item, nav, reader } = props;
  const { fullName, avatar, id } = item;
  const { boostFromWaitToRead, removePersonFromWaitingList } = nav;

  // const formattedWaitingPersonDate =
  //   item && item.readAt && moment(createdAt).format('DD MMMM YYYY');

  return (
    <View style={styles.container}>
      <Text style={styles.index}>{index})</Text>
      <View style={styles.section}>
        <View style={styles.infoWaitingPersonWrapper}>
          <Image source={getImage(avatar, 'user')} style={styles.readerPhoto} />

          <View style={styles.infoWaitingPerson}>
            <Text numberOfLines={1} style={styles.fullname}>
              {fullName}
            </Text>
            {/* <Text style={styles.date}>{formattedWaitingPersonDate}</Text> */}
          </View>
        </View>

        <View style={styles.btnsWrapper}>
          <Icon
            name='close'
            color={error}
            onPress={() => removePersonFromWaitingList(id, fullName)}
            size={24}
            style={[
              styles.closeBtn,
              reader && reader.fullName ? styles.closeBtnMargin : null,
            ]}
          />

          {!reader && (
            <Icon
              color={accent}
              name='check'
              onPress={() => boostFromWaitToRead(id, fullName)}
              size={24}
              style={styles.applyBtn}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default TheQueueForTheBookListItem;
