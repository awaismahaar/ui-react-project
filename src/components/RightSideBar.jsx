function RightSideBar({data}) {
  return (
    <div
    className="right_container"
  >
    <div className="postImg">
      <img id="_img" src={data.img} alt="" />
      <div className="inside_img">
        <div className="img">
          <img src={data.authorImg} alt="" />
        </div>
        <div className="text">
          <h3>{data.authorName}</h3>
          <p>{data.authortext}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RightSideBar