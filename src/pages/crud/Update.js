import React from 'react'
import CustomContainer from '../../components/macro/CustomContainer';
import { Spinner, Row } from 'react-bootstrap';

const Update = () => {
    return (
        <CustomContainer title="Update">
            <Row className="justify-content-center">
                <label className="mr-2">Developing</label>
                <Spinner variant="ice" animation="grow" />
            </Row>
        </CustomContainer>
    )
}

export default Update;
