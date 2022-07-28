import React, {useState} from 'react'
import { Text, View, TextInput, Button ,StyleSheet, Alert, TouchableOpacity, ScrollView} from 'react-native';
function Form() {
    const [email, setEmail] = useState("")
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [password, setPassword] = useState("")
    const[confirmpassword,setconfirmpassword]=useState("")
    const [emailError, setEmailError] = useState("")
    const [nameError, setnameError] = useState("")
    const [phoneError, setphoneError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmpasswordError, setconfirmPasswordError] = useState("")
    const handleSubmit = () => {
        var nameValid = false;
        if(name.length == 0){
            setnameError("Enter Full Name");
        }        
        else{
            setnameError("")
            nameValid = true
        }
        var emailValid = false;
        if(email.length == 0){
            setEmailError("Email is required");
        }        
        else if(email.length < 6){
            setEmailError("Email should be minimum 6 characters");
        }      
        else if(email.indexOf(' ') >= 0){        
            setEmailError('Email cannot contain spaces');                          
        }    
        else{
            setEmailError("")
            emailValid = true
        }
        var phoneValid = false;
        if(phone.length == 0){
            setphoneError("Enter a phone number.");
        }        
          
        else{
            setphoneError("")
            phoneValid = true
        }     
        
    
        var passwordValid = false;
        if(password.length == 0){
            setPasswordError("Password is required");
        }        
        else if(password.length < 6){
            setPasswordError("Password should be minimum 6 characters");
        }      
        else if(password.indexOf(' ') >= 0){        
            setPasswordError('Password cannot contain spaces');                          
        }    
        else{
            setPasswordError("")
            passwordValid = true
        }     
        console.log(confirmpassword)
        console.log(password)
        var confirmpasswordValid = false;
        if (confirmpassword.length == 0) {
            setconfirmPasswordError("Enter Password Confirmation.");
        }
       
        
        else if (confirmpassword !== password) {
           
        setconfirmPasswordError("Password and Confrim password should be the same!")
        }
       
        else {
            setconfirmPasswordError ("")
            confirmpasswordValid = true
            }     
      }
    return (
        <View style={styles.form}>
        <View style={styles.container}>
            <Text style={{textAlign:"center",fontSize:30,color:"#000",fontWeight:"bold",paddingBottom:40}}>Registration Form</Text>
            <View>
            <View style={styles.textinput}>
                    <Text style={{paddingBottom:10,fontSize:18}}>Full Name</Text>
                    <TextInput style={styles.input}  placeholder="Full Name" onChangeText={text => setname(text)} value={name} />
                </View>

                {nameError.length > 0 &&
                  <Text style={{color:"red"}}>{nameError}</Text>
                }
                <View style={styles.textinput}>
                    <Text style={{paddingBottom:10,fontSize:18}}>Email Address</Text>
                    <TextInput style={styles.input}  placeholder="Enter Email" onChangeText={text => setEmail(text)} value={email} />
                </View>

                {emailError.length > 0 &&
                  <Text style={{color:"red"}}>{emailError}</Text>
                }
                <View style={styles.textinput}>
                    <Text style={{paddingBottom:10,fontSize:18}}>Phone(enter only 10 digit number)</Text>
                    <TextInput style={styles.input}  placeholder="Phone Number"  keyboardType="numeric" onChangeText={text => setphone(text)} value={phone} />
                </View>
                {phoneError.length > 0 &&
            
            <Text style={{color:"red"}}>{phoneError}</Text>
          }
                <View style={styles.textinput}>
                    <Text style={{paddingBottom:10,fontSize:18}}>Passoword</Text>
                    <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry={true} onChangeText={text => setPassword(text)} value={password} />
                </View>
                {passwordError.length > 0 &&
            
                  <Text style={{color:"red"}}>{passwordError}</Text>
                }
                <View style={styles.textinput}>
                    <Text style={{paddingBottom:10,fontSize:18}}>Confirm Passoword</Text>
                    <TextInput style={styles.input}
                      placeholder="Confirm Password"
                      secureTextEntry={true}
                      onChangeText={text => setconfirmpassword(text)}
                      value={confirmpassword}
                    />
                </View>
                {confirmpasswordError.length > 0 &&
            
                  <Text style={{color:"red"}}>{confirmpasswordError}</Text>
                }
                {/*<View style={styles.button}><Button onPress={handleSubmit} title='Register' /></View>*/}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={{textAlign:"center",fontWeight:"bold",color:"#fff"}}>Register</Text>
                </TouchableOpacity>
                
</View>
            
            </View>
            </View>
    )
}
export default Form;
const styles = StyleSheet.create({
    form: {
        flex:1,
    },
    container: {
        flex: 1,  
        paddingTop: 60,
       
    },
    input: {
        padding: 10,
        backgroundColor:"#ffffff",
        borderColor: "grey",
        borderRadius: 8,
        borderWidth:1,
    },
    textinput: {
        marginTop: 10,
      marginBottom:10,  
    },
    button: {
        width: "45%",
        //marginLeft:"25%",
        padding: 10,
        backgroundColor:"#0000ff",
      borderRadius: 10,
        marginTop: 10,
    }
  });