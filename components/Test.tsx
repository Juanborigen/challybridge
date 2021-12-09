import React, { useState } from 'react';
import {element} from "prop-types";



type testProps = {
    title: string,
    subtitle?: string,
    user: {
        username: string,
        password: string
    },
    cosa: any[],
};


const Test = ({title, subtitle, user, cosa}:testProps) => {

    const [texto, setTexto] = useState<string>('');
    const array = ['1',2,3,4,5,{},true];

    cosa.map((el, index) => {

    });

  return(
      <div>
          <h1></h1>
          <h2>{title}</h2>
      </div>
  )
};

export default Test;