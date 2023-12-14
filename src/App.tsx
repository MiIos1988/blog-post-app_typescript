import { computeHeadingLevel, logDOM } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Post } from "./components/Post";
import PostLayout from "./components/PostLayout";
import Sidebar from "./components/Sidebar";

function App() {

  const [sidebarData, setSidebarData] = useState();
  const [postData, setPostData] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  const selectTag = (tag) => {
    setCurrentTag(tag)
  }

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/zile028/fake-db/main/tags")
      .then(res => res.json())
      .then(data => setSidebarData(data))
  }, []
  );

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/zile028/fake-db/main/posts")
      .then(res => res.json())
      .then(data => setPostData(data))
  }, []
  )

  return (
    <>
      <header className="container-fluid py-5 bg-dark bg-opacity-10 text-center">
        <h1>Blog post app</h1>
      </header>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-2">
            {sidebarData && <Sidebar sidebarData={sidebarData} selectTag={selectTag} currentTag={currentTag}/>}
          </div>
          <PostLayout postData={postData} currentTag={currentTag} selectTag={selectTag} />
        </div>
      </div>
    </>

  );
}

export default App;