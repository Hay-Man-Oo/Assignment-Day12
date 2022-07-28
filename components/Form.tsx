import React, { Component } from 'react';
import { Button, Keyboard, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class RegistrationScreen extends Component {

  fullnameInputRef = React.createRef();
  emailInputRef = React.createRef();
  phoneInputRef = React.createRef();
  passwordInputRef = React.createRef();
  comfirmInputRef = React.createRef();
  

  
  scrollViewRef = React.createRef();

  constructor(props:any) {
    super(props);
    this.state = {
        fullname: '',
        email: '',
        phone: '',
        password: '',
        comfirm: '',
       
        showFullnameError: false,
        showEmailError: false,
        showPhoneError: false,
        showPasswordError: false,
        showComfirmError: false,
        
        
    };
    this.submitPressed = this.submitPressed.bind(this);
  }

  inputs = () => {
    return [
      this.fullnameInputRef,
      this.emailInputRef,
      this.phoneInputRef,
      this.passwordInputRef,
      this.comfirmInputRef,
    ];
  };

  editNextInput = () => {
    console.log("editNextInput")
    const activeIndex = this.getActiveInputIndex();
    if (activeIndex === -1) {
        return;
    }

    const nextIndex = activeIndex + 1;
    if (nextIndex < this.inputs().length && this.inputs()[nextIndex].current != null) {
        this.setFocus(this.inputs()[nextIndex], true);
    } else {
        this.finishEditing();
    }
  }

  onInputFocus = () => {
    this.setState({
        activeIndex: this.getActiveInputIndex(),
    });
  }

  onChangeInputHandler = (name:any, value:any) => {
    this.setState({
        [name]: value,
    });
  }

  getActiveInputIndex = () => {
    const activeIndex = this.inputs().findIndex((input) => {
        if (input.current == null) {
            return false;
        }
        console.log("input: ", input);
        return input.current.isFocused();
    });
    console.log("activeIndex: ", activeIndex);
    return activeIndex;
  }

  finishEditing = () => {
    const activeIndex = this.getActiveInputIndex();
    if (activeIndex === -1) {
        return;
    }
    this.setFocus(this.inputs()[activeIndex], false);
  }

  setFocus(textInputRef:any, shouldFocus:any) {
    if (shouldFocus) {
        setTimeout(() => {
            textInputRef.current.focus();
        }, 100);
    } else {
        textInputRef.current.blur();
    }
  }

  submitPressed() {
    console.log("submitPressed this.state: ", this.state);
    this.setState({

        showFullnameError: this.state.fullname.length < 4,
        showEmailError: this.state.email.length < 4,
        showPhoneError: this.state.phone.length < 4,
        showPasswordError: this.state.password.length < 4,
        showComfirmError: this.state.comfirm.length < 4,
        
        
    });
    Keyboard.dismiss();
  }

  render() {
    return (
        <KeyboardAwareScrollView
          style={styles.container}
          contentOffset={{ x: 0, y: 24 }}
          ref={this._scrollViewRef}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: 24 }}
          contentInsetAdjustmentBehavior="always"
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          enableOnAndroid={true}
          extraHeight={32}
          extraScrollHeight={Platform.OS == "android" ? 32 : 0}
          enableResetScrollToCoords={false}
          onKeyboardDidShow={this._keyboardDidShowHandler}
        >
            <View style={styles.container}>

                <Text style={styles.header}>Registration Form</Text>

          <View style={styles.inputTextWrapper}>
                    <Text
                      style={{fontSize:20,fontWeight:'bold',paddingLeft:10}}>
                         Full Name
                    </Text>
                    <TextInput
                        placeholder="Full Name"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.fullnameInputRef}
                    />
                    {this.state.showFullnameError &&
                        <Text style={styles.errorText}>Please enter your Full name.</Text>
                    }
                  </View>
          
                  <View style={styles.inputTextWrapper}>
                    <Text
                        style={{fontSize:20,fontWeight:'bold',paddingLeft:10}}>
                          Email address
                    </Text>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.emailInputRef}
                    />
                    {this.state.showEmailError &&
                        <Text style={styles.errorText}>Please enter your email address.</Text>
                    }
                  </View>
                  <View style={styles.inputTextWrapper}>
                        <Text
                          style={{fontSize:20,fontWeight:'bold',paddingLeft:10}}>
                            Phone(Enter only 10 digit number)
                        </Text>
                      <TextInput
                        placeholder="Phone Number"
                        style={styles.textInput}
                        returnKeyType="done"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.phoneInputRef}
                    />
                    {this.state.showPhoneError &&
                        <Text style={styles.errorText}>Please enter your phone number.</Text>
                    }
                  </View>

                  <View style={styles.inputTextWrapper}>
                    <Text
                        style={{fontSize:20,fontWeight:'bold',paddingLeft:10}}>
                          Password
                    </Text>
                    <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        secureTextEntry={true}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.passwordInputRef}
                    />
                    {this.state.showPasswordError &&
                        <Text style={styles.errorText}>Please enter a password.</Text>
                    }
                </View>
                  <View style={styles.inputTextWrapper}>
                    <Text
                        style={{fontSize:20,fontWeight:'bold',paddingLeft:10}}>
                          Comfirm Password
                    </Text>
                    <TextInput
                        placeholder="Comfirm Password"
                        style={styles.textInput}
                        secureTextEntry={true}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={this.onChangeInputHandler}
                        ref={this.comfirmInputRef}
                    />
                    {this.state.showComfirmError &&
                        <Text style={styles.errorText}>Enter password comfirmation.</Text>
                    }
                </View>

                

                <View style={styles.btnContainer}>
                  <Button title="Register" onPress={this.submitPressed} />
                </View>

            </View>
        </KeyboardAwareScrollView>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingBottom: 100,
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      padding: 20,
      margin: 12,
      textAlign: 'center',
    },
    inputTextWrapper: {
      marginBottom: 20,
    },
    textInput: {
      height: 40,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    errorText: {
      color: 'red',
      fontSize: 18,
      paddingLeft: 10,
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 30,
      paddingLeft: 10,
      width: '30%',
    }
  });