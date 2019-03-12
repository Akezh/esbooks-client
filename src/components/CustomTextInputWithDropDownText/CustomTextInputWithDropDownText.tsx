import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomTextInput } from '@components';
import { styles } from './CustomTextInputWithDropDownText.styles';

interface IProps {
  data: string[];
  selectItem: (value: string) => void;
  selectedValues: string[];
  srollToDropDownTextOfTI: (value: number) => void;
  style: any;
}

interface IState {
  formattedData: string[];
  value: string;
}

class CustomTextInputWithDropDownText extends Component<IProps, IState> {
  public isOnce: boolean = false;

  public state = {
    formattedData: [],
    value: '',
  };

  public render() {
    const { formattedData, value } = this.state;
    const { style } = this.props;

    return (
      <View style={styles.container}>
        <CustomTextInput
          mode='outlined'
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          placeholder='Start typing'
          rightButton={this.renderChevronDownIcon()}
          style={style}
          value={value}
        />
        {formattedData.length
          ? <View style={styles.dropDownTextContainer}>
            <View style={styles.dropDownTextSection}>
              {formattedData.map(this.renderItem)}
            </View>
          </View>
          : undefined}
      </View>
    );
  }

  private onBlur = (): void => {
    this.setState({
      formattedData: [],
    });
  }

  private onChangeText = (value: string): void => {
    const { data, srollToDropDownTextOfTI } = this.props;

    let counter = 0;

    if (value) {
      this.setState({
        formattedData: data.filter(item => {
          if (counter < 5) {
            if (this.matchCheck(item, value)) {
              counter++;
              return true;
            }
            return false;
          }
          return false;
        }),
        value,
      });

      if (!this.isOnce) {
        srollToDropDownTextOfTI(220);
      }
      this.isOnce = true;
    } else {
      this.setState({
        formattedData: [],
        value,
      });
    }
  }

  private matchCheck = (item: string, value: string): boolean => {
    const { selectedValues } = this.props;

    return item.toLowerCase().indexOf(value.toLowerCase()) !== -1
      && !(selectedValues.filter(selectedValuesItem => (
        selectedValuesItem.toLocaleLowerCase() === item.toLocaleLowerCase()
      )).length);
  }

  private renderChevronDownIcon = (): JSX.Element => {
    return (
      <Icon
        color='#A8B6C8'
        name='chevron-down'
        size={24}
      />
    );
  }

  private renderItem = (item: string, index: number): JSX.Element => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.onPressItem(item)}
        style={styles.dropDownTextItem}
      >
        <Text style={styles.dropDownText}>{item}</Text>
      </TouchableOpacity>
    );
  }

  private onPressItem = (item: string) => {
    const { selectItem } = this.props;

    this.setState({
      formattedData: [],
      value: '',
    });

    selectItem(item);
  }
}
export default CustomTextInputWithDropDownText;