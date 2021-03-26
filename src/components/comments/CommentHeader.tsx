import React, {FunctionComponent, useState} from 'react';

type CommentHeaderProps = {
    id?: string,
    by: string,
    time: string,
    showReplies: any,
    repliesLength: number
}

const CommentHeader: FunctionComponent<CommentHeaderProps> = ({showReplies, repliesLength, by, time, children}) => {
    const [show, setShow] = useState(false)
    return (
        <header className="uk-comment-header uk-position-relative">
            <div className="uk-grid-medium uk-flex-middle" uk-grid="true">
                <div className="uk-width-auto">
                    <img className="uk-comment-avatar" src="https://via.placeholder.com/50" width="50" height="50"
                         alt=""/>
                </div>
                <div className="uk-width-expand">
                    <h5 className="Title">{by}</h5>
                    <p className="uk-comment-meta uk-margin-remove-top">
                        <span className="Details uk-flex uk-flex-middle">
                            <span className="ClockIcon" uk-icon="icon: clock; ratio: .5"></span>
                            {time}
                        </span>
                    </p>
                </div>
            </div>
            {repliesLength > 0 && <div className="uk-position-top-right uk-position-small uk-hidden-hover">
              <a className="uk-link-muted" onClick={() => {
                  showReplies(!show)
                  setShow(!show)
              }}>{show ? "Hide " : "Show "} {repliesLength} Replies</a>
            </div>
            }
        </header>
    )
}

export default CommentHeader;
