import React from 'react';
import { Text, View, Modal, StyleSheet } from "react-native";
import { CardSection } from './CardSection'
import { Button } from './Button';

const ConfirmModal = ({visible, children, onAccept, onDecline}) => {
    const { containerStyle, textStyle, CardSectionStyle } = styles
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={()=>{} } // empty function because required on close
        >
            <View style={containerStyle}>

                <CardSection style={CardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                
                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>                
            </View>
        
        </Modal>
    )
}

const styles = StyleSheet.create({
    CardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)', 
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
})

export { ConfirmModal }