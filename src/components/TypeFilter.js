import React from 'react';

const TypeFilter = props => {
  return (
    <div>
    {'Filter by Class:  '}
      <select value={props.value} onChange={props.filter}>
        <option value='All'></option>
        <option value='Assault'>Assault</option>
        <option value='Defender'>Defender</option>
        <option value='Support'>Support</option>
      </select>
      <br/>
      <br/>
    </div>
  )
}

export default TypeFilter;
