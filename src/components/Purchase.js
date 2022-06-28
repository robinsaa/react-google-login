import React, { useEffect, useState } from 'react'
import { OneOffPurchase } from './OneOffPurchase';

export const Purchase = (props) => {

    const [grams, setGrams] = useState('');
    const [dollars, setDollars] = useState("");
    const [unitType, setUnitType] = useState(() => "Grams");

    //If unit type is updated we need to update the weight measurement
    useEffect(() => {
        if (!grams == '') {
            updateWeight();
        }
    }, [unitType]);

    function updateUnitType() {
        (unitType == 'Oz') ? setUnitType("Grams") : setUnitType("Oz")
    }
    
    //Update weight according to unit type selected
    function updateWeight() {
        (unitType == 'Grams') ?
            setGrams((grams * 28.35).toFixed(3)) :
            setGrams((grams / 28.35).toFixed(3))
    };

    //Update dollar amount when weight is changed
    const updateValuesFromGrams = (e) => {
        const multiplier = (unitType == 'Grams') ? (2700 / 28.35) : (2700 / 1)
        if (e == "") {
            setDollars("")
            setGrams('')
        }

        else {
            setGrams(e)
            const dollars = e * multiplier
            setDollars(dollars.toFixed(2))
        }
    }

    //Update weight amount when dollar is changed
    const updateValuesFromDollars = (e) => {
        const multiplier = (unitType == 'Grams') ? (2700 / 28.35) : (2700 / 1)

        if (e == "") {
            setGrams("")
            setDollars("")
        }
        else {
            setDollars(e)
            const grams = e / multiplier
            setGrams(grams.toFixed(3))
        }
    }

    return (
        <div style = {{height: '80%'}} className='container'>
            <OneOffPurchase 
            updateValuesFromGrams={updateValuesFromGrams} 
            updateValuesFromDollars={updateValuesFromDollars}
            updateUnitType = {updateUnitType}
            dollars = {dollars}
            grams = {grams}
            unitType = {unitType}
            handleOrder = {props.handleOrder}
            />
        </div>
    )
}


// const [oneOff, setOneOff] = useState(false);
//     const [oneOffButton, setOneOffButton] = useState(false);
//     const [reacurring, setReacurring] = useState(false);
//     const [reacurringButton, setReacurringButton] = useState(false);

//     function handleOneOff (e) {
        
//         setOneOff(true)
//         setReacurring(false)
//         setOneOffButton(true)
//         setReacurringButton(false)
//     }

//     function handleReacurring () {
//         setReacurring(true)
//         setOneOff(false)
//         setReacurringButton(true)
//         setOneOffButton(false)
//     }

//     function handleNext () {

//     }