import React, { useReducer } from 'react';
import InstrumContext from './InstrumContext';
import clientAxios from '../../config/axios';
import InstrumReducer from './InstrumReducer';
import {
    GET_INSTRUMENTS,
    GET_INSTRUMENT,
    CREATE_INSTRUMENT,
    UPDATE_INSTRUMENT,
    DELETE_INSTRUMENT
} from '../../types';

const InstrumProvider = ({ children }) => {

    const initialProvider = {
        instruments: [],
        instrument: {}
    }
    const [provider, dispatch] = useReducer(InstrumReducer, initialProvider);

    const getInstruments = async () => {
        try {
            const res = await clientAxios.get('http://localhost:4000/api/v1/instrument');
            res && dispatch({ type: GET_INSTRUMENTS, payload: res.data.instruments });
        } catch (error) {
            throw error;
        }
    }

    const getInstrumentById = async id => {
        try {
            const res = await clientAxios.get(`http://localhost:4000/api/v1/instrument/${id}`);
            res && dispatch({ type: GET_INSTRUMENT, payload: res.data.instrument });
        } catch (error) {
            throw error;
        }
    }

    const createInstrument= async instrum => {
        try {
            const res = await clientAxios.post(`http://localhost:4000/api/v1/instrument/`, instrum);
            res && dispatch({ type: CREATE_INSTRUMENT, payload: res.data.instrum });
        } catch (error) {
            throw error;
        }
    }
    const updateInstrument = async instrum => {
        try {
            const res = await clientAxios.put(`http://localhost:4000/api/v1/instrument/${instrum._id}`, instrum);
            res && dispatch({ type: UPDATE_INSTRUMENT, payload: res.data.instrum });
            console.log(res.data)
        } catch (error) {
            throw error;
        }
    }
    const deleteInstrument = async instrumId => {
        try {
            const res = await clientAxios.delete(`http://localhost:4000/api/v1/instrument/${instrumId}`);
            res && dispatch({ type: DELETE_INSTRUMENT, payload: instrumId });
        } catch (error) {
            throw error;
        }
    }

    return (
        <InstrumContext.Provider value={{
            ...provider,
            getInstruments,
            getInstrumentById,
            createInstrument,
            updateInstrument,
            deleteInstrument
        }}>
            {children}
        </InstrumContext.Provider>
    );
};

export default InstrumProvider;