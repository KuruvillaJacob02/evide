import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import TextInputContainer from './components/TextInput.js';

export default function App({ navigation }) {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ['25%', '50%', '75%'];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  const handleContentPanning = useCallback((event, gestureState, fromIndex, toIndex) => {
    // Prevent the modal from going below 25%
    if (toIndex < 0) {
      return false;
    }
    return true;
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TextInputContainer navigation={navigation} />
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <View style={styles.modalButtonContainer}>
            <Button title='modal' onPress={handlePresentModal} />
          </View>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            enableContentPanning={handleContentPanning} // Apply the custom content panning handler
          >
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.textLabel}>Hiiiiii</Text>
                  <Text style={styles.textLabel}>Heeyyyy</Text>
                  <Text style={styles.textLabel}>Noo nooo</Text>
                  <Text style={styles.textLabel}>Hiiiiii</Text>
                  <Text style={styles.textLabel}>Heeyyyy</Text>
                  <Text style={styles.textLabel}>Noo nooo</Text>
                  <Text style={styles.textLabel}>Hiiiiii</Text>
                  <Text style={styles.textLabel}>Heeyyyy</Text>
                  <Text style={styles.textLabel}>Noo nooo</Text>
                  <Text style={styles.textLabel}>Hiiiiii</Text>
                </View>
              </ScrollView>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonContainer: {
    top:'20%' // Adjust the margin bottom to position the button lower
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  textLabel: {
    marginLeft: 20,
  },
});
