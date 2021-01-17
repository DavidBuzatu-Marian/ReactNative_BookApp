import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
const BookDetail = ({route, navigation}) => {
  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    let {book} = route.params;
    setBook(book);
  }, [book]);

  const renderBookInfoSection = () => {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={book.bookCover}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />

        {/* Color Overlay  */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: book.backgroundColor,
          }}></View>

        {/* Navigation Header  */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: 80,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{marginLeft: SIZES.base}}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: book.navTintColor,
              }}
            />
          </TouchableOpacity>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{...FONTS.h3, color: book.navTintColor}}>
              Book Detail
            </Text>
          </View>

          <TouchableOpacity
            style={{marginRight: SIZES.base}}
            onPress={() => console.log('Click More')}>
            <Image
              source={icons.more_icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: book.navTintColor,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Book Cover  */}

        <View
          style={{
            flex: 5,
            paddingTop: SIZES.padding2,
            alignItems: 'center',
          }}>
          <Image
            source={book.bookCover}
            resizeMode="contain"
            style={{
              flex: 1,
            }}
          />
        </View>

        {/* Book Name and Author  */}
        <View
          style={{flex: 1.8, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{book.bookName}</Text>
          <Text>{book.author}</Text>
        </View>
      </View>
    );
  };

  if (book) {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.black}}>
        {/* Book Cover Section */}
        <View style={{flex: 4}}>{renderBookInfoSection()}</View>
        {/* Description  */}
        <View style={{flex: 2}}></View>
        {/* Buttons  */}
        <View style={{height: 70}}></View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default BookDetail;
