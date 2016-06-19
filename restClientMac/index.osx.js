/**
 * https://github.com/ptmt/react-native-desktop
 */
import React from 'react';
import ReactNative from 'react-native-desktop';
const {
   AppRegistry,
} = ReactNative;
import Store from './stores/MainStore';
import App from './components';

class Wrapped extends React.Component {
    render(){
        //return <Provider store={Store}><App/></Provider>;
        return <App/>;
    }
}
AppRegistry.registerComponent('restClientMac', () => Wrapped);
