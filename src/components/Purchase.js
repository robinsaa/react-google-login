import React, { useEffect, useState } from 'react'
import { OneOffPurchase } from './OneOffPurchase';

export const Purchase = () => {

    const [grams, setGrams] = useState('');
    const [gramsFormatted, setGramsFormatted] = useState("");
    const [dollars, setDollars] = useState("");
    const [dollarsFormatted, setDollarsFormatted] = useState("");
    const [unitType, setUnitType] = useState(() => "Grams");

    useEffect(() => {
        if (!grams == '') {
            updateWeight();
        }
    }, [unitType]);

    function updateUnitType() {
        (unitType == 'Oz') ? setUnitType("Grams") : setUnitType("Oz")
    }
    
    function updateWeight() {
        (unitType == 'Grams') ?
            setGrams((grams * 28.35).toFixed(3)) :
            setGrams((grams / 28.35).toFixed(3))
    };

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