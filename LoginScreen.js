'use strict';


var React = require('react-native');
var {Text,View,TextInput,TouchableWithoutFeedback,Image,ToastAndroid,Platform,NavigatorIOS,Navigator} = React;


var MainActivity = require('./MainActivity');
var styles = require('./TrabbleStyleSheet');

class LoginScreen extends React.Component {

    Login(){

        this.props.navigator.push({
            component: MainActivity
        })
        }



    render() {
        return<View style={styles.loginView}>
            <Image style={styles.image} source={require('./Ionic.png')}/>
            <Text style={styles.loginText}>Chat System</Text>
        <TextInput style={styles.usernameText} placeholder="username" placeholderTextColor="black" ></TextInput>
            <TextInput style={styles.passwordText} placeholder="password" placeholderTextColor="black" secureTextEntry></TextInput>
        <TouchableWithoutFeedback  onPress={ () => this.Login() }><View style={styles.loginButton}  ><Text style={styles.loginButtonText}>Log in</Text></View></TouchableWithoutFeedback>
            <TouchableWithoutFeedback><View style={styles.signUpButton}><Text style={styles.signUpButtonText}>Sign Up</Text></View></TouchableWithoutFeedback>
            <TouchableWithoutFeedback><View><Text style={styles.forgetPasswordText}>Forgot password?</Text></View></TouchableWithoutFeedback>
        </View>

    }


}


module.exports = LoginScreen;
