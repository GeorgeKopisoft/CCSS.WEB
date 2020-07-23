import React, { Fragment } from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

import Formatter from '../../utils/Formatter';

const CustomCard = ({ item }) => {
    return (
        <Fragment>
            <Card className="border border-secondary rounded bg-transparent my-3">
                <Card.Body>
                    <Card.Title className="text-ice">{item.tech.name}</Card.Title>
                    <Card.Text>
                        <p>
                            {item.description}
                        </p>
                        <small>{Formatter.GetDate(item.since)}</small>
                        <div className="my-3">
                            <ProgressBar now={item.level}
                                label={`${item.level}%`} 
                                variant="ice"
                                animated
                                className="bg-dark"
                                />
                        </div>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default CustomCard;
