import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export const Post = ({
  post,
  selectTag,
}: {
  post: Post;
  selectTag: (tag: string) => void;
}) => {
  return (
    <div className="col-3 m-2">
      <div className="card ">
        <div className="card-header">
          <p>{post.title}</p>
        </div>
        <div className="card-body">{post.body}</div>
        <div className="card-footer">
          {post.tags.map((tag, index) => {
            return (
              <button
                key={index}
                className="btn btn-sm btn-warning m-2"
                onClick={() => selectTag(tag)}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
