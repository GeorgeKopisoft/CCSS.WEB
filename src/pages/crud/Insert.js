import React from 'react';
import CustomContainer from '../../components/macro/CustomContainer';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import SpanMessage from "../../components/micro/SpanMessage";
import DatePick from '../../components/micro/DatePick';
import Rgx from '../../utils/RegexPattern';
import Formatter from '../../utils/Formatter';
import Swal from 'sweetalert2';

import ServiceConfig from '../../services/KnowledgeConfig';

const Insert = ({history}) => {
    
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const { register, handleSubmit, errors } = useForm();

    const OnHandleClick = (data) => {
        let REQUEST = {
            "tech": {
                "Name": data.tech
            },
            "Description": data.Description,
            "Level": parseInt(data.Level),
            "Since": selectedDate,
            "Active": data.Active
        }
        console.log("data:", REQUEST);

        fetch( ServiceConfig.ForPost(REQUEST) )
            .then(response => response.json())
            .then((result) => {
                
                console.log("result" , result);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'New data created',
                    customClass: { confirmButton: "bg-ok" }
                })
                    .then((res) => {
                        if (res) {
                            history.push("/crud/show");
                            history.go();
                        }
                    });

                // setTimeout(() => {
                //     setloading(false);
                // }, 1500);
            });

    }


    const handleDateChange = (date) => {
        console.log("datepicker:", date);
        setSelectedDate(date);
        if(date !== "Invalid Date") {
            let result = Formatter.GetDateYYYYMMDD(date);
            setSelectedDate(result);
        }
    };


    return (
        <CustomContainer title="INSERT">

            <div className="my-5">
                <Form onSubmit={handleSubmit(OnHandleClick)}>
                    <Form.Group controlId="tech">
                        <Form.Label>Tech name</Form.Label>
                        <Form.Control type="text"
                            placeholder="example react"
                            size="lg"
                            className="bg-transparent border border-ice text-ice"
                            name="tech"
                            ref={register({ requerid: true, maxLength: 20, pattern: Rgx.AlphaNumSpaceUTF8() })}
                        />
                        <SpanMessage field={errors.tech}
                            maxLength={20}
                            patternType="alphanumeic" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea"
                            size="lg"
                            className="bg-transparent border border-ice text-ice"
                            rows="3"
                            name="Description"
                            ref={register({ requerid: true, maxLength: 30, pattern: Rgx.AlphaNumSpaceUTF8() })}
                        />
                        <SpanMessage field={errors.description}
                            maxLength={30}
                            patternType="alphanumeic" />
                    </Form.Group>

                    <Form.Group controlId="level">
                        <Form.Label>Level</Form.Label>
                        <Form.Control type="range"
                            className="bg-action"
                            name="Level"
                            ref={register({ requerid: true })}
                        />
                        <SpanMessage field={errors.level} />
                    </Form.Group>

                    <Form.Group controlId="since">
                        <Form.Label>Since</Form.Label>

                        <DatePick value={selectedDate}
                            onChange={handleDateChange} />

                    </Form.Group>

                    <Form.Group controlId="active">
                        <Form.Check type="checkbox"
                            label="Activate tech"
                            name="Active"
                            ref={register}
                        />
                    </Form.Group>

                    <Button variant="outline-action"
                        size="lg"
                        block
                        className=""
                        type="submit"
                    >
                        Confirm
                    </Button>
                </Form>
            </div>

        </CustomContainer>
    )
}

export default Insert;
