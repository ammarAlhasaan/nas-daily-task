import hackerNewsApi from './hacker-news.api'

export const getStory = (id: string) => {
    return hackerNewsApi.get(`/item/${id}.json`);
};
export const getNewStories = () => {
    return hackerNewsApi.get("/newstories.json");
};
export const getTopStories = () => {
    return hackerNewsApi.get("/topstories.json");
};
