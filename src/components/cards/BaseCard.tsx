import React, {FunctionComponent} from 'react';

type BaseCardProps = {
    id?: string,
}
const BaseCard: FunctionComponent<BaseCardProps> = ({id, children}) => {

    return (<div className="BaseCard">
        <h5 className="Title">Lorem Ipsum is simply dummy text.</h5>
        <p className="Content">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an
            unknown printer took a
            galley of type and scrambled</p>
        <span className="Details">1 min ago | 50 comments</span>
    </div>)
}

export default BaseCard
