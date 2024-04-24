import React , { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import TextInputContainer from '../components/TextInput.js';


const ChangeLanguage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <TextInputContainer navigation={navigation} />
            <Text>Hi </Text>
      </View>
    );

};

export default ChangeLanguage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

