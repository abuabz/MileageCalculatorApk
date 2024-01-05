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
        width: 270,
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
        marginLeft: 5, // or any other color,
    },
});
export default function SpentCalc() {
    const [totalDistance, setTotalDistance] = useState('');
    const [avgPetrolPrice, setAvgPetrolPrice] = useState('');
    const [averageMileage, setAverageMileage] = useState('');
    const [spentPrice, setSpentPrice] = useState("Price: ₹0.00");




    // const calculateSpentFuel = () => {
    //     if (totalDistance && avgPetrolPrice && averageMileage) {
    //         const totalFuelUsed = totalDistance / averageMileage;
    //         const totalCost = totalFuelUsed * avgPetrolPrice;
    //         setSpentPrice(`₹${totalCost.toFixed(2)}`);
    //     } else {
    //         setSpentPrice('Please enter all values.');
    //     }
    // };

    const clearInputs = () => {
        setTotalDistance('');
        setAvgPetrolPrice('');
        setAverageMileage('');
        setSpentPrice("Price: ₹0.00");
        Keyboard.dismiss();
    };
    const calculateSpentFuel = () => {
        Keyboard.dismiss();
        if (!totalDistance || !avgPetrolPrice || !averageMileage) {
            setSpentPrice('Please enter all values.');
            return;
        }

        const totalFuelUsed = parseFloat(totalDistance) / parseFloat(averageMileage);
        const totalCost = totalFuelUsed * parseFloat(avgPetrolPrice);
        setSpentPrice(`Price: ₹${totalCost.toFixed(2)}`);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vehicle Fuel Spent Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Total Distance Driven (km)"
                placeholderTextColor="#888"
                keyboardType="numeric"
                value={totalDistance}
                onChangeText={setTotalDistance}
            />
            <TextInput
                style={styles.input}
                placeholder="Average Fuel Price/litre"
                placeholderTextColor="#888"
                keyboardType="numeric"
                value={avgPetrolPrice}
                onChangeText={setAvgPetrolPrice}
            />
            <TextInput
                style={styles.input}
                placeholder="Average Mileage"
                placeholderTextColor="#888"
                keyboardType="numeric"
                value={averageMileage}
                onChangeText={setAverageMileage}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={calculateSpentFuel} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>Calculate Spent Price</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearInputs} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={calculateMileage} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>Calculate Mileage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearInputs} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
            </View> */}

            <Text style={styles.result}>{spentPrice}</Text>
        </View>
    )
}
