import React, { Fragment, useEffect, useState } from 'react';
import CustomContainer from '../../components/macro/CustomContainer';

import ServiceConfig from '../../services/KnowledgeConfig';
import CustomCard from '../../components/macro/CustomCard';
import { Spinner, Row } from 'react-bootstrap';

const Show = () => {

    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {

        fetch( ServiceConfig.ForGetAll() )
            .then(response => response.json())
            .then((result) => {
                setdata(result);

                setTimeout(() => {
                    setloading(false);
                }, 1500);
            });

    }, [loading]);

    return (
        <Fragment>
            <CustomContainer title="SHOW ALL">
                {loading &&
                    <Row className="justify-content-center">
                        <Spinner variant="ice" animation="grow" />
                    </Row>
                }
                {!loading &&
                    data.map((item) => {
                        return (
                            <CustomCard item={item} key={item.id}/>
                        )
                    })
                }
            </CustomContainer>
        </Fragment>
    )
}

export default Show;
