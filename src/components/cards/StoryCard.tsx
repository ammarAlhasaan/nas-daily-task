import React, {FunctionComponent, useEffect} from 'react';
import BaseCard, {BaseCardProps} from "./BaseCard";
import {connect} from "react-redux";
import {getStory} from "../../redux/Stories/stories.actions";
import moment from 'moment';
import StoryCardLoader from "./StoryCardLoader";

type StoryCardProps = {
    id: string,
    getStory?: any,
    stories?: []
}

const StoryCard: FunctionComponent<StoryCardProps> = ({id, getStory, stories = [], children}) => {
    useEffect(() => {
        getStory(id)
    }, [])

    const story: any = stories?.length > 0 ? stories.find((story: any) => {
        return (story?.id) ? story.id == id : null
    }) : null
    if (!story) {
        return <StoryCardLoader/>
    }
    const timeFromNow = moment(moment(story.time * 1000).format()).fromNow()
    const commentLength = story?.kids?.length
    return (<BaseCard title={story.title} description={<span><b>By: </b>{story.by}</span>} onClick={() => {
        alert('wds')
    }} details={`${timeFromNow} ${(commentLength) ? "| " + commentLength + " comments" : ""}`}/>)
}
const mapStateToProps = (state: any) => {
    return {...state.stories}
}
export default connect(mapStateToProps, {getStory})(StoryCard)
