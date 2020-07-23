import React, { Fragment } from 'react'
import CustomContainer from '../../components/macro/CustomContainer'
import { Row, Col } from 'react-bootstrap';

import image from '../../assets/images/bg_space.png';

const NotFound = ({history}) => {
    
    const onHandleClick = () => {
        history.goBack();
    }

    return (
        <Fragment>
            <CustomContainer isFluid
                hasCols={true}
            >
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} xl={7}>
                        <div className="cursor-pointer"
                            onClick={onHandleClick}>
                            <img src={image}
                                alt="not found"
                                className="w-100"
                            />
                        </div>
                    </Col>
                </Row>
            </CustomContainer>
        </Fragment>
    )
}

export default NotFound;
