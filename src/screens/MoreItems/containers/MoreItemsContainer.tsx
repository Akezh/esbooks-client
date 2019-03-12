import React, { Component } from 'react';
import { Alert, BackHandler, View, Text } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MoreItemsView } from '../views';
import { MoreItemsContainerStyles as styles } from '../styles';

interface IProps {
  data: string[];
  navigation: NavigationScreenProp<NavigationState>;
  onGoBack: (items: string[]) => void;
  selectedItems: string[];
  type: string;
}

interface IState {
  formattedData: string[];
  selectedItems: string[];
  value: string;
}

class MoreItemsContainer extends Component<IProps, IState> {
  public _didFocusSubscription: any;
  public _willBlurSubscription: any;

  constructor(props: IProps) {
    super(props);

    const { data, selectedItems } = this.props;

    this.state = {
      formattedData: data.filter(item => this.matchCheck(item, '')),
      selectedItems,
      value: '',
    };

    this._didFocusSubscription = props.navigation.addListener('didFocus', _payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid),
    );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', _payload =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid),
    );
  }

  onBackButtonPressAndroid = (): boolean => {
    this.callAlert();
    return true;
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  render() {
    const { onGoBack, type } = this.props;
    const { formattedData, selectedItems } = this.state;

    return (
      <React.Fragment>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeftPart}>
            <Icon
              color='#FFF'
              name='arrow-left'
              onPress={this.callAlert}
              size={24}
              style={styles.icon}
            />
            <Text style={styles.title}>More {type.toLowerCase()}</Text>
          </View>
          <Icon
            color='#FFF'
            name='content-save-outline'
            size={24}
            onPress={() => onGoBack(selectedItems)}
            style={styles.icon}
          />
        </View>

        <MoreItemsView
          formattedData={formattedData}
          onChangeText={this.onChangeText}
          removeItem={this.removeItem}
          selectItem={this.selectItem}
          selectedItems={selectedItems}
        />
      </React.Fragment>
    );
  }

  private callAlert = (): void => {
    const {
      onGoBack,
      type,
    } = this.props;

    Alert.alert(
      '',
      `Discard ${type}?`,
      [
        { text: 'KEEP' },
        {
          text: 'DISCARD',
          onPress: () => onGoBack([]),
          style: 'cancel',
        },
      ],
    );
  }

  private onChangeText = (value: string): void => {
    const { data } = this.props;

    this.setState({
      formattedData: data.filter(item => this.matchCheck(item, value)),
      value,
    });
  }

  private matchCheck = (item: string, value: string, selectedItemsProps?: string[]): boolean => {
    const { selectedItems } = this.props;
    const newSelecetedItems = selectedItemsProps ? selectedItemsProps : selectedItems;

    return item.toLowerCase().indexOf(value.toLowerCase()) !== -1
      && !(newSelecetedItems.filter(selectedValuesItem => (
        selectedValuesItem.toLocaleLowerCase() === item.toLocaleLowerCase()
      )).length);
  }

  private removeItem = (value: string): void => {
    const { data } = this.props;
    const { selectedItems } = this.state;
    const newSelectedItems = [...selectedItems].filter(item => item !== value);

    this.setState({
      selectedItems: newSelectedItems,
      formattedData: data.filter(item => this.matchCheck(item, this.state.value, newSelectedItems)),
    });
  }

  private selectItem = (value: string): void => {
    const { data } = this.props;
    const { selectedItems } = this.state;
    const newSelectedItems = [...selectedItems];
    // @ts-ignore
    newSelectedItems.push(value);

    this.setState({
      selectedItems: newSelectedItems,
      formattedData: data.filter(item => this.matchCheck(item, this.state.value, newSelectedItems)),
    });
  }
}

export default MoreItemsContainer;
