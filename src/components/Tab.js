import React, { useState } from 'react'

const Tab = (props) => {
    const { tab } = props;
    const [content, setContent] = useState('');
    const handleClick = (e) => {
        setContent(tab[e.target.value].content)
    }
    return (
        <div>
            <div>
                {
                    tab.map((tab, i) =>
                        <button onClick={handleClick} value={i} key={i}>Tab{i + 1}</button>
                    )
                }
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default Tab