import React, { useState } from 'react'
import { Keyboard, View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        minHeight: 400,
        fontFamily: 'Nunito-Bold',
        shadowColor: "#000000",
        shadowOffset: {
            width: 8,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 40
    },
    innerContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        margin: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
        color: 'black',
        fontFamily: 'Nunito-Bold',

    },
    input: {
        height: 40,
        width: 300,
        margin: 10,
        marginHorizontal: 30,
        borderWidth: 1,
        borderColor: '#ddd',
        color: 'black',
        borderRadius: 4,
        padding: 10,
        fontFamily: 'Nunito-Bold',
    },
    button: {
        backgroundColor: '#383838',
        padding: 10,
        borderRadius: 6,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Nunito-Bold',

    },
    result: {
        marginTop: 20,
        backgroundColor: 'green',
        color: 'white',
        padding: 10,
        borderRadius: 13,
        maxWidth: 350,
        minWidth: 230,
        textAlign: 'center',
        fontFamily: 'Nunito-Bold',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    clearButton: {
        backgroundColor: 'gray',
        marginLeft:5, // or any other color,
    },
});
export default function Mileagecalc() {
    const [distance, setDistance] = useState('');
    const [petrolPrice, setPetrolPrice] = useState('');
    const [amountSpent, setAmountSpent] = useState('');
    const [mileage, setMileage] = useState(0);



    const calculateMileage = () => {
        Keyboard.dismiss();
        if (!distance || !petrolPrice || !amountSpent) {
            setMileage('Please enter all values');
            return;
        }

        const litres = parseFloat(petrolPrice) > 0 ? amountSpent / petrolPrice : 0;
        const calculatedMileage = litres > 0 ? distance / litres : 0;
        setMileage(calculatedMileage.toFixed(2));
    };
    const clearInputs = () => {
        setDistance('');
        setPetrolPrice('');
        setAmountSpent('');
        setMileage(0);
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vehicle Mileage Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Total Distance Driven (km)"
                placeholderTextColor="#888"
                keyboardType="numeric"
                value={distance}
                onChangeText={setDistance}
            // onChangeText={(text) => {
            //     // Allow only numbers to be eed
            //     const numericText = text.replace(/[^0-9]/g, '');
            //     setDistance(numericText);
            //   }}
            />
            <TextInput
                style={styles.input}
                placeholder="Petrol Price per Litre"
                keyboardType="numeric"
                placeholderTextColor="#888"
                value={petrolPrice}
                onChangeText={setPetrolPrice}
            />
            <TextInput
                style={styles.input}
                placeholder="Total Amount Spent"
                placeholderTextColor="#888"
                keyboardType="numeric"
                value={amountSpent}
                onChangeText={setAmountSpent}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={calculateMileage} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>Calculate Mileage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearInputs} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
            </View>
            {/* <TouchableOpacity style={styles.button} onPress={calculateMileage} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Calculate Mileage</Text>
            </TouchableOpacity> */}
            {/* <Text style={styles.result}>{mileage ? `Mileage: ${mileage} km/litre` : ''}</Text> */}
            <Text style={styles.result}>
                {isNaN(mileage) ? mileage : `Mileage: ${mileage} km/litre`}
            </Text>
        </View>
    )
}
