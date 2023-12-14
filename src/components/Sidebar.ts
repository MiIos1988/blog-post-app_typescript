import React from 'react'

const active = {
    background: "red"
}

const Sidebar = ({ sidebarData, selectTag, currentTag }) => {

    return (
        <ul className='list-group list-list-group-flush mt-5'>
            {sidebarData.map((el, index) => {
                return <button key={index} style={currentTag === el ? active : null} className='btn btn-primary mb-2' onClick={() => selectTag(el)}>{el}</button>
            }
            )}
        </ul>
    )
}

export default Sidebar