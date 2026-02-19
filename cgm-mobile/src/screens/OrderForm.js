import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const OrderForm = () => {
    const [patientName, setPatientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [doctor, setDoctor] = useState('');

    const handleSubmit = () => {
        if (!patientName || !phoneNumber || !city) {
            Alert.alert('Error', 'Please fill all required fields');
            return;
        }
        Alert.alert('Success', 'Order placed successfully!');
        // API Call would go here
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Place New Order</Text>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Patient Name *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter patient name"
                    value={patientName}
                    onChangeText={setPatientName}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Patient Phone Number *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="03xx-xxxxxxx"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Patient City *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Select or enter city"
                    value={city}
                    onChangeText={setCity}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Doctor Prescribed</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Search doctor"
                    value={doctor}
                    onChangeText={setDoctor}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit Order</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00A9E0',
        marginBottom: 30,
        marginTop: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#00A9E0',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default OrderForm;
