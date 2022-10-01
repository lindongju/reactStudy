// API요청, 뉴스데이터를 컴포넌트 배열로 변환하여 렌더링
//import { useState, useEffect } from 'react';
import axios from '../../node_modules/axios/index';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const NewsList = ({ category }) => {
  //   const [articles, setArticles] = useState(null);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     //async를 사용하는 함수 따로 선언
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         const query = category === 'all' ? '' : `&category=${category}`;
  //         const response = await axios.get(
  //           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=5ad70e29274e49e2840690acb3462380`,
  //         );
  //         setArticles(response.data.articles);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //       setLoading(false);
  //     };
  //     fetchData();
  //   }, [category]);

  //   // 대기중인 경우
  //   if (loading) {
  //     return <NewsListBlock>대기중 ...</NewsListBlock>;
  //   }

  //   // 아직 articles 값이 설정되지 않았을때
  //   if (!articles) {
  //     return null;
  //   }

  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=5ad70e29274e49e2840690acb3462380`,
    );
  }, [category]);

  // 대기중인 경우
  if (loading) {
    return <NewsListBlock>대기중 ...</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을때
  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러발생 ...</NewsListBlock>;
  }

  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
