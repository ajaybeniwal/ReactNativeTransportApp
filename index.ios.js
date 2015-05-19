'use strict';

var React = require('react-native');
var MyPass=require('./MyPass');
var MyTrips=require('./MyTrips');
var MyInvoices=require('./MyInvoices');
var MyProfile = require('./MyProfile');
var {
    AppRegistry,
    TabBarIOS,
    Text,
    View,
    Component
   } = React;

class TransitFareApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'mypass'
        };
    }
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
            <TabBarIOS.Item
                    selected={this.state.selectedTab === 'mypass'}
                    icon={ require('image!dashboard') } title="MyPass"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'mypass'
                        });
                    }}>
                    <MyPass/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'mytrips'}
                    icon={ require('image!bus') } title="MyTrips"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'mytrips'
                        });
                    }}>
                    <MyTrips/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'payment'}
                    icon={ require('image!payment') } title="MyInvoices"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'payment'
                        });
                    }}>
                    <MyInvoices/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'profile'}
                    icon={ require('image!account') } title="MyAccount"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'profile'
                        });
                    }}>
                    <MyProfile></MyProfile>
                </TabBarIOS.Item>
                
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('TransitFareApp', () => TransitFareApp);