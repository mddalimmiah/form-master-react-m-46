import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
           <section className='flex'>
           <Cousin name={'rafsan'} asset={asset}></Cousin>
           <Cousin name={'Mamun'}></Cousin>
           </section>
        </div>
    );
};

export default Uncle;