import React, { Fragment } from 'react';
import CustomContainer from '../../components/macro/CustomContainer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const Help = () => {
    return (
        <Fragment>
            <CustomContainer title="Help">
                <p className="text-center my-5 h3">
                    Navigate to crud option
                </p>

                <p className="text-center cursor-pointer">
                    
                    <Link to={"/crud"}
                        className="btn btn-outline-action btn-block btn-lg"
                    >
                        Go to crud
                        <FontAwesomeIcon icon={faReply}
                            className="ml-2"
                        />
                </Link>
                </p>

            </CustomContainer>
        </Fragment>
    )
}

export default Help;
