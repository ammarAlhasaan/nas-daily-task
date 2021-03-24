import React, {FunctionComponent, useState} from 'react';
import {Router, Link, Switch, Route, useParams, useHistory} from "react-router-dom";
import {history} from "../../helpers/history";
import logo from './../../assets/images/logo.svg';
import BaseCard from "../cards/BaseCard";
import BaseButton from "../buttons/BaseButton";

type MainLayoutProps = {
    id?: string,
}
const MainLayout: FunctionComponent<MainLayoutProps> = ({id, children}) => {
    const [type, setType] = useState('new')
    return (
        <Router history={history}>
            <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                <nav style={{
                    background: '#FFFFFF',
                    boxShadow: '0px 3px 28px rgba(0, 0, 0, 0.08)'
                }} className="uk-navbar-container" uk-navbar="true">
                    <div className="uk-navbar-center">
                        <ul className="uk-navbar-nav">
                            <li>
                                <Link to={"/home"} className="nav-link">
                                    <img src={logo}/>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
            <div className="uk-container uk-container-small">
                <div className="ButtonGroup">
                    <BaseButton active={type === 'new'} title="New" onClick={() => {
                        setType('new')
                        history.push('/new')
                    }}/>
                    <BaseButton active={type === 'past'} title="Past" onClick={() => {
                        setType('past')
                        history.push('/past')
                    }}/>
                </div>
                <Routes/>
            </div>

        </Router>)
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/:type/:id" children={<ArticleItem/>}/>
                <Route path="/:type" children={<ArticlesList/>}/>
            </Switch>
        </div>
    )
}

function ArticlesList() {
    let params: any = useParams();
    let {type} = params
    const cards = [1, 2, 3, 4, 5, 6].map((item, index) => {
        return <BaseCard key={index}/>
    })

    return (
        <div>
            <h3>All articles for: {type}</h3>
            <div uk-grid="true" style={{margin: 0}}>
                {cards}
            </div>
        </div>
    );
}

function ArticleItem() {
    let params: any = useParams();
    let {type, id} = params
    return (
        <div>
            <h3>the type for this article is {type} and the id is : {id}</h3>
        </div>
    );
}


export default MainLayout
