import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
      className="postImg"
      src="https://images.unsplash.com/photo-1610878180933-123728745d22?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fHww"
      alt=""
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Life is full of both joys and 
        disasters.
        </span>
        <hr/>
        <span className="postDate">2 hour age</span>
      </div>
      <p className="postDesc">Challenges are a part of life. 
        We face different challenges at different points in life. 
        While some people look at these challenges as 
        an opportunity to learn something new others get 
        disheartened and succumb to them. We learn many new 
        things as we take on different challengesChallenges are a part of life. 
        We face different challenges at different points in life. 
        While some people look at these challenges as 
        an opportunity to learn something new others get 
        disheartened and succumb to them. We learn many new 
        things as we take on different challengesChallenges are a part of life. 
        We face different challenges at different points in life. 
        While some people look at these challenges as 
        an opportunity to learn something new others get 
        disheartened and succumb to them. We learn many new 
        things as we take on different challenges</p>
    </div>
  )
}
