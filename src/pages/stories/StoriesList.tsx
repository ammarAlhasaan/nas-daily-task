import React, {FunctionComponent, useEffect} from 'react';
import {useParams} from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import StoryCard from "../../components/cards/StoryCard";
import {connect} from "react-redux";
import {getNewStories, getTopStories, loadMore} from "../../redux/Stories/stories.actions";

type StoriesListProps = {
    id?: string,
    stories?: any,
    storiesIds?: any,
    currentStoriesIds?: any,
    selectedType?: string,
    getNewStories?: any,
    getTopStories?: any,
    loadMore?: any,
}
const StoriesList: FunctionComponent<StoriesListProps> = ({id, selectedType, storiesIds, loadMore, currentStoriesIds, getNewStories, getTopStories}) => {
    let params: any = useParams();
    let {type} = params
    // console.log(selectedType)
    useEffect(() => {
        if (selectedType === 'past') {
            getTopStories()
        } else {
            getNewStories()
        }
    }, [selectedType])
    useEffect(() => {
        loadMore()
    }, [storiesIds])
    let cards = []
    // @ts-ignore
    cards = currentStoriesIds?.length > 0 ? currentStoriesIds?.map((item, index) => {
        return <StoryCard key={index} id={item}/>
    }) : null


    return (
        <div>
            <div uk-grid="true" style={{margin: 0}}>
                {cards}
            </div>
            <div className="LoadMoreContainer">
                <PrimaryButton active={type === 'past'} title="Load More" onClick={() => {
                    loadMore()
                }}/>
            </div>
        </div>)
}
StoriesList.defaultProps = {
    stories: [],
    storiesIds: [],
};
const mapStateToProps = (state: any) => {
    return {...state.stories}
}
export default connect(mapStateToProps, {getNewStories, getTopStories, loadMore})(StoriesList)

