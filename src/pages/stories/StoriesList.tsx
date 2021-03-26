import React, {FunctionComponent, useEffect} from 'react';
import {useParams} from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import StoryCard from "../../components/cards/StoryCard";
import {connect} from "react-redux";
import {getNewStories, getTopStories, loadMore} from "../../redux/Stories/stories.actions";
import StoryTypeGroupButtons from "../../components/buttons/StoryTypeGroupButtons";

type StoriesListProps = {
    stories?: any,
    storiesIds?: any,
    currentStoriesIds?: any,
    getNewStories?: any,
    getTopStories?: any,
    loadMore?: any,
}
const StoriesList: FunctionComponent<StoriesListProps> = ({storiesIds, loadMore, currentStoriesIds, getNewStories, getTopStories}) => {
    let params: any = useParams();
    let {type} = params
    useEffect(() => {
        // get data by selected type
        if (type === 'top') {
            getTopStories()
        } else {
            getNewStories()
        }
    }, [type])
    useEffect(() => {
        // load 10 stories first time
        loadMore()
    }, [storiesIds])

    // render the available ids in currentStoriesIds
    let cards = []
    // @ts-ignore
    cards = currentStoriesIds?.length > 0 ? currentStoriesIds?.map((item, index) => {
        return <StoryCard key={index} id={item}/>
    }) : null


    return (
        <div>
            {/*new top buttons*/}
            <StoryTypeGroupButtons/>
            <div uk-grid="true" style={{margin: 0}}>
                {cards}
            </div>
            {/*hide load more when no more stories */}
            {currentStoriesIds?.length < storiesIds?.length &&
            <div className="LoadMoreContainer">
              <PrimaryButton active={type === 'top'} title="Load More" onClick={() => {
                  loadMore()
              }}/>
            </div>
            }

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

