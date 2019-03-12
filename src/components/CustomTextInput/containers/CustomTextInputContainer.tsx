import React, { Component } from 'react';
import {
  Animated,
  ImageSourcePropType,
  KeyboardTypeOptions,
} from 'react-native';
import { CustomTextInputView } from '../views';

interface IProps {
  customTextInputStyle?: object;
  error?: IError;
  isCorrect?: boolean;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
  leftIcon?: ILeftIcon;
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
  type?: string;
  value?: string;
}

interface ILeftIcon {
  type: string;
  data: string & ImageSourcePropType;
}

interface IState {
  inputPaddingRight: number;
  isFocus: boolean;
  isSecureText: boolean;
  labelLayout: any;
  labelSize: any;
  labelWidth: number;
  text: string;
}

interface IError {
  status: boolean;
  message?: string;
}

const BLUR_ANIMATION_DURATION = 180;
const FOCUS_ANIMATION_DURATION = 150;

const FLAT = {
  MAXIMIZED_LABEL_SIZE: 16,
  MAXIMIZED_LABEL_X_OFFSET: 0,
  MAXIMIZED_LABEL_Y_OFFSET: 14,
  MINIMIZED_LABEL_SIZE: 11,
  MINIMIZED_LABEL_X_OFFSET: 0,
  MINIMIZED_LABEL_Y_OFFSET: -12,
};

const OUTLINED = {
  MAXIMIZED_LABEL_SIZE: 16,
  MAXIMIZED_LABEL_X_OFFSET: 20,
  MAXIMIZED_LABEL_Y_OFFSET: 18,
  MINIMIZED_LABEL_SIZE: 11,
  MINIMIZED_LABEL_X_OFFSET: 0,
  MINIMIZED_LABEL_Y_OFFSET: -16,
};

const MODES = {
  FLAT,
  OUTLINED,
};

const getTextInputPaddingLeftWithIcon = (MODE: string): number => {
  return MODES[MODE].MAXIMIZED_LABEL_X_OFFSET + 30;
};

const DEFAULT_VALUE = {
  unchangeablePhonePart: '+7',
  phonePlaceholder: '+7 (___) ___ __ __',
};

const getLabelXOffset = (mode: string, type: string | undefined, leftIcon: ILeftIcon | undefined): number => {
  const MODE = getFormattedMode(mode);

  return isPhoneType(type)
    ? MODES[MODE].MINIMIZED_LABEL_X_OFFSET
    : leftIcon
      ? getTextInputPaddingLeftWithIcon(MODE)
      : MODES[MODE].MAXIMIZED_LABEL_X_OFFSET;
};

const getLabelYOffset = (mode: string, type: string | undefined): number => {
  const MODE = getFormattedMode(mode);

  return isPhoneType(type)
    ? MODES[MODE].MINIMIZED_LABEL_Y_OFFSET
    : MODES[MODE].MAXIMIZED_LABEL_Y_OFFSET;
};

const getLabelSize = (mode: string, type: string | undefined): number => {
  const MODE = getFormattedMode(mode);

  return isPhoneType(type)
    ? MODES[MODE].MINIMIZED_LABEL_SIZE
    : MODES[MODE].MAXIMIZED_LABEL_SIZE;
};

const getFormattedMode = (mode: string): string => {
  return mode === 'flat'
    ? 'FLAT'
    : 'OUTLINED';
};

const isPhoneType = (type: string | undefined): boolean => {
  return type === 'Phone';
};

const isSecureType = (type: string | undefined): boolean => {
  return type === 'Secure';
};

const getDefaultValue = (type: string | undefined, mask: string | undefined): string => {
  const defaultValue = {
    'Phone': getUnchangeablePhonePart(mask),
  };

  return type && defaultValue[type] ? defaultValue[type] : '';
};

const getUnchangeablePhonePart = (mask: string | undefined): string => {
  return mask ? mask.slice(0, 4) : DEFAULT_VALUE.phonePlaceholder.slice(0, 4);
};

class CustomTextInputContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const {
      leftIcon,
      mask,
      mode,
      type,
    } = this.props;

    this.state = {
      inputPaddingRight: 6,
      isFocus: false,
      isSecureText: true,
      labelLayout: new Animated.ValueXY({
        x: getLabelXOffset(mode, type, leftIcon),
        y: getLabelYOffset(mode, type),
      }),
      labelSize: new Animated.Value(getLabelSize(mode, type)),
      labelWidth: 200,
      text: getDefaultValue(type, mask),
    };
  }

  public render() {
    const {
      customTextInputStyle,
      error,
      onPress,
      label,
      leftIcon,
      mode,
      multiline,
      onEndEditing,
      placeholder,
      rightButton,
      type,
      value,
    } = this.props;
    const {
      inputPaddingRight,
      isFocus,
      isSecureText,
      labelLayout,
      labelSize,
      labelWidth,
      text,
    } = this.state;

    const textInputInnerOffsetsStyle = {
      paddingRight: inputPaddingRight,
      paddingLeft: getLabelXOffset(mode, type, leftIcon),
    };

    const labelAnimatedStyles = {
      labelLayout,
      labelSize,
    };

    const isError = this.isError();

    const safeError: any = {
      status: isError,
      // @ts-ignore
      message: isError && error.message,
    };
    const isPassedValidation = this.checkForCorrectness();

    return <CustomTextInputView
      customTextInputStyle={customTextInputStyle}
      error={safeError}
      getPhonePlaceholder={this.getPhonePlaceholder}
      isCorrect={isPassedValidation}
      isFocus={isFocus}
      isPhoneType={isPhoneType(type)}
      isSecureText={isSecureText}
      isSecureType={isSecureType(type)}
      keyboardType={this.getKeyboardType()}
      label={label}
      labelAnimatedStyles={labelAnimatedStyles}
      labelWidth={labelWidth}
      leftIcon={leftIcon}
      maxLength={this.getMaxLength()}
      mode={mode}
      multiline={multiline}
      onBlur={this.onBlur}
      onChangeText={this.onChangeText}
      onChangeTextSecurity={this.onChangeTextSecurity}
      onEndEditing={onEndEditing}
      onFocus={this.onFocus}
      onPress={onPress}
      placeholder={placeholder}
      rightButton={rightButton}
      setLabelWidth={this.setLabelWidth}
      setTextInputPaddingRight={this.setTextInputPaddingRight}
      text={text}
      textInputInnerOffsetsStyle={textInputInnerOffsetsStyle}
      value={value}
    />;
  }

  private isError = (): boolean => {
    const { error } = this.props;
    const { isFocus } = this.state;

    return error
      ? error.status && !isFocus
      : false;
  }

  private checkForCorrectness = (): boolean | undefined => {
    const { isCorrect, type } = this.props;
    const { text } = this.state;

    return isCorrect && (isPhoneType(type)
      ? text.length > 4
      : !!text.length);
  }

  private getPhonePlaceholder = (): string => {
    const { text } = this.state;
    const placeholder = DEFAULT_VALUE.phonePlaceholder;
    const newPlaceholder = placeholder.slice(text.length, placeholder.length);

    return text + newPlaceholder;
  }

  private getKeyboardType = (): KeyboardTypeOptions => {
    const { type, keyboardType } = this.props;

    return keyboardType
      ? keyboardType
      : isPhoneType(type)
        ? 'phone-pad'
        : 'default';
  }
  private getMaxLength = (): number | undefined => {
    const { mask, maxLength } = this.props;

    return maxLength
      ? maxLength
      : mask
        ? mask.length
        : undefined;
  }

  private onBlur = (): void => {
    const { type, onBlur } = this.props;
    const { text } = this.state;

    onBlur && onBlur();

    this.setState({
      isFocus: false,
    });

    if (!text) {
      if (!isPhoneType(type)) {
        this.moveLabelDown();
      }
    }
  }

  private moveLabelDown = (): void => {
    const { leftIcon, mode, type } = this.props;
    const { labelLayout, labelSize } = this.state;

    const MODE = getFormattedMode(mode);

    Animated.parallel([
      Animated.timing(
        labelSize,
        {
          toValue: MODES[MODE].MAXIMIZED_LABEL_SIZE,
          duration: BLUR_ANIMATION_DURATION,
        },
      ),
      Animated.timing(
        labelLayout,
        {
          toValue: {
            x: getLabelXOffset(mode, type, leftIcon),
            y: MODES[MODE].MAXIMIZED_LABEL_Y_OFFSET,
          },
          duration: BLUR_ANIMATION_DURATION,
        },
      ),
    ]).start();
  }

  private onFocus = (): void => {
    const { type } = this.props;

    this.setState({
      isFocus: true,
    });

    if (!isPhoneType(type)) {
      this.moveLabelUp();
    }
  }

  private moveLabelUp = (): void => {
    const { mode } = this.props;
    const { labelLayout, labelSize } = this.state;

    const MODE = getFormattedMode(mode);

    Animated.parallel([
      Animated.timing(
        labelSize,
        {
          toValue: MODES[MODE].MINIMIZED_LABEL_SIZE,
          duration: FOCUS_ANIMATION_DURATION,
        },
      ),
      Animated.timing(
        labelLayout,
        {
          toValue: {
            x: MODES[MODE].MINIMIZED_LABEL_X_OFFSET,
            y: MODES[MODE].MINIMIZED_LABEL_Y_OFFSET,
          },
          duration: FOCUS_ANIMATION_DURATION,
        },
      ),
    ]).start();
  }

  private onChangeText = (value: string): void => {
    const { mask } = this.props;
    const { text } = this.state;

    if (mask) {
      if (value.slice(0, 2) === DEFAULT_VALUE.unchangeablePhonePart) {
        if (text.length > value.length) {
          this.setState({
            text: this.processValue(value, mask, 'delete'),
          }, () => this.callBackOnChangeText());
        } else {
          this.setState({
            text: this.processValue(value, mask, 'add'),
          }, () => this.callBackOnChangeText());
        }
      }
    } else {
      this.setState({
        text: value,
      }, () => this.callBackOnChangeText());
    }
  }

  private processValue = (value: string, mask: string, action: 'add' | 'delete'): string => {
    value = value.replace(/\D+/g, '');
    let result = '';
    let currentMaskIndex = 0;

    for (const itemValue of value.split('')) {
      if (this.isSpecialMaskChar(mask[currentMaskIndex])) {

        for (let i = currentMaskIndex; i < mask.length; i++) {
          if (this.isSpecialMaskChar(mask[i])) {
            result += mask[i];
            currentMaskIndex++;
          } else {
            break;
          }
        }
      }
      result += itemValue;
      currentMaskIndex++;

      if (action === 'add') {
        for (let i = currentMaskIndex; i < mask.length; i++) {
          if (this.isSpecialMaskChar(mask[i])) {
            result += mask[i];
            currentMaskIndex++;
          } else {
            break;
          }
        }
      }
    }

    return result;
  }

  private isSpecialMaskChar = (currentMaskChar: string): boolean => {
    return this.isNotNumber(currentMaskChar);
  }

  private isNotNumber = (value: string): boolean => {
    const regex = /\D/;

    return regex.test(value);
  }

  private callBackOnChangeText = () => {
    const { onChangeText } = this.props;
    const { text } = this.state;

    if (this.isNotUdefinedCallBackChangeText()) {
      // @ts-ignore
      onChangeText(text);
    }
  }

  private isNotUdefinedCallBackChangeText = (): boolean => {
    const { onChangeText } = this.props;

    return onChangeText ? true : false;
  }

  private onChangeTextSecurity = (): void => {
    this.setState(prevState => ({
      isSecureText: !prevState.isSecureText,
    }));
  }

  private setLabelWidth = ({ nativeEvent }): void => {
    const { leftIcon, mode, type } = this.props;
    const { inputPaddingRight } = this.state;

    const paddingRight = getLabelXOffset(mode, type, leftIcon) + inputPaddingRight;

    this.setState({
      labelWidth: nativeEvent.layout.width
        - paddingRight,
    });
  }

  private setTextInputPaddingRight = ({ nativeEvent }): void => {
    const textInputAdditionalPaddingRight = 2;

    this.setState({
      inputPaddingRight: nativeEvent.layout.width
        + textInputAdditionalPaddingRight,
    });
  }
}

export default CustomTextInputContainer;