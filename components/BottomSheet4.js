import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image,TouchableOpacity} from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Category from './Explore/Category.js'
import RoutePanel from './RoutePanel.js';
import StepIndicator from 'react-native-step-indicator';
import { useTranslation } from 'react-i18next';
import * as Progress from 'react-native-progress';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const labels = ["Your Location","Delivery Address","Order Summary","Payment Method","Track"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 10,
  currentStepStrokeWidth: 15,
  stepStrokeCurrentColor: '#F8BC62', //First node
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',  //Finished node
  stepStrokeUnFinishedColor: '#F8BC62',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#F8BC62',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 15,
  currentStepLabelColor: '#fe7013',
  labelAlign:'left',
  labelColor:'black',
}

const BottomSheet4 = ({navigation}) => {
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
  
  const data=[
    {
      label: 'Your Location',
      status: 'Walk 17 min (1.1km)',
      dateTime: '8:28pm'
    },
    {
      label: 'Rajagiri College',
      status: 'Some Bus Stand Ride 7 stops ',
      dateTime: 'Scheduled 8:53pm'
    },
    {
      label: 'PipeLine Junction',
      status: 'Walk 2 min (80m), then wait upto 6 min',
      dateTime: '8:55pm'
    },
    {
      label: 'Kakkanad Metro',
      status: 'Ride to Vytilla, 5 stops',
      dateTime: '9:10'
    },
    {
      label: 'Toc H school',
      status: '',
      dateTime: 'Arrive by 9:20pm'
    },
    {
      label: 'Your Location',
      status: '',
      dateTime: ''
    }
  ]

  
  return (
        <View style={styles.container}>
          <View style={styles.modalButtonContainer}>
            <Button title='Explore' onPress={handlePresentModal} />
          </View>
          <View style = {styles.BottomSheetContainer}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={2}
            snapPoints={snapPoints}
            enableContentPanning={handleContentPanning} // Apply the custom content panning handler
          >
            <View style={{ height:'100%',paddingTop:'0' ,position:'relative', backgroundColor:'#2675EC'}}>
              <View style = {styles.locationContainer}>
                <View style = {styles.sourceContainer} >
                  <Text style = {styles.locationText} > Galaxy Greens</Text>
                </View>
                <View style = {styles.progressContainer} >
                  <Progress.Bar progress={0.8} width={null} color='white' />
                </View>
                <View style = {styles.destinationContainer} >
                  <Text style = {styles.locationText}> Lulu Mall</Text>
                </View>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                style = {{}}
                contentContainerStyle={{justifyContent:'flex-start'}}
              >
                <View style = {styles.indicatorContainer}>
                <StepIndicator
                  customStyles={customStyles}
                  stepCount={5}
                  currentPosition={0}
                  labels={labels}
                  direction="vertical"
                  renderLabel={({position,stepStatus,label,curpos}) => {
                    return(
                      <View style = {styles.labelContainer}>
                        <Text style = {styles.labelText}>{data[position].label}</Text>
                        <Text style = {styles.content}>{data[position].status}</Text>
                        <Text style = {styles.content}>{data[position].dateTime}</Text>
                      </View>
                    )
                  }}
                />
                </View>
                
                
                
              </ScrollView>
              
              <TouchableOpacity style={styles.selectContainer} >
                <View style={styles.selectButton}>
                   <Text style={styles.selectText}>End Trip</Text>
                </View>
              </TouchableOpacity>
            </View>
    
          </BottomSheetModal>
          </View>
        </View>

  );
}

export default BottomSheet4;
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
  routeTextContainer:{
    marginLeft:'6%',
    marginTop:'2%',
  },
  routeText:{
    fontWeight:'600',
    fontSize:13,
  },
  filterText:{
    fontSize:15,
    fontWeight:'600',
    marginLeft:'10%',
    marginTop:'3%',
  },
  BottomSheetContainer:{
    backgroundColor:'#2675EC',
    color:'#2675EC',
  },
  selectContainer:{
    marginBottom:20, // Adjust the button position as needed
    alignItems: 'center',
    alignSelf:'center',
  // Increase elevation for shadow effect
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.7, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius

  },
  selectButton:{
    backgroundColor: '#15C679',
    borderRadius: 20, // Adjust border radius as needed
    paddingHorizontal: '25%',
    paddingVertical: '5%',
  },
  selectText:{
    fontWeight:'600',
    color:'white',
  },
  indicatorContainer:{
    height:windowHeight,
    margin:0,
    paddingLeft:27,
    paddingTop:0,
  },
  labelContainer:{
    paddingLeft:10,
    height:windowHeight/6,
    marginTop:110,
    width:'100%',
  },
  labelText:{
    color:'white',
    fontSize:15,
    fontWeight:'600',
    marginBottom:10,
  },
  content:{
    color:'white',
    fontSize:14,
    paddingBottom:5,
  
  },
  locationContainer:{
    height:100,
    paddingTop:30,
    flexDirection:'row',
    alignContent:'center',
    marginHorizontal:15,
  },
  location:{
    fontSize:20,
    textAlign:'center',
  },
  sourceContainer:{
    flex:0.3,
    justifyContent:'center',
  },
  progressContainer:{
    justifyContent:'center',
    flex:0.4,
  },
  destinationContainer:{
    flex:0.3,
    justifyContent:'center',
  },
  locationText:{
    color:'white',
    fontSize:18,
    textAlign:'center',
    fontWeight:'500',
  }
});


