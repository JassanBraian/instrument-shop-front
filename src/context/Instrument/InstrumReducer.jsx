import {
    GET_INSTRUMENTS,
    GET_INSTRUMENT,
    CREATE_INSTRUMENT,
    UPDATE_INSTRUMENT,
    DELETE_INSTRUMENT
} from "../../types";

const InstrumReducer = (provider, action) => {
    switch (action.type) {
        case GET_INSTRUMENTS:
            return {
                ...provider,
                instruments: action.payload,
            }
        case GET_INSTRUMENT:
            return {
                ...provider,
                instrument: action.payload,
            }
        case CREATE_INSTRUMENT:
            return {
                ...provider,
                instruments: [...provider.instruments, action.payload],
            }
        case UPDATE_INSTRUMENT:
            console.log('a1', provider.instruments)
            return {
                ...provider,
                instruments: provider.instruments.map(instrum =>
                    instrum._id === action.payload._id ? action.payload : instrum),
            }
        case DELETE_INSTRUMENT:
            return {
                ...provider,
                instruments: provider.instruments.filter(instrum =>
                    instrum._id !== action.payload),
            }
        default:
            return provider;
    }
};

export default InstrumReducer;