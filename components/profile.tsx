import React, {useState ,useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";

export default function Profile( { navigation, route }: any ) {
  
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

  useEffect(() => {
    getData();
  },[]);

  const getData = () => {
    try {
      AsyncStorage.getItem('FullName')
        .then(value => {
          if (value != null) {
            setname(value);
          }
        }
        
      )
    } catch (nameError) {
      console.log(nameError);
    }
    try {
      AsyncStorage.getItem('Email Address')
        .then(value => {
          if (value != null) {
            setEmail(value);
          }
        }
        
      )
    } catch (emailError) {
      console.log(emailError);
    }
    try {
      AsyncStorage.getItem('Phone')
        .then(value => {
          if (value != null) {
            setphone(value);
          }
        }
        
      )
    } catch (phoneError) {
      console.log(phoneError);
    }
    try {
      AsyncStorage.getItem('Password')
        .then(value => {
          if (value != null) {
            setPassword(value);
          }
        }
        
      )
    } catch (passwordError) {
      console.log(passwordError);
    }
    try {
      AsyncStorage.getItem('Confirm password')
        .then(value => {
          if (value != null) {
            setconfirmpassword(value);
          }
        }
        
      )
    } catch (confirmpasswordError) {
      console.log(confirmpasswordError);
    }
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/*<Button onPress={() => navigation.goBack()} title="Go Back To Home" />*/}
      <Text style={{fontSize: 20}}>
        User Info{"\n"}{"\n"}
        {name}{"\n"}{"\n"}
        {email}{"\n"}{"\n"}
        {phone}{"\n"}{"\n"}
        {password}{"\n"}{"\n"}
        {confirmpassword}
    </Text>
    </View>
  );
}