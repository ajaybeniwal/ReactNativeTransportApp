'use strict';

var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    NavigatorIOS,
    Image,
    SwitchIOS,
    Component
   } = React;

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        backgroundColor:'#F1F1F1',
        flex: 1,

    },
    passContainer:{
        flex:0,
        backgroundColor:'white',
        borderRadius:2,
        margin:10,
        padding:20,
        shadowColor:'grey',
        shadowRadius:3,
        shadowOpacity:1,
        shadowOffset:{width:3,height:3},
       
    },

    passInformation:{
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },

    passName:{
    fontSize: 16,
    flex: 1,
    paddingLeft: 5,
    fontWeight:'bold'
    },

    passRiders:{
    flex: 0.25,
    alignItems: 'center',
    },

    passRideText:{
        fontSize:14,
        color:'grey',
        fontWeight:'bold'
    },

    base:{
        height:290,
        flex:1,
        
    },
    switchContainer:{
        margin:10,
        padding:20,
    }

});

class BarCode extends Component {
    constructor(props) {
       super(props);
       this.state = {
           trueSwitchIsOn: true,
       };
    }
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.passContainer}>
            <Image
            style={styles.base}
            source={{uri: 'https://chart.googleapis.com/chart?cht=qr&chl=9871116244&choe=UTF-8&chs=200x200'}}/>
            <View style={styles.passInformation}>
            <Text style={ styles.passName}>
            Acme-10 Day Pass
            </Text>
            <View style={ styles.passRiders}>
            <Text style={ styles.passRideText}>Rides</Text>
            <Text style={ styles.passRideText}>10</Text>
            </View>
            </View>
            </View>
            </View>            
        );
    }
}

module.exports = BarCode;