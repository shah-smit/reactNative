'use strict';


var React = require('react-native');
var {View,Text,NavigatorIOS,Navigator} = React;

var LoginScreen = require('./LoginScreen');
var MainActivity = require('./MainActivity');

class Trabble extends React.Component {
    render() {
        return <LoginScreen></LoginScreen>
    }
}

var Styles = React.StyleSheet.create({

});

React.AppRegistry.registerComponent('Trabble', function() { return Trabble });
