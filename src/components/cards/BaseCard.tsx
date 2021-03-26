import React, {FunctionComponent} from 'react';

export type BaseCardProps = {
    id?: string,
    title: string,
    description?: any,
    details?: string,
    onClick?: any
}
const BaseCard: FunctionComponent<BaseCardProps> = ({id, title, description, details, onClick, children}) => {

    return (<div className="BaseCard" onClick={onClick}>
        <h5 className="Title">{title}</h5>
        {description && <p className="Content">{description}</p>}
        {details &&
        <span className="Details uk-flex uk-flex-middle">
          <span className="ClockIcon" uk-icon="icon: clock; ratio: .5"></span>
            {details}
        </span>}
    </div>)
}

export default BaseCard
