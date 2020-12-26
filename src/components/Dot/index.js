import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function Dot( props ) {
    if (props.selected === true) {
        return (
            <TouchableOpacity style={[styles.container, styles.selected,{ backgroundColor: props.color } ]} />
            );
        } else {
            return (
            <TouchableOpacity style={[styles.container, { backgroundColor: props.color } ]} />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.050,
        height: Dimensions.get('window').width * 0.050,
        borderRadius: Dimensions.get('window').width * 0.050 / 2,
        marginHorizontal: '5.5%',
        elevation: 5,
        alignSelf: 'center',
    },
    selected: {
        width: Dimensions.get('window').width * 0.090,
        height: Dimensions.get('window').width * 0.090,
        borderRadius: Dimensions.get('window').width * 0.090 / 2,
        marginHorizontal: '5.5%',
        alignSelf: 'center',
        elevation: 7,
    }
})