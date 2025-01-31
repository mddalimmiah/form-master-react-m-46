import React, { useState } from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
import { createContext } from 'react';
export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);
const Grandpa = () => {
    const [money, setMoney] =useState(1000);
    const asset = 'diamond';
    return (
        <div className='grandpa'>
            <h2>Grand Pa</h2>
            <p>Net Money : {money}</p>

            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='gold'>
                    <section className='flex'>
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>

        </div>
    );
};

export default Grandpa;

/*

1. create a context and export it (data  ‍সহজে পাঠানোর জন্য কনটেক্সট এপি আই ক্রিয়েট করতে হবে এবং এক্সপোর্ট করতে হবে ব্যবহার করার জন্য)
2. add provider for the  context with a value. value could be anything
3. use Context to access  value in the context api

*/