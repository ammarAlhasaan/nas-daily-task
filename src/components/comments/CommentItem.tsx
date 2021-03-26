import React, {FunctionComponent} from 'react';
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";

type CommentItemProps = {
    id?: string,
    text: string,
    by: string,
    time: string,
    primary?: boolean
}

const CommentItem: FunctionComponent<CommentItemProps> = ({id, text, by, time, primary}) => {
    const className = primary ? "uk-comment uk-visible-toggle uk-comment-primary" : "uk-comment uk-visible-toggle"
    return (
        <article className={className}>
            <CommentHeader by={by} time={time}/>
            <CommentBody text={text}/>
        </article>


    )
}

export default CommentItem;
