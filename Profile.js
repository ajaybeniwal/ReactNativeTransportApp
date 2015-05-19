'use strict';

var React = require('react-native');
var REQUEST_URL = 'http://api.randomuser.me/';
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
        marginTop: 65,
        flex: 1,
        backgroundColor:'white'

    },
    profileContainer:{
        height:200,
        backgroundColor:'#E91E63',
        alignItems: 'center',
        justifyContent: 'center'
    },

    thumbnail:{
        height:80,
        width:80,
        borderRadius:40,
        marginBottom:10
    },

     loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },
   name:{
    fontSize:20,
    color:'white'
   },

   address:{
    fontSize:15,
    color:'brown'

   },

   tripsContainer:{
    alignItems: 'center',
    justifyContent: 'center'
   },
   trips:{
    fontSize:15,
    color:'white'
    },

   detailsContainer:{
    height:50,
    backgroundColor:'#F06292',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center'
   },
   profileDetailsContaine:{
    flex:1,
    padding:10
   },
   detailRow:{
    paddingBottom:10,
    paddingTop:10,
    borderBottomColor: '#000033',
    borderBottomWidth: 1,
   },

   topLabel:{
    fontSize:12,
    color:'#FF9800'
   },
   descLabel:{
    color: '#656565',
    fontSize:15
   }

});



class Profile extends Component {
    constructor(props) {
       super(props);
       this.state = {
           isLoading: true,
       };
    }
    renderLoadingView() {
    return (
        <View style={styles.loading}>
            <ActivityIndicatorIOS
                size='large'/>
            <Text>
                Loading Profile...
            </Text>
        </View>
    );
    }

    componentDidMount() {
    this.fetchData();
    }
    fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
        this.setState({
            userProfile:responseData.results[0],
            isLoading: false
        });
    })
    .done();
    }
    render() {
        if (this.state.isLoading) {
           return this.renderLoadingView();
       }
       var userProfile =this.state.userProfile.user;
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Image
                                    source={{uri: userProfile.picture.thumbnail}}
                                    style={styles.thumbnail} />
                    <Text style={styles.name}>{userProfile.name.first} {userProfile.name.last}</Text>    
                    <View>               
                    <Text style={styles.address}>{userProfile.location.city} {userProfile.location.state} </Text> 
                    </View>               
                </View>
                <View style={styles.detailsContainer}>
                     <View style={styles.tripsContainer}>
                     <Text style={styles.trips}>No Of Trips</Text>
                     <Text style={styles.trips}>234</Text>
                     </View>
                </View>
                <View style={styles.profileDetailsContaine}>
                    <View style={styles.detailRow}>
                    <Text style={styles.topLabel}>Email</Text>
                     <Text style={styles.descLabel}>{userProfile.email}</Text>
                    </View>
                    <View style={styles.detailRow}>
                    <Text style={styles.topLabel}>Phone</Text>
                     <Text style={styles.descLabel}>{userProfile.phone}</Text>
                    </View>
                    <View style={styles.detailRow}>
                    <Text style={styles.topLabel}>Mobile</Text>
                     <Text style={styles.descLabel}>{userProfile.cell}</Text>
                    </View>
                </View>
            </View>            
        );
    }
}

module.exports = Profile;