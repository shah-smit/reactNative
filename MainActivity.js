'use strict';


var React = require('react-native');
var {Text,View,TextInput} = React;



class MainActivity extends React.Component {
    render() {
        return<View>
            <Text>Hi Welcome</Text>
        </View>
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

module.exports = MainActivity;

//React.createElement(React.Text, {style: styles.text}, "Hello World!");