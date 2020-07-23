import React from 'react'
import CustomContainer from '../../components/macro/CustomContainer';
import { Row } from 'react-bootstrap';
import { faListAlt, faTrashAlt, faEdit, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import SquareButton from '../../components/micro/SquareButton';

const CrudManager = () => {
    return (
        <CustomContainer title="CRUD MANAGER"
            isFluid
        >
            <Row className="justify-content-center py-3">
                
                { OPTION_LIST.map( (item) => {
                    return <SquareButton key={item.id} 
                        toUrl={item.toUrl}
                        faIcon={item.faIcon}
                        text={item.text}
                    />
                })}

            </Row>
        </CustomContainer>
    )
}

const OPTION_LIST = [
    {id:"squareCrud_1", toUrl:"crud/insert", faIcon:faKeyboard, text:"insert"},
    {id:"squareCrud_2", toUrl:"crud/show", faIcon:faListAlt, text:"show"},
    {id:"squareCrud_3", toUrl:"crud/update", faIcon:faEdit, text:"update"},
    {id:"squareCrud_4", toUrl:"crud/delete", faIcon:faTrashAlt, text:"delete"},
];

export default CrudManager;
