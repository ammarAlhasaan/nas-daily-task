import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <h2>Header</h2>

                <ul>
                    <li>
                        <Link to="/new">new list screen</Link>
                    </li>
                    <li>
                        <Link to="/past">past list screen</Link>
                    </li>
                    <li>
                        <Link to="/past/12">past item</Link>
                    </li>
                    <li>
                        <Link to="/new/25">new item</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/:type/:id" children={<ArticleItem/>}/>
                    <Route path="/:type" children={<ArticlesList/>}/>
                </Switch>
            </div>
        </Router>
    );
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

export default App;
