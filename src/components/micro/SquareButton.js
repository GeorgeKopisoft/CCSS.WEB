import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SquareButton = ({ toUrl, faIcon, text }) => {

    const FONT_STYLE = { fontSize: "xx-large" };

    return (
        <Col xs={6} className="my-3">
            <Link to={toUrl} className="btn btn-block btn-lg btn-outline-action py-5"
                    style={FONT_STYLE}
                >
                <FontAwesomeIcon icon={faIcon}
                    className="mr-2" />{text}
            </Link>
        </Col>
    )
}

export default SquareButton;
