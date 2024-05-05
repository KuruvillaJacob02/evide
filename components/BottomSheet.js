import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image} from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useTranslation } from 'react-i18next';

import Category from './Explore/Category.js'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const BottomSheet = ({navigation, placeList}) => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ['25%', '50%', '78%'];
  bottomSheetModalRef.current?.present();
  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }
  const { t } = useTranslation();
  const handleContentPanning = useCallback((event, gestureState, fromIndex, toIndex) => {
    // Prevent the modal from going below 25%
    if (toIndex < 0) {
      return false;
    }
    return true;
  }, []);
  
  return (
        <View style={styles.container}>
          <View style={styles.modalButtonContainer}>
            <Button title='Explore' onPress={handlePresentModal} />
          </View>
          <View style = {styles.BottomSheetContainer}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            enableContentPanning={handleContentPanning} // Apply the custom content panning handler
          >
            <View style={{ height: "90%", marginTop: 20 }}>
                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.welcomeText}>{t('greet')}</Text>
                    <Text style={styles.welcomeText}>{t('question')}</Text>
                </View>
                <View style={styles.filterTextContainer}>
                    <Text style={styles.filterText}>{t('popular')}</Text>
                </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
              >
               {placeList.map(place => (
                  <Category key={place.id} name={place.name} imageUri={place.photos && place.photos.length > 0 ? { uri:
                    "https://maps.googleapis.com/maps/api/place/photo" +
                    "?maxwidth=400" +
                    "&photo_reference=" +
                    place.photos[0].photo_reference +
                    "&key=AIzaSyDxcgmpNTtROwth6FMxilVQCUZ-D8U8384"
                  } : null} />
                ))}
              </ScrollView>

              <View style={styles.filterTextContainer}>
                    <Text style={styles.filterText}>{t('nearby')}</Text>
                </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
              >
                <Category name="Some Mall" imageUri={require('../img/home.jpg')} />
                <Category name="Another Mall" imageUri={require('../img/home.jpg')} />
                <Category name="Lulu Mall" imageUri={require('../img/home.jpg')} />
                <Category name="Lulu Mall" imageUri={require('../img/home.jpg')} />
              </ScrollView>

              <View style={styles.filterTextContainer}>
                    <Text style={styles.filterText}>Most Reccomended</Text>
                </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
              >
                <Category name="Some Mall" imageUri={require('../img/home.jpg')} />
                <Category name="Another Mall" imageUri={require('../img/home.jpg')} />
                <Category name="Lulu Mall" imageUri={require('../img/home.jpg')} />
                <Category name="Lulu Mall" imageUri={require('../img/home.jpg')} />
              </ScrollView>
              
            </View>
    
          </BottomSheetModal>
          </View>
        </View>

  );
}

export default BottomSheet;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonContainer: {
    top:windowHeight * 0.6, // Adjust the margin bottom to position the button lower
    backgroundColor:'white',
    borderRadius:30,
    borderColor:'black',
    borderWidth:1,
    paddingHorizontal:20,

  },
  exploreContainer: {
    flex:1,
    paddingTop:20,
    paddingHorizontal:35,
  },
  textLabel: {
    marginLeft: 20,
  },
  welcomeTextContainer:{
    marginLeft:'10%',
    marginTop:'2%',
  },
  welcomeText:{
    fontWeight:'600',
    fontSize:20,
  },
  filterText:{
    fontSize:15,
    fontWeight:'600',
    marginLeft:'10%',
    marginTop:'3%',
  },
  BottomSheetContainer:{

  }
});
