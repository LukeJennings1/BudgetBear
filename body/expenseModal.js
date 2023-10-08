
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';

// 
function ModalTemplate({visible, onClose}){

    return (
        <Modal visible = {visible} onRequestClose={onClose} animationType = 'slide'>
            <View style = {styles.modalContainer}>
            <TouchableOpacity style = {styles.modalCloseButton} onPress={() => {onClose()}}></TouchableOpacity>
            
            <Text>hello</Text>

            </View>

        </Modal>
    )

}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'red',
        height: '100%',
        width: '100vw',
        border: 'solid',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalCloseButton: {
        height: 50,
        width: 50,
        color: 'black'
    }
})

export default ModalTemplate;