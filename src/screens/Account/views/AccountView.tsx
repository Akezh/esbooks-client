import React, { FunctionComponent } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME } from '@constants';
import { withScrollView } from '@hocs';
import { getImage } from '@utils';
import { AccountViewStyles as styles } from '../styles';

interface IProps {
  data: {
    fullname: string,
    email: string,
    image: any,
  };
  editMode: boolean;
  removeImage: () => void;
}

const { colors } = THEME;
const { primary } = colors;

const AccountView: FunctionComponent<IProps> = props => {
  const { data, editMode, removeImage } = props;
  const { fullname, email, image } = data;

  const urlReg = /(https?:\/\/[^\s]+)/g;
  const isImageUrl = urlReg.test(image);

  const renderImage = (): JSX.Element => {
    return (
      <View style={styles.imageWrapper}>
        <Image
          source={isImageUrl ? { uri: image } : image}
          style={styles.image}
        />

        {editMode && (
          <TouchableRipple onPress={removeImage} style={styles.imageIconRemove}>
            <Icon color='#FFF' name='close' size={24} />
          </TouchableRipple>
        )}
      </View>
    );
  };

  const renderBtns = (): JSX.Element => {
    return (
      <View style={styles.cameraBtnsWrapper}>
        <TouchableRipple
          style={[styles.cameraBtnWrapper, styles.cameraBtnWrapperMargin]}
        >
          <View style={styles.cameraBtn}>
            <Text style={styles.cameraBtnText}>From gallery</Text>
            <Icon color='#FFF' name='attachment' size={24} />
          </View>
        </TouchableRipple>

        <TouchableRipple
          style={[styles.cameraBtnWrapper, styles.cameraBtnWrapperMargin]}
        >
          <View style={styles.cameraBtn}>
            <Text style={styles.cameraBtnText}>Take photo</Text>
            <Icon color='#FFF' name='camera-outline' size={24} />
          </View>
        </TouchableRipple>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {!editMode && (
          <Image source={getImage(image, 'user')} style={styles.image} />
        )}

        {editMode && isImageUrl && renderImage()}
        {editMode && image.uri && renderImage()}

        {editMode && !isImageUrl && !image.uri && renderBtns()}

        <Text style={styles.fullname}>{fullname}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <StatusBar backgroundColor={primary} barStyle='light-content' />
    </View>
  );
};

export default withScrollView(AccountView);
