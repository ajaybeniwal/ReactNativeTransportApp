'use strict';
var React = require('react-native');
var Profile = require('./Profile');
var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

class MyProfile extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'My Profile',
            component: Profile
            }}/>            
        );
    }
}

module.exports = MyProfile;