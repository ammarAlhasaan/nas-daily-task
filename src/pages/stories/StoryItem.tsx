import React, {FunctionComponent} from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import StoryCard from "../../components/cards/StoryCard";
import {getComments} from "../../redux/Comments/comments.actions";
import CommentsList from "../../components/comments/CommentsList";

type StoryItemProps = {
    selectedStory?: any,
    comments?: any,
    getComments?: any,
    commentsIds?: any,
}
const StoryItem: FunctionComponent<StoryItemProps> = ({selectedStory, comments, commentsIds, getComments}) => {
    let params: any = useParams();
    let {id} = params

    return (
        <div>
            <div uk-grid="true" style={{margin: 0}}>
                <StoryCard id={id} storyDetails={true}/>
            </div>

            <CommentsList kids={selectedStory.kids}/>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {...state.stories, ...state.comments}
}
export default connect(mapStateToProps, {getComments})(StoryItem)
