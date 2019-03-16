import React, { Component } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { THEME } from '@constants';
import { withScrollView } from '@hocs';
import { getImage } from '@utils';
import { AccountViewStyles as styles } from '../styles';
import { CustomTextInput } from '@components';

interface IProps {
  editMode: boolean;
  newData: any;
  onChangeFullname: (value: string) => void;
  openCamera: () => void;
  openPicker: () => void;
}

const { colors } = THEME;
const { primary } = colors;

class AccountView extends Component<IProps> {
  render() {
    const {
      editMode,
      newData,
      onChangeFullname,
    } = this.props;

    const { fullName, email } = newData;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {this.renderImage()}

          {editMode && this.renderBtns()}

          {!editMode && <Text style={styles.fullname}>{fullName}</Text>}
          {editMode && (
            <CustomTextInput
              mode='outlined'
              value={fullName}
              style={styles.customTextInput}
              onChangeText={onChangeFullname}
            />
          )}

          <Text style={styles.email}>{email}</Text>
        </View>
        <StatusBar backgroundColor={primary} barStyle='light-content' />
      </View>
    );
  }

  private renderImage = () => {
    const { newData } = this.props;
    const { avatar } = newData;

    const urlReg = /(https?:\/\/[^\s]+)/g;
    const isAvatarUrl = urlReg.test(avatar);

    return (
      <View style={styles.imageWrapper}>
        <Image
          source={
            isAvatarUrl
              ? { uri: avatar }
              : avatar && typeof avatar !== 'string' && avatar.uri
              ? { uri: avatar.uri }
              : typeof avatar === 'string'
              ? { uri: avatar }
              : getImage(avatar, 'user')
          }
          style={styles.image}
        />
      </View>
    );
  }

  private renderBtns = (): JSX.Element => {
    const {
      openCamera,
      openPicker,
    } = this.props;

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
  }
}

export default withScrollView(AccountView);
