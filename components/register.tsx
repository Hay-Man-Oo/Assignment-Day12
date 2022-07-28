import React, { Component, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from "react-native";



class Registeration extends React.Component<{},any> {

  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      confirmPasswordError: '',
    }
  }

  submit() {

    if (!this.state.name) {
      this.setState({nameError: 'Enter full name'})
    } else {
      this.setState({nameError: ''})
    }

    if (!this.state.email) {
      this.setState({emailError: 'Enter your email address'})
    } else {
      this.setState({emailError: ''})
    }

    if (!this.state.phone) {
      this.setState({ phoneError: 'Enter a phone number' })
    } else if (this.state.phone.length < 10 || this.state.phone.length > 10) {
      this.setState({phoneError: 'Enter only 10 digits'})
    } else {
      this.setState({phoneError: ''})
    } 
    
    if (!this.state.password) {
      this.setState({passwordError: 'Enter a password'})
    } else {
      this.setState({passwordError: ''})
    } 

    if (!this.state.confirmPassword) {
      this.setState({confirmPasswordError: 'Enter password confirmation'})
    } else if (this.state.confirmPassword !== this.state.password) {
      this.setState({confirmPasswordError: 'Your password is not equal!'})
    }
    else {
      this.setState({confirmPasswordError: ''})
    } 
  }
  
  render() {
    return (
      <ScrollView>
  
        <Text style={styles.header}>Registration</Text>
        
        <View style={styles.input}>
          <Text>Full Name</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Full Name"
            keyboardType="default"
            onChangeText={(text) => { this.setState({ name: text }) }}
            value={this.state.name}
          />

          <Text style={{color: 'red'}}>{this.state.nameError}</Text>
        </View>
  
        <View style={styles.input}>
          <Text>Email Address</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Email Address"
            keyboardType="default"
            onChangeText={(text) => { this.setState({ email: text }) }}
            value={this.state.email}
          />

          <Text style={{color: 'red'}}>{this.state.emailError}</Text>
        </View>
  
        <View style={styles.input}>
          <Text>Phone Number(enter only 10 digits number)</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Phone Number"
            keyboardType="numeric"
            onChangeText={(number) => { this.setState({ phone: number }) }}
            value={this.state.phone}
          />

          <Text style={{color: 'red'}}>{this.state.phoneError}</Text>
        </View>
  
        <View style={styles.input}>
          <Text>Password</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            keyboardType="numeric"
            onChangeText={(number) => { this.setState({ password: number }) }}
            value={this.state.password}
          />

          <Text style={{color: 'red'}}>{this.state.passwordError}</Text>
        </View>
  
        <View style={styles.input}>
          <Text>Confirm Password</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Confirm Password"
            keyboardType="numeric"
            onChangeText={(number) => { this.setState({ confirmPassword: number }) }}
            value={this.state.confirmPassword}
          />

          <Text style={{color: 'red'}}>{this.state.confirmPasswordError}</Text>
        </View> 
  
        
        <View style={styles.button}>
          <Button
            onPress={() => {this.submit()}}
            title="Submit"
            color="#841584" 
          />
        </View>
       
  
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 50
  },

  input: {
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 20,
  },

  inputBox: {
    height: 40,
    borderWidth: 1,
    marginRight: 20,
    marginTop: 10,
  },

  button: {
    alignItems: 'center',
  }
    
});

export default Registeration;