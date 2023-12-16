import { Post } from "./Post";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

const PostLayout = ({
  postData,
  currentTag,
  selectTag,
}: {
  postData: Post[];
  selectTag: (tag: string) => void;
  currentTag: string;
}) => {
  return (
    <div className="col-10 d-flex flex-wrap ">
      {currentTag === ""
        ? postData.map((el, index) => {
            return <Post key={index} post={el} selectTag={selectTag} />;
          })
        : postData.map((el, index) => {
            if (el.tags.includes(currentTag)) {
              return <Post key={index} post={el} selectTag={selectTag} />;
            }
          })}
    </div>
  );
};

export default PostLayout;
