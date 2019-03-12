import React, { FunctionComponent } from 'react';
import { FlatList, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { CustomTextInput, RemovableList } from '@components';
import {
  withKeyboardAvoidingView,
  withScrollView,
} from '@hocs';
import { MoreItemsViewStyles as styles } from '../styles';

interface IProps {
  formattedData: string[];
  onChangeText: (value: string) => void;
  removeItem: (value: string) => void;
  selectItem: (value: string) => void;
  selectedItems: string[];
}

const MoreItemsView: FunctionComponent<IProps> = (props): JSX.Element => {
  const {
    formattedData,
    onChangeText,
    removeItem,
    selectItem,
    selectedItems,
  } = props;

  const renderItem = ({ item }): JSX.Element => {
    return (
      <TouchableRipple
        onPress={() => selectItem(item)}
        style={styles.moreItem}
      >
        <Text style={styles.moreItemText}>{item}</Text>
      </TouchableRipple>
    );
  };

  const keyExtractor = (_item: string, index: number): string => index.toString();

  return (
    <View>
      <CustomTextInput
        mode='outlined'
        onChangeText={onChangeText}
        placeholder='Start typing'
        style={styles.textInput}
      />

      <View style={styles.RemovableList}>
        <RemovableList
          data={selectedItems}
          removeItem={removeItem}
        />
      </View>

      <FlatList
        data={formattedData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default withKeyboardAvoidingView(withScrollView(MoreItemsView, 'handled'));
