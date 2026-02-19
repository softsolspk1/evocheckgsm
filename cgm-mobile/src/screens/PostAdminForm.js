import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const PostAdminForm = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        serialNumber: '',
        visitDate: new Date().toISOString().split('T')[0],
        devices: '1',
        whatsapp: '',
        comments: ''
    });

    const handleChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        Alert.alert('Form Submitted', 'Post Administration data saved.');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Post Administration Form</Text>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Patient Name</Text>
                <TextInput
                    style={styles.input}
                    value={formData.patientName}
                    onChangeText={(v) => handleChange('patientName', v)}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>CGM Serial Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Scan or enter SN"
                    value={formData.serialNumber}
                    onChangeText={(v) => handleChange('serialNumber', v)}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Number of CGM Devices</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={formData.devices}
                    onChangeText={(v) => handleChange('devices', v)}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Patient WhatsApp Number</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="phone-pad"
                    value={formData.whatsapp}
                    onChangeText={(v) => handleChange('whatsapp', v)}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Comments/Feedback</Text>
                <TextInput
                    style={[styles.input, { height: 100 }]}
                    multiline
                    value={formData.comments}
                    onChangeText={(v) => handleChange('comments', v)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Complete Journey</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#00A9E0', marginBottom: 30, marginTop: 20 },
    inputGroup: { marginBottom: 20 },
    label: { fontSize: 14, fontWeight: '500', color: '#333', marginBottom: 8 },
    input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16 },
    button: { backgroundColor: '#00A9E0', padding: 16, borderRadius: 10, alignItems: 'center', marginTop: 20, marginBottom: 40 },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});

export default PostAdminForm;
