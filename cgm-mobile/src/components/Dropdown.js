import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native';
import { ChevronDown, X } from 'lucide-react-native';
import { theme } from '../theme';

const Dropdown = ({ label, data, value, onSelect, placeholder, icon: Icon }) => {
    const [visible, setVisible] = useState(false);
    const selectedItem = data.find(item => item.id === value);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity
                style={styles.inputWrapper}
                onPress={() => setVisible(true)}
                activeOpacity={0.7}
            >
                {Icon && <Icon size={18} color={theme.colors.textLight} style={styles.icon} />}
                <Text style={[styles.text, !selectedItem && styles.placeholder]}>
                    {selectedItem ? selectedItem.name : placeholder}
                </Text>
                <ChevronDown size={18} color={theme.colors.textLight} />
            </TouchableOpacity>

            <Modal visible={visible} transparent animationType="fade">
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setVisible(false)}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{label}</Text>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <X size={24} color={theme.colors.text} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {data.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[
                                        styles.item,
                                        value === item.id && styles.itemSelected
                                    ]}
                                    onPress={() => {
                                        onSelect(item.id);
                                        setVisible(false);
                                    }}
                                >
                                    <Text style={[
                                        styles.itemText,
                                        value === item.id && styles.itemTextSelected
                                    ]}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: theme.spacing.md,
    },
    label: {
        fontSize: 9,
        fontWeight: '900',
        color: theme.colors.textLight,
        marginBottom: 6,
        letterSpacing: 1,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        borderRadius: theme.borderRadius.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
        paddingHorizontal: theme.spacing.md,
        height: 56,
    },
    icon: {
        marginRight: theme.spacing.sm,
    },
    text: {
        flex: 1,
        fontSize: 14,
        fontWeight: '600',
        color: theme.colors.text,
    },
    placeholder: {
        color: theme.colors.textLight,
        fontWeight: '500',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 20,
        maxHeight: '80%',
        padding: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    modalTitle: {
        fontSize: 14,
        fontWeight: '900',
        color: theme.colors.secondary,
        letterSpacing: 1,
    },
    item: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    itemSelected: {
        backgroundColor: theme.colors.surface,
        borderRadius: 12,
        paddingHorizontal: 12,
        borderBottomWidth: 0,
        marginBottom: 4,
    },
    itemText: {
        fontSize: 14,
        fontWeight: '600',
        color: theme.colors.text,
    },
    itemTextSelected: {
        color: theme.colors.primary,
        fontWeight: '800',
    }
});

export default Dropdown;
