import React, {FunctionComponent, useEffect} from 'react';
import CommentItem from "./CommentItem";
import StoryCardLoader from "../cards/StoryCardLoader";
import {connect} from "react-redux";
import {getComment} from "../../redux/Comments/comments.actions";

type CommentReplyProps = {
    id?: string,
    getComment?: any,
    comments?: any,
}

const CommentReply: FunctionComponent<CommentReplyProps> = ({id, getComment, comments}) => {
    useEffect(() => {
        getComment(id)
    }, [id])

    const comment: any = comments?.length > 0 ? comments.find((comment: any) => {
        return (comment?.id) ? comment.id == id : null
    }) : null

    if (!comment) {
        return <StoryCardLoader/>
    }
    return (
        <li>
            <CommentItem text={comment.text} by={comment.by} time={comment.time}/>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <CommentItem primary={true} text=""/>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <CommentItem text=""/>*/}
            {/*    </li>*/}

            {/*</ul>*/}
        </li>
    )
}

const mapStateToProps = (state: any) => {
    return {...state.stories, ...state.comments}
}
export default connect(mapStateToProps, {getComment})(CommentReply)
