import React, { Component } from 'react';
import propTypes from "prop-types";
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class RoundedButton extends Component {
    render() {
        const { text } = this.props
        return (
            <TouchableHighlight style={styles.wrapper}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableHighlight>
        )
    }
}

RoundedButton.propTypes = {
    text: propTypes.string.isRequired,
}


const styles = StyleSheet.create({
    wrapper: {
        padding: 15, 
        borderWidth: 1, 
        borderColor: 'black', 
        borderRadius: 20
    },
    buttonText: {
        fontSize: 16, 
        textAlign: "center"
    }
});