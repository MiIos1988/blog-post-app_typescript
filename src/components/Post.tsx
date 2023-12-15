import React from 'react'

export const Post = ({ post, selectTag }) => {
    return (

        <div className='col-3 m-2' >
            <div className="card ">
                <div className="card-header"><p>{post.title}</p></div>
                <div className="card-body">{post.body}</div>
                <div className="card-footer">
                    {post.tags.map((tag, index) => {
                        return <button key={index} className='btn btn-sm btn-warning m-2' onClick={() => selectTag(tag)}>{tag}</button>
                    }
                    )}
                </div>
            </div>
        </div>
    )
}