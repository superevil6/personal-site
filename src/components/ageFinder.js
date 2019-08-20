import React from 'react';

function AgeFinder() {
    const year = (new Date()).getFullYear();
    const birthDay = 262;
    const getAge = () => {
      let now = new Date();
      let start = new Date(now.getFullYear(), 0, 0);
      let difference = now - start;
      let oneDay = 1000 * 60 * 60 * 24;
      let day = Math.floor(difference / oneDay);
      if(day > birthDay){
        return year - 1989;
      }
      else{
        return year - 1989 - 1;
      }
    }
  return <span>{getAge()}</span>;
}

export default AgeFinder;