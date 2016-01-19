'use strict';


var React = require('react-native');
var {Text,View,TextInput,TouchableWithoutFeedback,Image,ToastAndroid,Platform,NavigatorIOS,Navigator} = React;


var MainActivity = require('./MainActivity');

class LoginScreen extends React.Component {

    login() {
        this.props.navigator.push({
            component: MainActivity
        })
    }

    render() {
        return(
            <View style={styles.loginView}>
                <Image style={styles.image} source={require('./Ionic.png')}/>
                <Text style={styles.loginText}>Chat System</Text>
                <TextInput style={styles.usernameText} placeholder="username" placeholderTextColor="black"></TextInput>
                <TextInput style={styles.passwordText} placeholder="password" placeholderTextColor="black" secureTextEntry></TextInput>
                <TouchableWithoutFeedback  onPress={ () => this.login() }>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Smit is smart</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.signUpButton}>
                        <Text style={styles.signUpButtonText}>Sign Up</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={ () => this.login() }>
                    <View>
                        <Text style={styles.forgetPasswordText}>Forgot password?</Text>
                    </View>
                </TouchableWithoutFeedback>
        </View>)
    }
}

var styles = React.StyleSheet.create({
    image:{
        height: 150,
        alignSelf: "center",
        marginTop: 50,
        opacity: 1
    },
    loginView:{
      backgroundColor: "#FA8A3A",
        flex: 1
    },
    loginText: {
        fontSize: 50,
        color: "white",
        marginTop: 10,
        alignSelf: "center"
    },
    usernameText: {
        height: 40,
        color: 'black',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10
    },
    passwordText: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10
    },
    loginButtonText:{
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'

    },
    loginButton:{
        marginTop: 10,
        height: 30,
        backgroundColor: 'blue'
    },
    signUpButtonText:{
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'

    },
    signUpButton:{
        marginTop: 10,
        height: 30,
        backgroundColor: 'grey'
    },
    forgetPasswordText:{
        fontSize: 10,
        alignSelf: 'center',
        marginTop: 10
    }
});

//React.AppRegistry.registerComponent('loginScreen', function() { return loginScreen });
module.exports = LoginScreen;
