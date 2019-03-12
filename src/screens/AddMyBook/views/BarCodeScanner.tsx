import React, { FunctionComponent } from 'react';
import { RNCamera } from 'react-native-camera';
import { BarCodeScannerStyles as styles } from '../styles';

interface IProps {
  setISBNCode: (ISBNCode: string) => void;
}

const BarCodeScanner: FunctionComponent<IProps> = (props): JSX.Element => {
  const { setISBNCode } = props;

  const detectISBNCode = ({ barcodes }) => {
    setISBNCode(barcodes[0].data);
  };

  return (
    <RNCamera
      flashMode={RNCamera.Constants.FlashMode.on}
      onGoogleVisionBarcodesDetected={detectISBNCode}
      permissionDialogMessage={'We need your permission to use your camera phone'}
      permissionDialogTitle={'Permission to use camera'}
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
    />
  );
};

export default BarCodeScanner;