import React, { Component } from 'react';
import {
  Alert,
  BackHandler,
  KeyboardAvoidingView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux';
import { mapActionsToProps, mapStateToProps } from './AddAndChangeMyBookContainerMaps';
import AddAndChangeMyBookView from '../views';
import { AddAndChangeMyBookContainerStyles as styles } from '../styles';
import BarCodeScanner from '../views/BarCodeScanner';
import { Loading } from '@components';
import WaysFillData from '../views/WaysFillData';

interface IProps {
  cleanError: () => void;
  data: any;
  error: null | string;
  getBookData: (ISBNCode: string) => void;
  isLoading: boolean;
  navigation: NavigationScreenProp<NavigationState>;
  onGoBack: () => void;
  onMoreItems: (type: string,
    data: string[],
    selectedItems: string[],
    setItems: (type: string, items: string[]) => void,
  ) => void;

  dataBookThatWeChange: any;
  screenType: 'Add' | 'Change';
}

interface IState {
  ISBNCode: string;
  isBarCodeScannerVisible: boolean;
  isDateTimePickerVisible: boolean;
  isWaysFillDataVisible: boolean;

  authors: Array<{
    id: number,
    fullName: string,
    error: IError,
  }>;
  categories: string[];
  date: string;
  description: string;
  image: any;
  publisher: string;
  subtitle: string;
  tags: string[];
  title: string;

  categoriesError: IError;
  dateError: IError;
  tagsError: IError;
  titleError: IError;
}

interface IError {
  status: boolean;
  message?: string;
}

class AddAndChangeMyBookContainer extends Component<IProps, IState>{
  public _didFocusSubscription: any;
  public _willBlurSubscription: any;
  public currentScrollPosition: number = 0;
  public scrollView: any;

  constructor(props: IProps) {
    super(props);
    const { dataBookThatWeChange, navigation, screenType } = props;
    const isChangeTypeScreen = screenType === 'Change' ? true : false;
    const {
      authors,
      categories,
      description,
      image,
      published,
      publisher,
      subtitle,
      title,
    } = dataBookThatWeChange;

    this.state = {
      ISBNCode: '',
      isBarCodeScannerVisible: false,
      isDateTimePickerVisible: false,
      isWaysFillDataVisible: false,

      authors: isChangeTypeScreen ? authors.map((item: string, index: number) => ({ id: index, fullName: item, error: { status: false } })) : [{ id: 0, fullName: '', error: { status: false } }],
      categories: isChangeTypeScreen ? categories : [],
      date: isChangeTypeScreen ? published : '',
      description: isChangeTypeScreen ? description : '',
      image: isChangeTypeScreen ? image : {},
      publisher: isChangeTypeScreen ? publisher : '',
      subtitle: isChangeTypeScreen ? subtitle : '',
      tags: [],
      title: isChangeTypeScreen ? title : '',

      titleError: { status: false },
      dateError: { status: false },
      categoriesError: { status: false },
      tagsError: { status: false },
    };

    this._didFocusSubscription = navigation.addListener('didFocus', _payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid),
    );
  }

  componentWillReceiveProps(nextProps) {
    const {
      cleanError,
      data,
      error,
    } = nextProps;

    if (error) {
      Alert.alert(
        '',
        error,
        [
          {
            text: 'TRY AGAIN',
            onPress: () => this.showWaysFillData(),
          },
          {
            text: 'CLOSE',
            style: 'cancel',
          },
        ],
      );
      cleanError();
    }

    if (data) {
      this.setData(data);
    }
  }

  public setData = (data: any): void => {
    const {
      authors,
      categories,
      date,
      description,
      image,
      publisher,
      subtitle,
      tags,
      title,
    } = data;

    this.setState(prevState => ({
      authors: authors ? authors.map((item: string, index: number) => ({ id: index, fullName: item, error: { status: false } })) : prevState.authors,
      categories: categories ? categories : prevState.categories,
      date: date ? date : prevState.date,
      description: description ? description : prevState.description,
      image: image ? image : prevState.image,
      publisher: publisher ? publisher : prevState.publisher,
      subtitle: subtitle ? subtitle : prevState.subtitle,
      tags: tags ? tags : prevState.tags,
      title: title ? title : prevState.title,

      titleError: { status: false },
      dateError: { status: false },
      categoriesError: { status: false },
      tagsError: { status: false },
    }));
  }

  componentDidMount() {
    const { navigation } = this.props;

    this._willBlurSubscription = navigation.addListener('willBlur', _payload =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid),
    );
  }

  onBackButtonPressAndroid = (): boolean => {
    const { isBarCodeScannerVisible } = this.state;

    if (isBarCodeScannerVisible) {
      this.setState({
        isBarCodeScannerVisible: false,
      });
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  public render() {
    const {
      isLoading,
      onGoBack,
      onMoreItems,
      screenType,
    } = this.props;

    const {
      isBarCodeScannerVisible,
      isDateTimePickerVisible,
      isWaysFillDataVisible,

      authors,
      categories,
      date,
      description,
      image,
      publisher,
      subtitle,
      tags,
      title,

      categoriesError,
      dateError,
      tagsError,
      titleError,
    } = this.state;

    return (
      <React.Fragment>
        {!isBarCodeScannerVisible
          && <View style={styles.headerContainer}>
            <View style={styles.headerLeftPart}>
              <Icon
                color='#FFF'
                name='arrow-left'
                onPress={onGoBack}
                size={24}
                style={styles.icon}
              />
              <Text style={styles.title}>{screenType} my book</Text>
            </View>
            <Icon
              color='#FFF'
              name='barcode-scan'
              onPress={this.showWaysFillData}
              size={24}
              style={styles.icon}
            />
          </View>}

        {!isBarCodeScannerVisible
          && <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={-500}
            style={styles.container}
          >
            <ScrollView
              keyboardShouldPersistTaps='handled'
              onScroll={this.handleScroll}
              ref={this.setRefScrollView}
            >
              <AddAndChangeMyBookView
                addAuthor={this.addAuthor}
                onMoreItems={onMoreItems}
                openCamera={this.openCamera}
                openPicker={this.openPicker}
                removeAuthor={this.removeAuthor}
                removeCategoriesItem={this.removeCategoriesItem}
                removeImage={this.removeImage}
                removeTagsItem={this.removeTagsItem}
                selectCategory={this.selectCategory}
                selectTag={this.selectTag}
                setItems={this.setItems}
                showDateTimePicker={this.showDateTimePicker}
                srollToDropDownTextOfTI={this.srollToDropDownTextOfTI}

                authors={authors}
                categories={categories}
                date={date}
                description={description}
                image={image}
                publisher={publisher}
                subtitle={subtitle}
                tags={tags}
                title={title}

                onChangeAuthor={this.onChangeAuthor}
                onChangeDescription={this.onChangeDescription}
                onChangePublisher={this.onChangePublisher}
                onChangeSubtitle={this.onChangeSubtitle}
                onChangeTitle={this.onChangeTitle}

                publish={this.publish}

                categoriesError={categoriesError}
                dateError={dateError}
                tagsError={tagsError}
                titleError={titleError}

                screenType={screenType}
                save={this.save}
              />
            </ScrollView>
          </KeyboardAvoidingView>}

        {isWaysFillDataVisible
          && <WaysFillData
            hide={this.hideWaysFillData}
            isWaysFillDataVisible={isWaysFillDataVisible}
            openScanner={this.openBarCodeScanner}
            setISBNCode={this.setISBNCode}
          />}

        {isBarCodeScannerVisible
          && <BarCodeScanner
            setISBNCode={this.setISBNCode}
          />}

        {isLoading
          && <Loading />}

        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onCancel={this.hideDateTimePicker}
          onConfirm={this.handleDatePicked}
        />
      </React.Fragment>
    );
  }

  private onChangeAuthor = (id: number, value: string): void => {
    const { authors } = this.state;
    const newAuthor = authors.map(item => {
      if (item.id === id) {
        item.fullName = value;
        return item;
      }
      return item;
    });

    this.setState({
      authors: newAuthor,
    });
  }

  private onChangeDescription = (value: string): void => {
    this.setState({
      description: value,
    });
  }

  private onChangePublisher = (value: string): void => {
    this.setState({
      publisher: value,
    });
  }

  private onChangeSubtitle = (value: string): void => {
    this.setState({
      subtitle: value,
    });
  }

  private onChangeTitle = (value: string): void => {
    this.setState({
      title: value,
      titleError: value ? { status: false } : { status: true, message: 'Fill this field' },
    });
  }

  private setISBNCode = (ISBNCode: string): void => {
    const { getBookData } = this.props;
    this.setState({
      ISBNCode,
      isBarCodeScannerVisible: false,
      isDateTimePickerVisible: false,
      isWaysFillDataVisible: false,
    });
    getBookData(ISBNCode);
  }

  private openBarCodeScanner = (): void => {
    this.hideWaysFillData();

    this.setState({
      isBarCodeScannerVisible: true,
    });
  }

  private setRefScrollView = (el: any): void => {
    this.scrollView = el;
  }

  private handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    this.currentScrollPosition = event.nativeEvent.contentOffset.y;
  }

  private srollToDropDownTextOfTI = (value: number): void => {
    if (this.currentScrollPosition > 200) {
      this.scrollView.scrollTo({
        x: 0,
        y: this.currentScrollPosition + value - 80,
        animated: true,
      });
    } else {
      this.scrollView.scrollTo({
        x: 0,
        y: this.currentScrollPosition + value,
        animated: true,
      });
    }
  }

  private addAuthor = (): void => {
    const { authors } = this.state;
    const newAuthor = [...authors];
    newAuthor.push({
      id: authors[authors.length - 1].id + 1,
      fullName: '',
      error: { status: false },
    });

    this.setState({
      authors: newAuthor,
    });
  }

  private openCamera = (): void => {
    ImagePicker.openCamera({
      width: 360,
      height: 540,
      cropping: true,
    }).then(image => {
      this.setState({
        image: {
          // @ts-ignore
          uri: image.path,
          // @ts-ignore
          width: image.width,
          // @ts-ignore
          height: image.height,
          // @ts-ignore
          mime: image.mime,
        },
      });
    }).catch();
  }

  private openPicker = (): void => {
    ImagePicker.openPicker({
      width: 360,
      height: 540,
      cropping: true,
    }).then(image => {
      this.setState({
        image: {
          // @ts-ignore
          uri: image.path,
          // @ts-ignore
          width: image.width,
          // @ts-ignore
          height: image.height,
          // @ts-ignore
          mime: image.mime,
        },
      });
    }).catch();
  }

  private removeAuthor = (id: number): void => {
    const { authors } = this.state;
    const newAuthor = [...authors].filter(item => item.id !== id);

    this.setState({
      authors: newAuthor,
    });
  }

  private removeCategoriesItem = (value: string): void => {
    const { categories } = this.state;
    const newCategories = [...categories].filter(item => item !== value);

    this.setState({
      categories: newCategories,
    });
  }

  private removeTagsItem = (value: string): void => {
    const { tags } = this.state;
    const newTags = [...tags].filter(item => item !== value);

    this.setState({
      tags: newTags,
    });
  }

  private removeImage = (): void => {
    this.setState({
      image: {},
    });
  }

  private selectCategory = (value: string): void => {
    const { categories } = this.state;
    const newCategories = [...categories];
    // @ts-ignore
    newCategories.push(value);

    this.setState({
      categories: newCategories,
      categoriesError: { status: false },
    });
  }

  private selectTag = (value: string): void => {
    const { tags } = this.state;
    const newTags = [...tags];
    // @ts-ignore
    newTags.push(value);

    this.setState({
      tags: newTags,
      tagsError: { status: false },
    });
  }

  private setItems = (type: string, items: string[]) => {
    if (type === 'tags') {
      this.setState({
        tags: items,
      });
    } else {
      this.setState({
        categories: items,
      });
    }
  }

  private showDateTimePicker = (): void => {
    this.setState({
      isDateTimePickerVisible: true,
    });
  }

  private showWaysFillData = (): void => {
    this.setState({
      isWaysFillDataVisible: true,
    });
  }

  private hideDateTimePicker = (): void => {
    this.setState({
      isDateTimePickerVisible: false,
    });
  }

  private hideWaysFillData = (): void => {
    this.setState({
      isWaysFillDataVisible: false,
    });
  }

  private handleDatePicked = (date: any): void => {
    this.setState({
      date,
      isDateTimePickerVisible: false,
    });
  }

  private save = (): void => {
    this.checkAllFields();
  }

  private publish = (): void => {
    this.checkAllFields();
  }

  private checkAllFields = () => {
    const { title, authors, date, categories, tags } = this.state;

    if (!title) {
      this.setState({
        titleError: { status: true, message: 'Fill this field' },
      });
    }

    authors.forEach(item => {
      if (!item.fullName) {
        const newAuthor = authors.map(i => {
          if (i.id === item.id) {
            i.error = { status: true, message: 'Fill this field' };
            return i;
          }
          return i;
        });

        this.setState({
          authors: newAuthor,
        });
      }
    });

    if (!date) {
      this.setState({
        dateError: { status: true, message: 'Fill this field' },
      });
    }

    if (!categories.length) {
      this.setState({
        categoriesError: { status: true, message: 'Fill this field' },
      });
    }

    if (!tags.length) {
      this.setState({
        tagsError: { status: true, message: 'Fill this field' },
      });
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(AddAndChangeMyBookContainer);