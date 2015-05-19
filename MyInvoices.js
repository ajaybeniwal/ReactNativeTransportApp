'use strict';

var React = require('react-native');
var InvoiceList = require('./InvoiceList');
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

class MyInvoices extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'My Invoices',
            component: InvoiceList
            }}/>            
        );
    }
}

module.exports = MyInvoices;