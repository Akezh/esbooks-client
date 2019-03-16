import React, { FunctionComponent } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME } from '@constants';
import { withScrollView } from '@hocs';
import { getImage } from '@utils';
import { AccountViewStyles as styles } from '../styles';
import { CustomTextInput } from '@components';

interface IProps {
  data: {
    fullname: string,
    email: string,
    image: any,
  };
  editMode: boolean;
  newData: any;
  onChangeFullname: (value: string) => void;
  openCamera: () => void;
  openPicker: () => void;
}

const { colors } = THEME;
const { primary } = colors;

const AccountView: FunctionComponent<IProps> = props => {
  const { editMode, newData, onChangeFullname, openCamera, openPicker } = props;
  const { fullname, email, image } = newData;

  const urlReg = /(https?:\/\/[^\s]+)/g;
  const isImageUrl = urlReg.test(image);

  const renderImage = (): JSX.Element => {
    return (
      <View style={styles.imageWrapper}>
        <Image
          source={
            isImageUrl
              ? { uri: image }
              : image.uri
              ? image
              : getImage(image, 'user')
          }
          style={styles.image}
        />
      </View>
    );
  };

  const renderBtns = (): JSX.Element => {
    return (
      <View style={styles.cameraBtnsWrapper}>
        <TouchableRipple
          onPress={openPicker}
          style={[styles.cameraBtnWrapper, styles.cameraBtnWrapperMargin]}
        >
          <View style={styles.cameraBtn}>
            <Text style={styles.cameraBtnText}>From gallery</Text>
            <Icon color='#FFF' name='attachment' size={24} />
          </View>
        </TouchableRipple>

        <TouchableRipple
          onPress={openCamera}
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
        {renderImage()}

        {editMode && renderBtns()}

        {!editMode && <Text style={styles.fullname}>{fullname}</Text>}
        {editMode && (
          <CustomTextInput
            mode='outlined'
            value={fullname}
            style={styles.customTextInput}
            onChangeText={onChangeFullname}
          />
        )}

        <Text style={styles.email}>{email}</Text>
      </View>
      <StatusBar backgroundColor={primary} barStyle='light-content' />
    </View>
  );
};

export default withScrollView(AccountView);
