'use strict';

var React = require('react-native');
var _invoiceList = require('./mocks/invoice.json');
var Invoice = require('./Invoice')
var {
    Image,
    StyleSheet,
    Text,
    View,
    Component,
    ListView,
    TouchableHighlight,
    ActivityIndicatorIOS
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
    thumbnail: {
        width: 20,
        height: 81,
        marginRight: 10,
        
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
    separator: {
       height: 1,
       backgroundColor: '#dddddd'
   },
   listView: {
      
   },
   loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   }
    

});

class InvoiceList extends Component {
    constructor(props) {
       super(props);
       this.state = {
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
    }

    renderInvoice(invoice) {
        return (
                 <Invoice {...invoice}></Invoice>
            )
    }

    componentDidMount() {
         this.setState({
            dataSource: this.state.dataSource.cloneWithRows(_invoiceList)
        });
    }
    render() {
        return (
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderInvoice.bind(this)}
            style={styles.listView}
            />           
        );
    }
}

module.exports = InvoiceList;