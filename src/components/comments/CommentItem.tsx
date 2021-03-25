import React, {FunctionComponent} from 'react';
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";

type CommentItemProps = {
    id?: string,
    text: string,
    primary?: boolean
}

const CommentItem: FunctionComponent<CommentItemProps> = ({id, text, primary}) => {
    const className = primary ? "uk-comment uk-visible-toggle uk-comment-primary" : "uk-comment uk-visible-toggle"
    return (
        <article className={className}>
            <CommentHeader by={""} time={""}/>
            <CommentBody text={""}/>
        </article>


    )
}

export default CommentItem;
