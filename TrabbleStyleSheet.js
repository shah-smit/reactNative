/**
 * Created by Smit on 19/1/16.
 */

'use strict';


var React = require('react-native');



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

module.exports = styles;