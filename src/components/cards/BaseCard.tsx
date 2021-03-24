import React, {FunctionComponent} from 'react';

type BaseCardProps = {
    id?: string,
}
const BaseCard: FunctionComponent<BaseCardProps> = ({id, children}) => {

    return (<div className="uk-card uk-card-default uk-card-body uk-width-1-1@m">
        <h3 className="uk-card-title">Default</h3>
        <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.</p>
    </div>)
}

export default BaseCard
