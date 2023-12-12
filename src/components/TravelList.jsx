import React, { useState } from 'react';


const TravelList = (props) => {
    const plans = props.plans;
    console.log(props,plans)

    return ( 
        <div className="plan-ctn"> 
        {plans.map((onePlan,dest,cost) => {
            return (
            <div key={onePlan.id}> 
              <h4 key={dest.id}>{onePlan.destination}</h4>
              <p key={cost.id}>{onePlan.totalCost}</p>

              {onePlan.totalCost <= 350 ? <label className='labelDeal'>Great Deal</label> : undefined}
              {onePlan.totalCost >= 1500 ? <label className='labelPremium'>Premium</label> : undefined}

              <img className="img" src={onePlan.image} alt=""/>
              <button onClick>Remove</button>
            </div>  
          )
        })}
      </div>

    );
}
 
export default TravelList;





