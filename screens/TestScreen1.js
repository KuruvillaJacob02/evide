import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputContainer from '../components/TextInput.js';
import { useTranslation } from 'react-i18next';

const Test1 = ({ navigation }) => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <TextInputContainer navigation={navigation} />
            <Text>{t('start')}</Text>
        </View>
    );
};

export default Test1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
