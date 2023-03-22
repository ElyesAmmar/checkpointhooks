import React, {useState}  from 'react';


function FilterM({moviesF,inputS}) {

    return (
        <div>
        {moviesF.filter(el=>el.title.toLowerCase().includes(inputS.toLowerCase()))}
        </div>
    );
  }
  
  export default FilterM;