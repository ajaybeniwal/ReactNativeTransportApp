'use strict';

var React = require('react-native');

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
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        
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

   tripIcon:{
        width:24,
        height:24,
        marginRight:10
    },
  
    calendar:{
        flex:1,
        height:80,
        flexDirection: 'column',
        marginLeft:10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    invoiceContainer:{
       flexDirection: 'column',
        marginRight:10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    amountPaid:{
        fontSize:14,
        fontWeight:'bold',
    }
});   

class Invoice extends Component {
    
    render() {
        var paidText = this.props.paid==='N'?"Unpaid":"Paid";
        return (
           <TouchableHighlight underlayColor='#dddddd'>
            <View>
                <View style={styles.container}>
                    <View style={styles.calendar}>
                    <View>
                       <Text style={styles.author}>{this.props.invoiceid}</Text>
                       <Text style={styles.author}>{this.props.start}-{this.props.end}</Text>
                    </View>
                    </View>
                    <View style={styles.invoiceContainer}>
                        <View>
                        <Text style={styles.author}>$200.00</Text>
                        <Text style={[styles.amountPaid,{color:this.props.paid==='Y'?'green':'pink'}]}>{paidText}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.separator} />
            </View>
            </TouchableHighlight>     
        );
    }
}

module.exports = Invoice;