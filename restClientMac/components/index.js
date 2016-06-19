import React from 'react';
import ReactNative from 'react-native-desktop';
const {
    View,
    Text
} = ReactNative;

export default class Root extends React.Component {
    render(){
        return (
            <View>
                <Text>It worksworks!</Text>
            </View>
        )
    }
}