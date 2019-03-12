import React, { FunctionComponent } from 'react';
import { Image, View, Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { styles } from './SignInButton.styles';

const SignInButton:
  FunctionComponent<any> = (props): JSX.Element => {
    const { onPress, source, title, btnStyles, textStyles } = props;
    
    return (
      <TouchableRipple
        rippleColor='rgba(0, 0, 0, .14)'
        style={[styles.btnWrapper, btnStyles]}
        onPress={onPress}
      >
        <View style={styles.btn}>
          <Image
            source={source}
            style={styles.btnIcon}
          />
          <Text style={[styles.btnText, textStyles]}>
            {title}
          </Text>
        </View>
      </TouchableRipple>
    );
  };
  
export default SignInButton;