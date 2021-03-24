import hackerNewsApi from './hacker-news.api'

export const getNewStories = () => {
    return hackerNewsApi.get("/newstories");
};
export const getTopStories = () => {
    return hackerNewsApi.get("/topstories");
};
