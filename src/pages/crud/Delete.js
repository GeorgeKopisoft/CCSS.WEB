import React from 'react';
import CustomContainer from '../../components/macro/CustomContainer';
import { Row, Spinner } from 'react-bootstrap';

const Delete = () => {
    return (
        <CustomContainer title="Delete">
            <Row className="justify-content-center">
                <label className="mr-2">Developing</label>
                <Spinner variant="ice" animation="grow" />
            </Row>
        </CustomContainer>
    )
}

export default Delete;
