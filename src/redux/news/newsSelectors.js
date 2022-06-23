import { createSelector } from "reselect";

export const selectNews = ({ news }) => news.news;
export const selectLoadingNews = ({ news }) => news.isLoadingNews;
export const selectFilterQuery = ({ news }) => news.filterQuery;

export const selectFilteredNews = createSelector(
  selectNews,
  selectFilterQuery,
  (news, filterQuery) =>
    news.filter((newsItem) =>
      newsItem.title.toLowerCase().includes(filterQuery.toLowerCase())
    )
);
