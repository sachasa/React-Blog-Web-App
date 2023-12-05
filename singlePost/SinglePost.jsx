import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        alt="" 
        className="singlePostImage" 
        />
        <h1 className="singlePostTitle"> To overcome one's grief, 
        it is necessary to find happiness in one's life.
        <div className="singlePostEdit">
        <i className="singlePostIcon far fa-edit"></i>
        <i className="singlePostIcon fa-regular fa-trash-can"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Sasika</b></span>
            <span className="singlePostDate">1 hour age</span>
        </div>
      </div>
      <p className="singlePostDesc">Snow, a marvel of nature, transforms the world into a 
        serene and enchanting wonderland every winter. As delicate as 
        it is powerful, snowflakes descend from the heavens, covering 
        the earth in a pristine blanket of white. This transformation 
        not only alters the 
        landscape but also rejuvenates nature, bringing forth a sense of calm and purity.
         In the realm of nature, snow serves as a vital source of 
         nourishment. When it melts, it replenishes the earth's 
         water reserves, ensuring the sustenance of plants, animals, and humans alike. Snowflakes, each a unique masterpiece, symbolize nature's infinite creativity, reminding us of the 
         intricate and awe-inspiring beauty 
         that exists in the world around us.
         The arrival of snow heralds a temporary silence, 
         muffling the usual cacophony of the natural world. The hush that descends upon the environment creates a profound sense of tranquility. Trees adorned with snow-laden branches stand tall and majestic, 
         their boughs bending under the weight of the 
         fluffy snowflakes. Animals, too, adapt to this new, 
         quiet atmosphere, moving stealthily through the snow-covered 
         terrain in search of food.Snow transforms mundane scenes into 
         breathtaking vistas. Rolling hills and mountains become pristine 
         slopes, inviting enthusiasts to partake in the exhilarating 
         sport of skiing. Frozen lakes and ponds transform into natural 
         ice rinks, where families and 
         friends gather to enjoy the simple pleasures of ice skating.</p>
    </div>
  )
}
