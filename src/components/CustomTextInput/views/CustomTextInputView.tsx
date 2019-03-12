import React, { FunctionComponent } from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { flatStyles } from './FlatTextInput.styles';
import { outlinedStyles } from './OutlinedTextInput.styles';

interface IProps {
  customTextInputStyle?: object;
  error: IError;
  getPhonePlaceholder: () => string;
  isCorrect?: boolean;
  isFocus: boolean;
  isPhoneType: boolean;
  isSecureText: boolean;
  isSecureType: boolean;
  keyboardType: KeyboardTypeOptions;
  label?: string;
  labelAnimatedStyles: {
    labelLayout: any,
    labelSize: any,
  };
  labelWidth: number;
  leftIcon?: { type: string; data: string & ImageSourcePropType };
  maxLength?: number;
  mode: string;
  multiline?: boolean;
  onBlur: () => void;
  onChangeText: (value: string) => void;
  onChangeTextSecurity: () => void;
  onEndEditing?: (event: { nativeEvent: { text: string } }) => void;
  onFocus: () => void;
  onPress?: () => any;
  placeholder?: string;
  rightButton?: JSX.Element;
  setLabelWidth: (event: any) => void;
  setTextInputPaddingRight: (props: any) => void;
  text: string;
  textInputInnerOffsetsStyle: object;
  value?: string;
}

interface IError {
  status: boolean;
  message?: string;
}

const CustomTextInputView: FunctionComponent<IProps> = (props): JSX.Element => {
  const {
    customTextInputStyle,
    error,
    getPhonePlaceholder,
    isPhoneType,
    isSecureText,
    isSecureType,
    keyboardType,
    label,
    labelAnimatedStyles,
    labelWidth,
    leftIcon,
    maxLength,
    mode,
    multiline,
    onBlur,
    onChangeText,
    onEndEditing,
    onFocus,
    onPress,
    placeholder,
    rightButton,
    setLabelWidth,
    setTextInputPaddingRight,
    text,
    textInputInnerOffsetsStyle,
    value,
  } = props;

  const customTextInput = (): JSX.Element => {
    const styles = mode === 'flat'
      ? flatStyles
      : outlinedStyles;

    const { labelLayout, labelSize } = labelAnimatedStyles;

    const errorTextInputStyle = error.status
      ? styles.errorTextInput
      : null;

    const errorStyle = error.status
      ? styles.error
      : null;

    return (
      <View style={[styles.container, customTextInputStyle]}>
        <Animated.Text
          numberOfLines={1}
          style={[
            styles.label,
            labelLayout.getLayout(),
            {
              fontSize: labelSize,
              width: labelWidth,
            },
          ]}
        >
          {label}
        </Animated.Text>

        <TouchableOpacity
          style={[
            styles.textInputSection,
            errorTextInputStyle,
          ]}
          onPress={onPress && onPress}
          activeOpacity={onPress ? 0.2 : 1}
        >
          {leftIcon && leftIcon.type === 'icon'
            ? <Icon
              name={leftIcon.data}
              size={24}
              style={[
                styles.icon,
                errorStyle,
              ]}
            />
            : leftIcon && leftIcon.type === 'image'
              ? <Image source={leftIcon.data} style={styles.icon} />
              : null}
          {isPhoneType && <Text style={styles.phonePlaceholder}>
            {getPhonePlaceholder()}
          </Text>}

          <TextInput
            keyboardType={keyboardType}
            maxLength={maxLength}
            multiline={multiline}
            onBlur={onBlur}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing ? onEndEditing : undefined}
            onFocus={onFocus}
            onLayout={setLabelWidth}
            placeholder={placeholder}
            secureTextEntry={isSecureText && isSecureType}
            style={[textInputInnerOffsetsStyle,
              styles.textInput,
              errorTextInputStyle]}
            underlineColorAndroid='transparent'
            value={typeof value !== 'undefined' ? value : text}
            editable={!onPress}
          />

          <View
            style={styles.additionalElementsContainer}
            onLayout={setTextInputPaddingRight}
          >
            <View style={styles.additionalElementsSection}>
              {rightButton && <View style={styles.additionalBtnWrapper}>
                {rightButton}
              </View>}
            </View>
          </View>
        </TouchableOpacity>

        {error.status && error.message
          && <Text style={styles.errorMessage}>
            {error.message}
          </Text>}
      </View>
    );
  };

  return customTextInput();
};

export default CustomTextInputView;
