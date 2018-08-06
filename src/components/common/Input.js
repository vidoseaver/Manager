import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { containerStyle, labelStyle, inputStyle  } = styles
    return (
        <View style={containerStyle}>
        <Text style={labelStyle}>
            {label}
        </Text>

        <TextInput
            autoCapitalize='none'        
            secureTextEntry={secureTextEntry}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            autoCorrect={false}
        />
        </View>
    )
}

// The way flex works is you add all the flex's, then they are porportioned out accordingly
//  in this case input gets 2/3rds of the space and label will get 1/3rd.

const styles = StyleSheet.create({
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    labelStyle: { 
        fontSize:18,
        paddingLeft: 10,
        flex: 1
    },

    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
})
export { Input }