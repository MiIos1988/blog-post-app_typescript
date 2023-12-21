type PostProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

type PostComponentProps = {
  post: PostProps;
  selectTag: (tag: string) => void;
};

export const Post = ({ post, selectTag }: PostComponentProps) => {
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
