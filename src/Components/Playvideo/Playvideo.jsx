import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import Like from '../../assets/thumbs-up.svg'
import Dislike from '../../assets/thumbs-down.svg'
import { API_KEY ,value_converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const Playvideo = () => {

  const {videoId} = useParams();

  const [apiData,setApiData] = useState(null);
  const [channelData,setChannelData] = useState(null);
  const [commentData,setCommentData] = useState([]);

  const fetchVideoData = async ()=>{
    //fetching video data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(response=>response.json()).then(data=>setApiData(data.items[0]))
  }

  const fetchOtherData = async ()=>{
    //fetching channel data like subscribers count
    const channelData_url= `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelData_url).then(response=>response.json()).then(data=>setChannelData(data.items[0]));

    //fetching comment data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
  }
  useEffect(()=>{
    fetchVideoData();
  },[videoId])
  useEffect(()=>{
    fetchOtherData();
  },[apiData])

  return (
    <div className='play-video'>
      {/* <video src={Video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="React Js road map for beginners | React js tutorial for beginners | React Js in telugu #reactjs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:"title here"}</h3>
      <div className="play-video-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount):'16k'} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():''}</p>
        <div>
          <span><img src={Like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
          <span><img src={Dislike} alt="" /></span>
          <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmcLcocEM3JjiS1UF22BVtGZfeuI6wYZ0mQ&s" alt="" />Share</span>
          <span><img src="https://cdn.iconscout.com/icon/free/png-256/free-save-1779882-1518534.png" alt="" />Save</span>  
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:''} alt="" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:''}</p>
          <span>{channelData?value_converter(channelData.statistics.subscriberCount):'1M'} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):'Description here'}</p>
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount):105} comments</h4>
        {
          commentData.map((item,index)=>{
            return (
        <div key={index} className="comment">
          <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
          <div>
            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.publishedAt).fromNow()}</span></h3>
            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
            <div className="comment-action">
              <img src={Like} alt="" />
              <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
              <img src={Dislike} alt="" />
              <span></span>
            </div>
          </div>
        </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Playvideo
