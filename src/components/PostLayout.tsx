import React from 'react'
import { Post } from './Post'

const PostLayout = ({ postData, currentTag, selectTag }) => {
    return (
        <div className="col-10 d-flex flex-wrap ">
            {currentTag === "" ?
                postData.map((el, index) => {
                    return <Post key={index} post={el} selectTag={selectTag} />
                }
                )
                :
                postData.map((el, index) => {
                    if (el.tags.includes(currentTag)) {
                        return <Post key={index} post={el} selectTag={selectTag}/>
                    }
                })
            }
        </div>
    )
}

export default PostLayout