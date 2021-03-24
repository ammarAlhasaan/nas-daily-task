import React, {FunctionComponent} from 'react';
import {Router, Link, Switch, Route, useParams} from "react-router-dom";
import {history} from "../../helpers/history";
import logo from './../../assets/images/logo.svg';

type MainLayoutProps = {
    id?: string,
}
const MainLayout: FunctionComponent<MainLayoutProps> = ({id, children}) => {

    return (
        <Router history={history}>
            <nav className="uk-navbar-container" uk-navbar="true">
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
            <li>
                <Link to="/new">new list screen</Link>
            </li>
            <li>
                <Link to="/past">past list screen</Link>
            </li>
            <Routes/>
        </Router>)
}

function Routes() {
    return (
        <div className="uk-container-small" style={{margin: "auto", padding: 32}}>
            <div>
                <Switch>
                    <Route path="/:type/:id" children={<ArticleItem/>}/>
                    <Route path="/:type" children={<ArticlesList/>}/>
                </Switch>
            </div>
        </div>
    )
}

function ArticlesList() {
    let params: any = useParams();
    let {type} = params
    return (
        <div>
            <h3>All articles for: {type}</h3>
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
