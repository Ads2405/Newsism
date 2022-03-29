import React from "react";

const NewsItems = (props) => {
 
    let { title, description, imageUrl, newsUrl,date,source } = props;
    return (
      <>
        <div className="newsGrid">
          <div className="card mx-4">
            <div style={{display:"flex" , justifyContent:"flex-end"}}><span className="badge rounded-pill bg-success">{source}</span></div>
            <img
              src={
                !imageUrl
                  ? "https://vignette3.wikia.nocookie.net/lego/images/a/ac/No-Image-Basic.png/revision/latest?cb=20130819001030"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p><small>Article on {new Date(date).toUTCString()}</small></p>
              <a href={newsUrl} rel="noreferrer" target="_blank">
              <button className="learn-more">
            
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
    
                <span className="button-text">Read More</span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }


export default NewsItems;
