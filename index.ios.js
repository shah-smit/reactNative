'use strict';


var React = require('react-native');
var {Text,View,TextInput,Navigator} = React;

var LoginScreen = require('./LoginScreen');
var MainActivity = require('./MainActivity');

class Trabble extends React.Component {
    render() {
        return <LoginScreen></LoginScreen>
    }
}

var Styles = React.StyleSheet.create({
    loginText: {
        fontSize: 50,
        color: "blue",
        marginTop: 100,
        alignSelf: "center"
    },
    usernameText: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10
    },
    passwordText: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10
    }
});

React.AppRegistry.registerComponent('Trabble', function() { return Trabble });

//React.createElement(React.Text, {style: styles.text}, "Hello World!");