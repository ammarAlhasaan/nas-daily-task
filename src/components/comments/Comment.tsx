import React, {FunctionComponent, useEffect, useState} from 'react';
import StoryCardLoader from "../cards/StoryCardLoader";
import {connect} from "react-redux";
import {getComment} from "../../redux/Comments/comments.actions";
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import NewCommentsList from "./CommentsList";
import moment from "moment";

type CommentProps = {
    id?: string,
    getComment?: any,
    comments?: any,
    index: number
}

const Comment: FunctionComponent<CommentProps> = ({id, getComment, comments, index}) => {
    // toggle show hide replies
    const [showReplies, setShowReplies] = useState(false)

    // get comment from reducer
    const findComment = (id: any) => {
        return comments?.length > 0 ? comments.find((comment: any) => {
            return (comment?.id) ? comment.id == id : null
        }) : null
    }

    useEffect(() => {
        // before get comment from api make sure we dont have it in the reducer
        if (!findComment(id))
            getComment(id)
    }, [id])

    const comment: any = findComment(id)
    // if not found comment yet show loader
    if (!comment) {
        return <StoryCardLoader/>
    }
    const timeFromNow = moment(moment(comment.time * 1000).format()).fromNow()
    const repliesLength = comment?.kids?.length
    return (
        <li>
            <article className="uk-comment BaseCard">
                <CommentHeader by={comment.by} time={timeFromNow} showReplies={setShowReplies}
                               repliesLength={repliesLength}/>
                <CommentBody text={comment.text}/>
            </article>
            {repliesLength > 0 && showReplies && <NewCommentsList type="reply" kids={comment.kids}/>}
        </li>
    )
}

const mapStateToProps = (state: any) => {
    return {...state.stories, ...state.comments}
}
export default connect(mapStateToProps, {getComment})(Comment)
