'use strict';

var React = require('react-native');
var _tripList = require('./mocks/trips.json');
var Trip = require('./Trip')
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

class TripList extends Component {
    constructor(props) {
       super(props);
       this.state = {
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
    }

    renderTrip(trip) {
        return (
                 <Trip {...trip}></Trip>
            )
    }

    componentDidMount() {
         this.setState({
            dataSource: this.state.dataSource.cloneWithRows(_tripList)
        });
    }
    render() {
        return (
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderTrip.bind(this)}
            style={styles.listView}
            />           
        );
    }
}

module.exports = TripList;