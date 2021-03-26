import React, {FunctionComponent, useEffect} from 'react';
import CommentsRepliesList from "../../components/comments/CommentsReplysList";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import StoryCard from "../../components/cards/StoryCard";
import {getComments} from "../../redux/Comments/comments.actions";

type StoryItemProps = {
    selectedStory?: any,
    comments?: any,
    getComments?: any,
    commentsIds?: any,
}
const StoryItem: FunctionComponent<StoryItemProps> = ({selectedStory, comments, commentsIds, getComments}) => {
    let params: any = useParams();
    let {id} = params
    useEffect(() => {
        if (selectedStory?.kids?.length > 0) {
            getComments(selectedStory.kids)
        }
    }, [])

    return (
        <div>
            <StoryCard id={id} storyDetails={true}/>
            <CommentsRepliesList/>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {...state.stories, ...state.comments}
}
export default connect(mapStateToProps, {getComments})(StoryItem)
