import "./styles.css";
import React from 'react';
import Common from './Common';
import web from '../src/img/home2.svg';

export default function Home() {
  return (
    <>
    <Common label='Grow your business with us-' 
    imgsrc={web} visit='/service' btname='Get Started'
    />
  
</>
  );
}
