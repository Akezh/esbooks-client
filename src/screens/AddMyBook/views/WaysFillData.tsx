import React, { FunctionComponent } from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { CustomTextInput } from '@components';
import { WaysFillDataStyles as styles } from '../styles';

interface IProps {
  hide: () => void;
  isWaysFillDataVisible: boolean;
  openScanner: () => void;
  setISBNCode: (ISBNCode: string) => void;
}

const WaysFillData: FunctionComponent<IProps> = (props): JSX.Element => {
  let ISBNCode: string = '';

  const {
    hide,
    isWaysFillDataVisible,
    openScanner,
    setISBNCode,
  } = props;

  const onChangeText = (value: string): void => {
    ISBNCode = value;
  };

  return (
    <Modal
      animationType='fade'
      onRequestClose={hide}
      transparent={true}
      visible={isWaysFillDataVisible}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={hide}
        style={styles.container}
      >
        <TouchableWithoutFeedback>
          <View style={styles.section}>
            <Text style={styles.title}>
              How do you want to fill in the data?
            </Text>

            <Text style={styles.text}>
              1) Automatically (ISBN code scanner)
            </Text>

            <TouchableRipple
              onPress={openScanner}
              style={styles.btn}
            >
              <Text style={styles.btnText}>OPEN SCANNER</Text>
            </TouchableRipple>

            <Text style={styles.text}>
              2) Automatically (Typing ISBN code)
            </Text>

            <CustomTextInput
              mode='outlined'
              onChangeText={onChangeText}
              placeholder='Typing ISBN code'
              style={styles.textInput}
            />

            <TouchableRipple
              onPress={() => setISBNCode(ISBNCode)}
              style={styles.btn}
            >
              <Text style={styles.btnText}>CONTINUE</Text>
            </TouchableRipple>

            <View style={styles.btnWrapper}>
              <TouchableRipple
                onPress={hide}
                style={[styles.btn, styles.manuallyBtn]}
              >
                <Text style={styles.btnText}>MANUALLY</Text>
              </TouchableRipple>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default WaysFillData;