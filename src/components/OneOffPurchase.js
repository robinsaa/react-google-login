import React from 'react'
import { SummaryCard } from './SummaryCard'

export const OneOffPurchase = (props) => {

    return (
        <div style={{ marginTop: '10%' }} className='row justify-content-md-center'>
            <div className="col col-md-5">
                <div className="card purchase-card">
                    <form className='box purchase-box'>
                        <h1>One off investment</h1>
                        <p className="text-muted"> Please enter options below</p>
                        <div className='padding10 form-inline justify-content-md-center '>
                            <div>Grams</div>
                            <label className="switch">
                                <input onChange={e => props.updateUnitType()} type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <div>Ounces</div>
                        </div>
                        <input 
                        id="floatingInput" 
                        type="number" 
                        value={props.grams} 
                        placeholder={'In ' + props.unitType}
                        onInput={e => props.updateValuesFromGrams(e.target.value)} 
                        />
                        <div>≈ </div>
                        <input 
                        type="number" 
                        value={props.dollars} 
                        placeholder="In dollars"
                        onInput={e => props.updateValuesFromDollars(e.target.value)} />
                        <div className='row justify-content-md-center' ></div>
                        <div className="col-md-12">
                        </div>
                    </form>
                </div>
            </div>
            <SummaryCard {...props} />
        </div >
    )
}
