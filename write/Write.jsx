import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg"
        src="https://images.ctfassets.net/2djrn56blv6r/7LjKuMBICdepQN605IbOHb/a76593463f0f4f2624560944d31faf5c/shutterstock_452360023_header.jpg?fm=webp&q=75&w=1920"
        alt=""
        />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." 
            type="text" 
            className="writeInput writeText">
            </textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}
