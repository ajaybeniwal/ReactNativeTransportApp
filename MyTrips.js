'use strict';

var React = require('react-native');
var TripList = require('./TripList');
var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor:'grey'
    }
});

class MyTrips extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'My Trips',
            component: TripList
            }}/>            
        );
    }
}

module.exports = MyTrips;