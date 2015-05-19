'use strict';

var React = require('react-native');
var BarCode = require('./BarCode');

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

class MyPass extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'My Pass',
            component: BarCode
            }}/>            
        );
    }
}

module.exports = MyPass;