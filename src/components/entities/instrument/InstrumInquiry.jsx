import React, { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import InstrumFunc from './InstrumFunc';
import InstrumContext from '../../../context/Instrument/InstrumContext';

const InstrumInquiry = () => {
    const { instruments, getInstruments } = useContext(InstrumContext);

    useEffect(() => {
        getInstruments();
    }, []);

    // useEffect(() => {
    //     getInstruments();
    // }, [instruments]);


    return (
        <>
            <div className='app'>
                <Table striped bordered hover className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instruments.map((instrum, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{instrum.description}</td>
                                    <td>{instrum.brand}</td>
                                    <td>${instrum.price}</td>
                                    <td className='text-center'>
                                        {<InstrumFunc instrumId={instrum._id} />}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default InstrumInquiry;