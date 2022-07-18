import React, { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import InstrumFunc from './InstrumFunc';
import InstrumContext from '../../../context/Instrument/InstrumContext';
import '../../../css/entities/instrument.css'

const InstrumInquiry = () => {
    const { instruments, getInstruments } = useContext(InstrumContext);

    useEffect(() => {
        getInstruments();
    }, []);

    return (
        <>
            <div className='app'>
                <Table striped bordered hover className='table table-dark'>
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