import React, {FunctionComponent} from 'react';
import CommentsReplysList from "../../components/comments/CommentsReplysList";

type StoriesItemProps = {
    id?: string,

}
const StoriesItem: FunctionComponent<StoriesItemProps> = ({id, children}) => {

    return (<CommentsReplysList/>)
}

export default StoriesItem
