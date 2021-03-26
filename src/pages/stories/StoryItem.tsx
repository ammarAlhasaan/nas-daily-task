import React, {FunctionComponent, useEffect, useState} from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import StoryCard from "../../components/cards/StoryCard";
import {getComments} from "../../redux/Comments/comments.actions";
import CommentsList from "../../components/comments/CommentsList";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const PAGE_SIZE = 10
type StoryItemProps = {
    selectedStory?: any,
    comments?: any,
    getComments?: any,
    commentsIds?: any,
}
const StoryItem: FunctionComponent<StoryItemProps> = ({selectedStory, comments, commentsIds, getComments}) => {

    const [pageSize, setPageSize] = useState(0)
    const [currentCommentsIds, setCurrentCommentsIds] = useState([])
    let params: any = useParams();
    let {id} = params
    const loadMoreComments = (allCommentsIds: []) => {
        let tempPageSize = pageSize + PAGE_SIZE
        tempPageSize = tempPageSize > allCommentsIds.length ? allCommentsIds.length : tempPageSize
        const addFrom = pageSize
        const addTo = tempPageSize
        setPageSize(tempPageSize)
        const moreCommentsIds = allCommentsIds.slice(addFrom, addTo)
        setCurrentCommentsIds([...currentCommentsIds, ...moreCommentsIds])
    }

    useEffect(() => {
        if (selectedStory.kids) {
            loadMoreComments(selectedStory.kids)
        }
    }, [selectedStory])
    return (
        <div>
            <div uk-grid="true" style={{margin: 0}}>
                <StoryCard id={id} storyDetails={true}/>
            </div>

            <CommentsList kids={currentCommentsIds}/>
            {currentCommentsIds.length < selectedStory.kids.length && <div className="LoadMoreContainer">
              <PrimaryButton title="Load More" onClick={() => {
                  loadMoreComments(selectedStory.kids)
              }}/>

            </div>}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {...state.stories, ...state.comments}
}
export default connect(mapStateToProps, {getComments})(StoryItem)
