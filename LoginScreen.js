'use strict';


var React = require('react-native');
var {Text,View,TextInput,TouchableWithoutFeedback,Image,TouchableOpacity,Platform,NavigatorIOS,Navigator} = React;


var MainActivity = require('./MainActivity');
var styles = require('./TrabbleStyleSheet');

class LoginScreen extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            username:'',
            password:''
        }
    }







    render() {
        return(
            <View style={styles.loginView}>
                <Image style={styles.image} source={require('./Ionic.png')}/>
                    <Text style={styles.loginText}>
                        Chat System
                    </Text>
            <TextInput
                style={styles.usernameText}
                placeholder="username"
                placeholderTextColor="black"
                onChange={(event) => this.setState({username: event.nativeEvent.text})} />
            <TextInput
                style={styles.passwordText}
                placeholder="password"
                placeholderTextColor="black"
                onChange={(event) => this.setState({password: event.nativeEvent.text})}
                secureTextEntry/>
            <TouchableWithoutFeedback onPress={(this.Login.bind(this))}>
                <View style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>
                        Sign In
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={styles.signUpButton}>
                    <Text style={styles.signUpButtonText}>
                        Sign Up
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View>
                    <Text style={styles.forgetPasswordText}>Forgot password?</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>);

    }

    Login(){
        if(this.state.username==''||this.state.password==''){
            alert('Empty');
        }
        else{

            this.props.navigator.push({
                component: MainActivity,
                passProps: {username: this.state.username, password: this.state.password}
            })}
    }


}


module.exports = LoginScreen;
