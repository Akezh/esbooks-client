import React, { FunctionComponent } from 'react';
import {
  ImageSourcePropType,
  KeyboardTypeOptions,
} from 'react-native';
import { CustomTextInputContainer } from './containers';

interface IProps {
  error?: {
    status: boolean,
    message?: string,
  };
  isCorrect?: boolean;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
  leftIcon?: { type: string; data: string & ImageSourcePropType };
  mask?: string;
  maxLength?: number;
  mode: 'flat' | 'outlined';
  multiline?: boolean;
  onBlur?: () => void;
  onChangeText?: (value: string) => void;
  onEndEditing?: (event: { nativeEvent: { text: string } }) => void;
  onPress?: () => any;
  placeholder?: string;
  rightButton?: JSX.Element;
  style?: object;
  type?: string;
  value?: string;
}

const CustomTextInput: FunctionComponent<IProps> = (props): JSX.Element => {
  return <CustomTextInputContainer {...props} customTextInputStyle={props.style} />;
};

export default CustomTextInput;
