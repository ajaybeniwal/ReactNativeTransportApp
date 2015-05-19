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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
    thumbnail: {
        width: 10,
        height: 80,
        marginRight: 10,
        
    },
    rightContainer: {
        flex:1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft:10
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
  
    calendar:{
        backgroundColor:'rgba(1, 10, 15, 0.79)',
        borderRadius:4,
        padding:2,
        marginLeft:10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    calendarDate:{
        color:'white',
        fontSize:10
    },

    tripIcon:{
        width:24,
        height:24,
    },
    invoiceContainer:{
       marginRight:10,
       
    }
   



});   

class Trip extends Component {
    render() {
        return (
           <TouchableHighlight underlayColor='#dddddd'>
                <View>
                    <View style={styles.container}>
                     <View style={[styles.thumbnail,{
                        backgroundColor:this.props.color
                     }]}>
                     </View>
                      <View style={styles.calendar}>
                      <Text style={styles.calendarDate}>13</Text>
                      <Text style={styles.calendarDate}>May'15</Text>
                      </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.author}>{this.props.start}</Text>
                            <Image
                            source={ require('image!trip') }
                            style={[styles.tripIcon]} />
                            <Text style={styles.author}>{this.props.end}</Text>
                        </View>
                        <View style={styles.invoiceContainer}>
                            <View style={styles.amountContainer}>
                            <Text style={styles.author}>$200.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>     
        );
    }
}

module.exports = Trip;