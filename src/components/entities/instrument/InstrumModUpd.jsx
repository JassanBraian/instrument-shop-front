import React, { useEffect, useState, useContext } from 'react';
import { Modal, Form, Button, ButtonGroup } from 'react-bootstrap';
import InstrumContext from '../../../context/Instrument/InstrumContext';

const InstrumModUpd = ({ showModUpd, setShowModUpd }) => {

    const { instrument, updateInstrument } = useContext(InstrumContext);

    const initialValue = {
        description: '',
        brand: '',
        price: 0.0
    }
    const [formInstrum, setFormInstrum] = useState(initialValue);
    const { description, brand, price } = formInstrum;

    useEffect(() => {
        Object.keys(instrument).length > 0
            && setFormInstrum(instrument);
    }, [instrument]);

    const handleOnSubmit = e => {
        e.preventDefault();
        updateInstrument(formInstrum);
        setShowModUpd(false);
    }

    const handleOnChange = e => {
        setFormInstrum({
            ...formInstrum,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <Modal
                show={showModUpd}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Instrument
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                name="description"
                                type="text"
                                placeholder="Enter description"
                                minLength='10'
                                maxLength='50'
                                value={description}
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                name="brand"
                                type="text"
                                placeholder="Enter brand"
                                minLength='2'
                                maxLength='30'
                                value={brand}
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                name="price"
                                type="number"
                                placeholder="Enter price"
                                value={price}
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup>
                        <Button variant='success' onClick={handleOnSubmit}>Save</Button>
                        <Button variant='danger' onClick={() => setShowModUpd(false)}>Close</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default InstrumModUpd;