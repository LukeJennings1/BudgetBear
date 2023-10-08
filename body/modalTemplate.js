
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';

// 
function ModalTemplate({visible, onClose, callit}){

    console.log(onClose);

    return (
        <Modal visible = {visible} onRequestClose={onClose} animationType = 'slide'>
            <View style = {styles.modalContainer}>
            <TouchableOpacity style = {styles.modalCloseButton} onPress={onClose()}></TouchableOpacity>
        {/* When we pass the reference ot the function IE onClose instead of onClose() we are essentialy saying 
        for the touchable component to call it when pressed. If we pass onClose() its going to call as soon
        as the code loads. Basically, the touchable component will call it properly (with the perethesis) 
        on press of the button. in a similar way an arrow function will work because its a middle step between
        calling the function so () => onclose() will work as were telling onPress to call the function that 
        calls the onClose() function IE calling a function to call a function*/}
            
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