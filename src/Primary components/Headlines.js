import React, { useEffect,useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Headlines= (props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState([])

  // constructor(props) {
  //   super(props);
  // }
  const updateNews= async()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=ad7834b6b4da4d87b29f17c40cf58556&page=${
      page
    }&pageSize=${props.pageSize}`;
    
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

  }
  useEffect(() => {
    updateNews();  
  },[])

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=ad7834b6b4da4d87b29f17c40cf58556&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
  };

  //
 
    return (
      <>
        <h2 className="text-center" style={{ margin: "30px" , marginTop: '70px' }}>
          Top Headlines
        </h2>

        <div className="text-center">{loading && <Spinner />}</div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div>
            <div className="gridContainer mx-3">
              {articles.map((element) => {
                return (
                  <div className="row" id="gridLayout" key={element.url}>
                    <NewsItems
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }


Headlines.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};
Headlines.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Headlines;
