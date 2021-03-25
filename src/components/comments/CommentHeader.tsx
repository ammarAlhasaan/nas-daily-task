import React, {FunctionComponent} from 'react';

type CommentHeaderProps = {
    id?: string,
    by: string,
    time: string
}

const CommentHeader: FunctionComponent<CommentHeaderProps> = ({id, by, time, children}) => {

    return (
        <header className="uk-comment-header uk-position-relative">
            <div className="uk-grid-medium uk-flex-middle" uk-grid="true">
                <div className="uk-width-auto">
                    <img className="uk-comment-avatar" src="https://via.placeholder.com/80" width="80" height="80"
                         alt=""/>
                </div>
                <div className="uk-width-expand">
                    <h4 className="uk-comment-title uk-margin-remove">
                        <a className="uk-link-reset" href="#">{by}</a></h4>
                    <p className="uk-comment-meta uk-margin-remove-top">
                        <a className="uk-link-reset" href="#">{time}</a></p>
                </div>
            </div>
            <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a
                className="uk-link-muted" href="#">Reply</a></div>
        </header>
    )
}

export default CommentHeader;
