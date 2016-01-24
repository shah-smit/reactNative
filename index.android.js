'use strict';


var React = require('react-native');
var {View,Text,NavigatorIOS,Navigator,NavigatorIOS} = React;

var LoginScreen = require('./LoginScreen');
var MainActivity = require('./MainActivity');

class Trabble extends React.Component {
    render() {
        return <Navigator
            style={{flex:1}}
            initialRoute={{name: 'LoginScreen', component: LoginScreen, index: 0}}
            renderScene={(route, navigator) =>    {
                return React.createElement(route.component, {navigator});
            }} />
    }
}


React.AppRegistry.registerComponent('Trabble', function() { return Trabble });
