import React, {FunctionComponent, useState} from 'react';
import {Router, Link, Switch, Route, useParams, Redirect} from "react-router-dom";
import {history} from "../../helpers/history";
import logo from './../../assets/images/logo.svg';
import logoBlack from './../../assets/images/logo-black.svg';
import StoriesList from "../../pages/stories/StoriesList";
import StoryTypeGroupButtons from "../buttons/StoryTypeGroupButtons";
import StoriesItem from "../../pages/stories/StoryItem";
import StoryItem from "../../pages/stories/StoryItem";

type MainLayoutProps = {
    id?: string,
}
const MainLayout: FunctionComponent<MainLayoutProps> = ({id, children}) => {
    const [type, setType] = useState('new')
    return (
        <Router history={history}>
            <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                <nav className="uk-navbar-container WhiteNavBar" uk-navbar="true">
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
                <StoryTypeGroupButtons/>
                <Routes/>
            </div>
            <footer>
                <div className="uk-flex uk-flex-middle uk-flex-center Footer">
                    <img src={logoBlack}/>
                </div>

            </footer>
        </Router>)
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/:type/:id" children={<StoryItem />}/>
                <Route path="/:type" children={<StoriesList/>}/>
                <Redirect exact from="/" to="/new"/>

            </Switch>
        </div>
    )
}


export default MainLayout
