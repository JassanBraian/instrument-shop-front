import React, { useState, useContext } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import InstrumContext from '../../../context/Instrument/InstrumContext';
import InstrumModUpd from './InstrumModUpd';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/fontawesome-free-solid';

const InstrumFunc = ({ instrumId }) => {

    const [showModUpd, setShowModUpd] = useState(false);

    const { getInstrumentById, deleteInstrument } = useContext(InstrumContext);

    return (
        <>
            <ButtonGroup>
                <Button
                    variant='warning'
                    onClick={() => {
                        getInstrumentById(instrumId);
                        setShowModUpd(true);
                    }}
                >
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Button>

                <Button
                    variant='danger'
                    onClick={() => {
                        Swal.fire({
                            title: 'Do you want to delete the instrument?',
                            showCancelButton: true,
                            confirmButtonText: 'Delete'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                deleteInstrument(instrumId);
                                Swal.fire('Deleted!', '', 'success');
                            } else if (result.isDenied) {
                                Swal.fire('Changes are not saved', '', 'info');
                            }
                        });
                    }}
                >
                    <FontAwesomeIcon icon={faTrashAlt} className="text-dark" />
                </Button>
            </ButtonGroup>

            <InstrumModUpd
                showModUpd={showModUpd}
                setShowModUpd={setShowModUpd}
            />
        </>
    );
};

export default InstrumFunc;