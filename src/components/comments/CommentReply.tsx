import React, {FunctionComponent} from 'react';
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentItem from "./CommentItem";

type CommentReplyProps = {
    id?: string,
}

const CommentReply: FunctionComponent<CommentReplyProps> = ({id, children}) => {

    return (
        <li>
            <CommentItem text=""/>
            <ul>
                <li>
                    <CommentItem primary={true} text=""/>
                </li>
                <li>
                    <CommentItem text=""/>
                </li>

            </ul>
        </li>
    )
}

export default CommentReply;
