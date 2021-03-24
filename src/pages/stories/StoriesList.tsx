import React, {FunctionComponent} from 'react';
import {useParams} from "react-router-dom";
import BaseCard from "../../components/cards/BaseCard";
import {history} from "../../helpers/history";
import BaseButton from "../../components/buttons/BaseButton";
import PrimaryButton from "../../components/buttons/PrimaryButton";

type StoriesListProps = {
    id?: string,
}
const StoriesList: FunctionComponent<StoriesListProps> = ({id}) => {
    let params: any = useParams();
    let {type} = params
    const cards = [1, 2, 3, 4, 5, 6].map((item, index) => {
        return <BaseCard key={index}/>
    })

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

export default StoriesList
