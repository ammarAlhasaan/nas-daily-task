import React, {FunctionComponent} from 'react';

type BaseCardProps = {
    id?: string,
}
const BaseCard: FunctionComponent<BaseCardProps> = ({id, children}) => {

    return (<div>base card</div>)
}

export default BaseCard
