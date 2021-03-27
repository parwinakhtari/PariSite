import "./styles.css";
import React from 'react';
import Card from './Card';

export default function Service() {
  return (
    <>
        <div className='my-5 '>
          <h1 className='text-center'> Our Services </h1>
          </div>
    <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto"> 
<div className='row gy-4'>



<Card  imgsrc='https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png' title='Web Development'  />
<Card  imgsrc='https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png' title='App Development'/>
<Card  imgsrc='https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png' title='Product Development'/>
<Card  imgsrc='https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png' title='Software Development'/>
<Card  imgsrc='https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png' title='Digital Marketing'/>
<Card  imgsrc='https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png' title='Analytics'/>
 
</div>
   </div>
          </div>
          </div>
          
    </>

  );
}
