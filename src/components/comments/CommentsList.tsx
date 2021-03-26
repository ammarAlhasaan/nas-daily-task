import React, {FunctionComponent, useEffect} from 'react';
import {connect} from "react-redux";
import {getComment, getComments} from "../../redux/Comments/comments.actions";
import Comment from "./Comment";

type CommentsListProps = {
    kids: any,
    getComment?: any,
    commentsIds?: any,
    getComments?: any,
    type?: 'comment' | 'reply',
}

const CommentsList: FunctionComponent<CommentsListProps> = ({type, kids}) => {
    useEffect(() => {
        if (kids?.length > 0) {
            // save all comments id's in reducer in commentsIds array
            getComments(kids)
        }
    }, [kids])

    const commentsRepliesList = kids.map((commentsItem: any, index: any) => {
        return <Comment key={commentsItem} id={commentsItem} index={index}/>
    })

    return (
        <ul className={type === 'reply' ? "" : "uk-comment-list"}>
            {commentsRepliesList}
        </ul>
    )
}

const mapStateToProps = (state: any) => {
    return {...state.stories, ...state.comments}
}
export default connect(mapStateToProps, {getComment, getComments})(CommentsList)
