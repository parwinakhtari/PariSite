import "./styles.css";
import React from 'react';
import Common from './Common';
import web from '../src/img/home1.svg';

export default function About() {
  return (
    <>
  <Common label='Welcome to About page of'
  imgsrc={web} visit='/contact' btname='Contact Us' />
  
</>
  );
}
