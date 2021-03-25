import React, {FunctionComponent} from 'react';
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentReply from "./CommentReply";

type CommentsRepliesListProps = {
    id?: string,
}

const CommentsRepliesList: FunctionComponent<CommentsRepliesListProps> = ({id, children}) => {

    return (
        <ul className="uk-comment-list">
            <CommentReply/>
            <li>
                <article className="uk-comment uk-visible-toggle">
                    <CommentHeader by={""} time={""}/>
                    <CommentBody text={""}/>
                </article>
                <ul>
                    <li>
                        <article className="uk-comment  uk-comment-primary  uk-visible-toggle">
                            <CommentHeader by={"Author"} time={"12 days ago"}/>
                            <CommentBody
                                text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod\n" +
                                "                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero\n" +
                                "                                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                                "                                    takimata sanctus est Lorem ipsum dolor sit amet."}/>
                        </article>
                    </li>
                    <li>
                        <article className="uk-comment uk-visible-toggle">
                            <CommentHeader by={"Author"} time={"12 days ago"}/>
                            <CommentBody
                                text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod\n" +
                                "                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero\n" +
                                "                                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n" +
                                "                                    takimata sanctus est Lorem ipsum dolor sit amet."}/>
                        </article>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default CommentsRepliesList;
