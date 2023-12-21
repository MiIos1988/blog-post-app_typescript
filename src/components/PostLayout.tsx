import { Post } from "./Post";

type PostProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

type PostLayoutProps = {
  postData: PostProps[];
  selectTag: (tag: string) => void;
  currentTag: string;
};

const PostLayout = ({ postData, currentTag, selectTag }: PostLayoutProps) => {
  return (
    <div className="col-10 d-flex flex-wrap ">
      {currentTag === ""
        ? postData.map((el, index) => {
            return <Post key={index} post={el} selectTag={selectTag} />;
          })
        : postData.map((el, index) => {
            if (el.tags.includes(currentTag)) {
              return <Post key={index} post={el} selectTag={selectTag} />;
            }else{
              return <p>No posts with the selected tag.</p>
            }
          })}
    </div>
  );
};

export default PostLayout;
