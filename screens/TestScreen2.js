import React , { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import TextInputContainer from '../components/TextInput.js';
import { useTranslation } from 'react-i18next';

const Test2 = ({navigation}) => {
    const { t } = useTranslation();
    return(
        <View style={styles.container}>
            <TextInputContainer navigation={navigation} /> 
            <Text> {t('where')} </Text>
      </View>
    );

};

export default Test2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

