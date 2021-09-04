import React, { Component } from 'react';


 function Dog(props){

  
     return (
       <>
        <div className="dog has-text-weight-bold">
          <h2>{props.breed}</h2>
          <p>{props.name}</p>
          <>{props.age}</>
        <div><img className="dog_img" width="100%" src={props.img } alt=" " /></div>
          <>{props.shelter_id}</>
      </div>
      </>
      )
    };
 
 export default Dog;