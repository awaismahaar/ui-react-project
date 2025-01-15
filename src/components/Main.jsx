import { faComments, faEllipsisVertical, faShareFromSquare, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Main({item}) {
  return (
    <div
        className="post_container bg-gray-900">
        <div className="person">
          <div className="author">
            <div className="img">
              <img src={item.pImg} alt="" />
            </div>
            <div className="text">
              <h3>{item.userName}</h3>
              <p>{item.title}</p>
            </div>
          </div>
          <div className="dot cursor-pointer">
          <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
        <p>{item.description}</p>
        <div className="post_img">
          <img src={item.mImg} alt="" />
        </div>
        <div className="like_comment">
          <div className="likes">
          <FontAwesomeIcon icon={faThumbsUp} /> {item.like} K
          </div>
          <div className="comments">
          <FontAwesomeIcon icon={faComments} /> {item.comment} K
          </div>
          <div className="share">
            
          <FontAwesomeIcon icon={faShareFromSquare} /> {item.share} K
          </div>
        </div>
      </div>
  )
}

export default Main