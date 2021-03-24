import React, {FunctionComponent} from 'react';
import {BaseButtonProps} from "./BaseButton";

const PrimaryButton: FunctionComponent<BaseButtonProps> = ({id, title, onClick, active, children}) => {

    return (<div
        className="PrimaryButton uk-flex uk-flex-middle uk-flex-center"
        onClick={onClick}>
        <div className="Title">{title}</div>
    </div>)
}

export default PrimaryButton
