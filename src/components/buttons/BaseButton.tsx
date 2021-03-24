import React, {FunctionComponent} from 'react';

type BaseButtonProps = {
    id?: string,
    title: string,
    onClick: any,
    active?: boolean
}
const BaseButton: FunctionComponent<BaseButtonProps> = ({id, title, onClick, active, children}) => {

    return (<button
        className={active ? "BaseButton BaseButtonActive" : "BaseButton"}
        onClick={onClick}>{title}</button>)
}

export default BaseButton
