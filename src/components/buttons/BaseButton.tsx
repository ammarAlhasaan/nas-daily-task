import React, {FunctionComponent} from 'react';

type BaseButtonProps = {
    id?: string,
}
const BaseButton: FunctionComponent<BaseButtonProps> = ({id, children}) => {

    return (<button>base button</button>)
}

export default BaseButton
