import React, {FunctionComponent} from 'react';
import BaseButton from "./BaseButton";
import {history} from "../../helpers/history";
import {connect} from "react-redux";
import {clearStories, selectType} from "../../redux/Stories/stories.actions";
import {useParams} from "react-router-dom";

const types = [
    {value: 'new', label: 'New', path: '/new'},
    {value: 'past', label: 'Past', path: '/past'},
];
const StoryTypeGroupButtons: FunctionComponent<any> = ({clearStories, selectType}) => {
    let params: any = useParams();
    let {type} = params

    return (<div className="ButtonGroup">
        {types.map((typeItem, index) => {
            return <BaseButton key={index} active={type === typeItem.value} title={typeItem.label} onClick={() => {
                // setType(typeItem.value)
                clearStories()
                selectType(typeItem.value)
                history.push(typeItem.path)
            }}/>
        })}
    </div>)
}
const mapStateToProps = (state: any) => {
    return {...state.stories}
}
export default connect(mapStateToProps, {selectType, clearStories})(StoryTypeGroupButtons)


