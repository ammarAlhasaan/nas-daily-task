import React, {FunctionComponent} from 'react';

type CommentBodyProps = {
    id?: string,
    text: string,
}

const CommentBody: FunctionComponent<CommentBodyProps> = ({id, text, children}) => {

    return (
        <div className="uk-comment-body">
            <p>{text}</p>
        </div>
    )
}

export default CommentBody;
