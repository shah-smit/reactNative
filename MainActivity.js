'use strict';


var React = require('react-native');
var {Text,View,TextInput,TabBarIOS, NavigatorIOS} = React;

var LoginScreen = require('./LoginScreen');

class MainActivity extends React.Component {

    render() {

        return(
            <View>
                <Text>
                    {LoginScreen.constructor.username}
                </Text>
            </View>);
    }
}

var Styles = React.StyleSheet.create({

});

module.exports = MainActivity;
