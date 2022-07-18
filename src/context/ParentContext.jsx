import React from 'react';
import InstrumProvider from './Instrument/InstrumProvider';

const ParentContext = ({ children }) => {
    return (
        <>
            <InstrumProvider>
                {children}
            </InstrumProvider>
        </>
    );
};

export default ParentContext;