import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { CardSection } from "./common";
import { Actions } from 'react-native-router-flux'


export default class ListItem extends Component{
    onRowPress () {
        Actions.employeeEdit({employee:this.props.employee.item})
    }
    render() {
        const { name } = this.props.employee.item
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text styles={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>                
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})

