import React, {FunctionComponent} from 'react';
import CommentsRepliesList from "../../components/comments/CommentsReplysList";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

type StoryItemProps = {

}
const StoryItem: FunctionComponent<StoryItemProps> = ({}) => {
    let params: any = useParams();
    let {type, id} = params
    return (<CommentsRepliesList/>)
}

const mapStateToProps = (state: any) => {
    return {...state.stories}
}
export default connect(mapStateToProps, {})(StoryItem)
