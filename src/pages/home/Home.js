import React, { Fragment } from 'react';
import CustomContainer from '../../components/macro/CustomContainer';
import { Row, Col } from 'react-bootstrap';
import SquareButton from '../../components/micro/SquareButton';
import { faLifeRing, faCode } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <Fragment>

            <CustomContainer
                isFluid
                hasCols={true}
                rowClass={""}
                title="WELCOME"
            >
                <Row className="justify-content-center py-3">
                    <Col xs={12} md={6}>
                        <Row>
                            {OPTION_LIST.map((item) => {
                                return <SquareButton key={item.id}
                                    toUrl={item.toUrl}
                                    faIcon={item.faIcon}
                                    text={item.text}
                                />
                            })}
                        </Row>
                    </Col>
                </Row>
            </CustomContainer>
        </Fragment>
    )
}

const OPTION_LIST = [
    { id: "squareHome_1", toUrl: "crud", faIcon: faCode, text: "crud" },
    { id: "squareHome_2", toUrl: "help", faIcon: faLifeRing, text: "help" },
];

export default Home;
