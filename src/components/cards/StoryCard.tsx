import React, {FunctionComponent, useEffect} from 'react';
import BaseCard from "./BaseCard";
import {connect} from "react-redux";
import {getStory, selectStory} from "../../redux/Stories/stories.actions";
import moment from 'moment';
import StoryCardLoader from "./StoryCardLoader";
import {history} from "../../helpers/history";
import {useParams} from "react-router-dom";

type StoryCardProps = {
    id: string,
    getStory?: any,
    stories?: [],
    selectedType?: any,
    selectStory?: any,
    selectedStory?: any,
    storyDetails?: boolean,
}

const StoryCard: FunctionComponent<StoryCardProps> = ({id, getStory, stories = [], selectStory, storyDetails}) => {
    let params: any = useParams();
    let {type} = params
    useEffect(() => {
        getStory(id)
    }, [id])

    const story: any = stories?.length > 0 ? stories.find((story: any) => {
        return (story?.id) ? story.id == id : null
    }) : null

    // in case we are in the story details make sure we have story in the reducer
    useEffect(() => {
        if (storyDetails) {
            selectStory(story)
        }
    }, [story])

    if (!story) {
        return <StoryCardLoader/>
    }
    const timeFromNow = moment(moment(story.time * 1000).format()).fromNow()
    const commentLength = story?.kids?.length
    return (
        <BaseCard
            title={story.title}
            description={<span><b>By: </b>{story.by}</span>}
            onClick={() => {
                if (!storyDetails) {
                    selectStory(story)
                    history.push(`/${type}/${story.id}`)
                }
            }}
            details={`${timeFromNow} ${(commentLength) ? "| " + commentLength + " comments" : ""}`}/>
    )
}
const mapStateToProps = (state: any) => {
    return {...state.stories}
}
export default connect(mapStateToProps, {getStory, selectStory})(StoryCard)
