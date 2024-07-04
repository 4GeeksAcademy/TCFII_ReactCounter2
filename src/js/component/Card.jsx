import React from 'react';

export function Card(props) {
        return (
                <div className="flex justify-center items-center max-w-sm rounded shadow-lg text-white bg-black">
                    <h1 className="text-[50px] text-white font-semibold">{props.theValue}</h1>
                </div>
        );
    }
