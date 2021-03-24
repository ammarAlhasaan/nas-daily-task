import React, {FunctionComponent} from 'react';

type StoriesItemProps = {
    id?: string,
    title: string,
    onClick: any,
    active?: boolean
}
const StoriesItem: FunctionComponent<StoriesItemProps> = ({id, title, onClick, active, children}) => {

    return (<button
        className={active ? "StoriesItem StoriesItemActive" : "StoriesItem"}
        onClick={onClick}>{title}</button>)
}

export default StoriesItem
