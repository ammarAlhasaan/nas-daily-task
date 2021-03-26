import React, {FunctionComponent} from 'react';
import CommentReply from "./CommentReply";
import {connect} from "react-redux";
import {getComment} from "../../redux/Comments/comments.actions";

type CommentsRepliesListProps = {
    getComment?: any,
    commentsIds?: any,
}

const CommentsRepliesList: FunctionComponent<CommentsRepliesListProps> = ({commentsIds}) => {

    const commentsRepliesList = commentsIds.map((commentsItem: any, index: any) => {
        return <CommentReply key={commentsItem} id={commentsItem}/>
    })

    return (
        <ul className="uk-comment-list">
            {commentsRepliesList}
        </ul>
    )
}

const mapStateToProps = (state: any) => {
    return {...state.stories, ...state.comments}
}
export default connect(mapStateToProps, {getComment})(CommentsRepliesList)
