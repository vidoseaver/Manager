import _ from 'lodash'
import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from 'react-native'
import Communications from 'react-native-communications'
import EmployeeForm from "./EmployeeForm"
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";
import { Card, CardSection, Input, Button, ConfirmModal } from "./common";

class EmployeeEdit extends Component {

    state = {showModal: false}
    
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }
    
    onButtonPress() {
        const { name, phone, shift } = this.props
        this.props.employeeSave({name, phone, shift, uid:this.props.employee.uid})
    }

    onTextPress() {
        const { name, phone, shift } = this.props
        
        Communications.text(phone, `Hi ${name}, your upcoming shift is on ${shift}`)
    }

    onAccept() {
        const {uid} = this.props.employee
        this.props.employeeDelete({uid})
    }

    onDecline() {
        this.setState({showModal: false})
    }


    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
                
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => { this.setState({showModal: true})}}>
                        Fire Employee
                    </Button>
                </CardSection>

                <ConfirmModal 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure want to delete this?
                </ConfirmModal>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm

    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit)