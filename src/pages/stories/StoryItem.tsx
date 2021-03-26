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
    // current page size 10, 20, 30...
    const [pageSize, setPageSize] = useState(0)
    // get current comment to render it
    const [currentCommentsIds, setCurrentCommentsIds] = useState([])
    let params: any = useParams();
    let {id} = params
    // slice the all comments id array
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
        if (selectedStory?.kids) {
            loadMoreComments(selectedStory.kids)
        }
    }, [selectedStory])
    return (
        <div>
            <h3 style={{marginTop: 20}}>Details</h3>

            <div uk-grid="true" style={{margin: 0}}>
                <StoryCard id={id} storyDetails={true}/>
            </div>
            {selectedStory?.kids?.length > 0 ? <h3>Comments</h3> : <p>No Comments Available</p>}
            <CommentsList kids={currentCommentsIds}/>
            {currentCommentsIds?.length < selectedStory?.kids?.length && <div className="LoadMoreContainer">
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
