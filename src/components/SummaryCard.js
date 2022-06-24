import React from 'react'

export const SummaryCard = (props) => {
  return (
    <>
    {!props.grams == '' ?   
    < div className="col col-md-3">
        <div className="card summary-card" >
            <form className='box summary-box'>
                <div>
                    <h3>Summary of investment</h3>
                    <p>Current price: 2700 $ per ounce</p>
                    <p>Weight: {props.grams} {props.unitType}</p>
                    <p>Dollars: ${props.dollars}</p>
                    <input type="submit" value="Next" href="#" />
                </div>
            </form>
        </div>
    </div> : 
    <div className="col col-md-3">
        <div className="card summary-card" >
            <form className='box summary-box'>
                <h2> Enter options to view your investment summary
                </h2>
            </form>
        </div>
    </div>}</>
  )
}
