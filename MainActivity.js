'use strict';


var React = require('react-native');
var {Component,Text,View,TextInput,TabBarIOS, NavigatorIOS} = React;

var LoginScreen = require('./LoginScreen');

class MainActivity extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            username: this.props.username,
            password: this.props.password
        }
    }

    render() {

        return(
            <View style={styles.view}>
                <Text style={styles.Text}>
                    Welcome {this.state.username}
                </Text>
            </View>);
    }
}

var styles = React.StyleSheet.create({
    view:{
        marginTop: 40
    },
    Text:{
        fontSize: 40
    }
});

module.exports = MainActivity;
