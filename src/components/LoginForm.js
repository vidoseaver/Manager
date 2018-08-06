import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Card, CardSection, Input, Button, Spinner } from './common'


class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onLoginPress(stuff) {
        const { email, password } = this.props

        this.props.loginUser({email, password})
    }

    renderError(){
        if (this.props.error) {
            return (
                <View syle={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton(){
        if (this.props.loading) {
            return(<Spinner size='large'/>)
        } 
        return (
            <Button onPress={this.onLoginPress.bind(this)} >
                Login
        </Button>

        )
        
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={this.onEmailChange.bind(this)}
                        label='Email'
                        placeholder='email@example.com'
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        onChangeText={this.onPasswordChange.bind(this)}
                        secureTextEntry
                        label='Password'
                        placeholder='*****************'
                        value={this.props.password}
                    />
                </CardSection>
                
                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle:{
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
    }
})

mapsStateToProps = state => {
    const { email, password, error, loading} = state.auth

    return { 
        email: email,
        password: password,
        error: error,
        loading: loading
    }
} 

export default connect(mapsStateToProps, {
     emailChanged, passwordChanged, loginUser
})(LoginForm) 