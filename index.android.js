'use strict';


var React = require('react-native');
var {View,Text} = React;

var LoginScreen = require('./LoginScreen');

class Trabble extends React.Component {
    render() {
        return <LoginScreen></LoginScreen>
    }
}

var Styles = React.StyleSheet.create({

});

React.AppRegistry.registerComponent('Trabble', function() { return Trabble });
