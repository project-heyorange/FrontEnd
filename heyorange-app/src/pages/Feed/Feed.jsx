import React from "react"
import "../Feed/Feed.css"
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";

const Feed = () => {
  return <>
  <Header />
  <div className = "wrapper">
  
  <div className="FeedImg"></div>
    <Filter/>
    
  </div>
  </>
}
export default Feed;