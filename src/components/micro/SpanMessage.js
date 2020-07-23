import React, { Fragment, useState, useEffect } from 'react'

const SpanMessage = ({ field, maxLength, patternType }) => {

    const [message, setmessage] = useState("");

    useEffect(() => {
        console.log("%cField type:", "color:lime", field);
        if (field !== undefined) {
            switch (field.type) {
                case "requerid":
                    setmessage("This field is requerid.");
                    break;
                case "maxLength":
                    setmessage(`Max legth ${maxLength}.`);
                    break;
                case "pattern":
                    setmessage(`This field is ${patternType} only.`);
                    break;
                default:
                    setmessage("");
                    break;
            }
        }
        else {
            setmessage("");
        }

    }, [field, message]);

    return (
        <Fragment>
            <span className="text-error">{message}</span>
        </Fragment>
    )
}

export default SpanMessage;
