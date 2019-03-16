import React, { FunctionComponent } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {
  CustomTextInput,
  CustomTextInputWithDropDownText,
  RemovableList,
} from '@components';
import { CATEGORIES, TAGS, THEME } from '@constants';
import { AddAndChangeMyBookViewStyles as styles } from '../styles';

interface IProps {
  addAuthor: () => void;
  onMoreItems: (
    type: string,
    data: string[],
    selectedItems: string[],
    setItems: (type: string, items: string[]) => void,
  ) => void;
  openCamera: () => void;
  openPicker: () => void;
  removeAuthor: (id: number) => void;
  removeCategoriesItem: (value: string) => void;
  removeImage: () => void;
  removeTagsItem: (value: string) => void;
  selectCategory: (value: string) => void;
  selectTag: (value: string) => void;
  setItems: (type: string, items: string[]) => void;
  showDateTimePicker: () => void;
  srollToDropDownTextOfTI: (value: number) => void;

  authors: Array<{
    id: number,
    fullName: string,
  }>;
  categories: string[];
  date: string;
  description: string;
  image: any;
  publisher: string;
  subtitle: string;
  tags: string[];
  title: string;

  onChangeAuthor: (id: number, value: string) => void;
  onChangeDescription: (value: string) => void;
  onChangePublisher: (value: string) => void;
  onChangeSubtitle: (value: string) => void;
  onChangeTitle: (value: string) => void;

  publish: () => void;

  categoriesError: IError;
  dateError: IError;
  tagsError: IError;
  titleError: IError;

  screenType: 'Add' | 'Change';
  save: () => void;
}

interface IError {
  status: boolean;
  message?: string;
}

const { colors } = THEME;
const { placeholder, primary } = colors;
const TEXT = '#4B5A71';

const AddAndChangeMyBookView: FunctionComponent<IProps> = (
  props,
): JSX.Element => {
  const {
    addAuthor,
    onMoreItems,
    openCamera,
    openPicker,
    removeAuthor,
    removeCategoriesItem,
    removeImage,
    removeTagsItem,
    selectCategory,
    selectTag,
    setItems,
    showDateTimePicker,
    srollToDropDownTextOfTI,

    authors,
    categories,
    date,
    description,
    image,
    publisher,
    subtitle,
    tags,
    title,

    onChangeAuthor,
    onChangeDescription,
    onChangePublisher,
    onChangeSubtitle,
    onChangeTitle,

    publish,

    categoriesError,
    dateError,
    tagsError,
    titleError,

    screenType,
    save,
  } = props;

  const formattedDate = date && moment(date).format('DD MMMM YYYY');
  const urlReg = /(https?:\/\/[^\s]+)/g;
  const isImageUrl = urlReg.test(image);

  const renderImage = (): JSX.Element => {
    return (
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={isImageUrl ? { uri: image } : image}
        />
        <TouchableRipple onPress={removeImage} style={styles.imageIconRemove}>
          <Icon color='#FFF' name='close' size={24} />
        </TouchableRipple>
      </View>
    );
  };

  const renderBtns = (): JSX.Element => {
    return (
      <View style={styles.cameraBtnsWrapper}>
        <TouchableRipple
          onPress={openPicker}
          style={[styles.cameraBtnWrapper, styles.cameraBtnWrapperMargin]}
        >
          <View style={styles.cameraBtn}>
            <Text style={styles.cameraBtnText}>From gallery</Text>
            <Icon color='rgba(75,90,113, 0.75)' name='attachment' size={24} />
          </View>
        </TouchableRipple>

        <TouchableRipple
          onPress={openCamera}
          style={[styles.cameraBtnWrapper, styles.cameraBtnWrapperMargin]}
        >
          <View style={styles.cameraBtn}>
            <Text style={styles.cameraBtnText}>Take photo</Text>
            <Icon
              color='rgba(75,90,113, 0.75)'
              name='camera-outline'
              size={24}
            />
          </View>
        </TouchableRipple>
      </View>
    );
  };

  const renderPubDateIcon = (): JSX.Element => {
    return <Icon color={placeholder} name='calendar-blank' size={24} />;
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>Add my photo</Text>
        <Text style={styles.textUnderTitle}>
          A positive image is a normal image, but not placeholder.
        </Text>

        {isImageUrl ? renderImage() : image.uri && renderImage()}
        {!isImageUrl && !image.uri && renderBtns()}

        <View style={styles.textInputContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Title*</Text>
          </View>
          <CustomTextInput
            error={titleError}
            mode='outlined'
            onChangeText={onChangeTitle}
            placeholder='Enter title'
            value={title}
          />
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Authors*</Text>
            <Icon color={TEXT} name='plus' onPress={addAuthor} size={24} />
          </View>

          {authors.map((item: any) => {
            const { id } = item;

            return (
              <View key={id} style={styles.authorsTIWrapper}>
                <CustomTextInput
                  error={item.error}
                  mode='outlined'
                  onChangeText={value => onChangeAuthor(id, value)}
                  placeholder='Enter full name'
                  style={styles.textInput}
                  value={item.fullName}
                />
                {id !== 0 && (
                  <Icon
                    color={primary}
                    name='close-circle'
                    onPress={() => removeAuthor(id)}
                    size={24}
                    style={styles.removeAuthorIcon}
                  />
                )}
              </View>
            );
          })}
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Publisher</Text>
          </View>
          <CustomTextInput
            mode='outlined'
            onChangeText={onChangePublisher}
            placeholder='Enter publisher'
            value={publisher}
          />
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Pub date*</Text>
          </View>
          <CustomTextInput
            error={dateError}
            mode='outlined'
            onPress={showDateTimePicker}
            placeholder='Choose date'
            rightButton={renderPubDateIcon()}
            value={formattedDate}
          />
        </View>

        <View style={styles.textInputContainer}>
          <View
            style={[
              styles.titleWrapper,
              !!categories.length && styles.titleWrapperMargin,
            ]}
          >
            <Text style={styles.title}>Categories*</Text>
            <Text
              style={styles.moreBtnText}
              onPress={() =>
                onMoreItems('categories', CATEGORIES, categories, setItems)
              }
            >
              MORE
            </Text>
          </View>
        </View>

        <RemovableList data={categories} removeItem={removeCategoriesItem} />

        <CustomTextInputWithDropDownText
          data={CATEGORIES}
          error={categoriesError}
          selectItem={selectCategory}
          selectedValues={categories}
          srollToDropDownTextOfTI={srollToDropDownTextOfTI}
          style={!!categories.length && styles.customTextInputWithDropDownText}
        />

        <View style={styles.textInputContainer}>
          <View
            style={[
              styles.titleWrapper,
              !!tags.length && styles.titleWrapperMargin,
            ]}
          >
            <Text style={styles.title}>Tags*</Text>
            <Text
              style={styles.moreBtnText}
              onPress={() => onMoreItems('tags', TAGS, tags, setItems)}
            >
              MORE
            </Text>
          </View>
        </View>

        <RemovableList data={tags} removeItem={removeTagsItem} />

        <CustomTextInputWithDropDownText
          error={tagsError}
          data={TAGS}
          selectItem={selectTag}
          selectedValues={tags}
          srollToDropDownTextOfTI={srollToDropDownTextOfTI}
          style={!!tags.length && styles.customTextInputWithDropDownText}
        />

        <View style={styles.textInputContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Short description</Text>
          </View>
          <CustomTextInput
            mode='outlined'
            multiline={true}
            onChangeText={onChangeSubtitle}
            placeholder='Enter short description'
            value={subtitle}
          />
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Description</Text>
          </View>
          <CustomTextInput
            mode='outlined'
            multiline={true}
            onChangeText={onChangeDescription}
            placeholder='Enter description'
            value={description}
          />
        </View>

        <View style={styles.publishBtnWrapper}>
          <TouchableRipple
            onPress={screenType === 'Change' ? save : publish}
            style={styles.publishBtn}
          >
            <Text style={styles.publishBtnText}>
              {screenType === 'Change' ? 'SAVE' : 'PUBLISH'}
            </Text>
          </TouchableRipple>
        </View>
      </View>

      <StatusBar backgroundColor={primary} barStyle='light-content' />
    </React.Fragment>
  );
};

export default AddAndChangeMyBookView;
