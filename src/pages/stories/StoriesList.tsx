import React, {FunctionComponent, useEffect} from 'react';
import {useParams} from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import StoryCard from "../../components/cards/StoryCard";
import {connect} from "react-redux";
import {getNewStories, getTopStories} from "../../redux/Stories/stories.actions";

type StoriesListProps = {
    id?: string,
    stories?: any,
    storiesIds?: any,
    selectedType?: string,
    getNewStories?: any, getTopStories?: any
}
const StoriesList: FunctionComponent<StoriesListProps> = ({id, selectedType, storiesIds, getNewStories, getTopStories}) => {
    let params: any = useParams();
    let {type} = params
    console.log(selectedType)
    useEffect(() => {
        if (selectedType === 'past') {
            getTopStories()
        } else {
            getNewStories()
        }
    }, [selectedType])
    let cards = []

    // @ts-ignore
    cards = storiesIds?.length > 0 ? storiesIds?.map((item, index) => {
        if (index > 10) return null
        return <StoryCard key={index} id={item}/>
    }) : null


    return (
        <div>
            <div uk-grid="true" style={{margin: 0}}>
                {cards}
            </div>
            <div className="LoadMoreContainer">
                <PrimaryButton active={type === 'past'} title="Load More" onClick={() => {
                    alert('ammar')
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
export default connect(mapStateToProps, {getNewStories, getTopStories})(StoriesList)

