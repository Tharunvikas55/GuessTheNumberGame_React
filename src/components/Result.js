import React, { useEffect } from 'react'

const Result = ({secretNum,term}) => {

  let res;
  if(term){
    if(term<secretNum)
      res="Lower";
    else if(term>secretNum)
      res="Higher";
    else if(term ==secretNum)
      res="Amazing! Correct"
    else
    res="Enter a valid input";
  }
  useEffect(() => {
    if (term == secretNum) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or updates
    }
  }, [term, secretNum]);
  return (
    <div>
      <h3>You Guessed :{res}</h3>
    </div>
  )
}

export default Result
