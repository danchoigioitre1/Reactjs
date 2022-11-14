import React from 'react';
import './HobbyList.css'


function HobbyList(props) {
    const { hobbyList, activeId, onHobbyClick } = props

    const handleClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby)
        }

    }



    return (
        <div>
            <ul className='hobby-list'>
                {hobbyList.map((hobby, index) => (
                    <li
                        className={hobby.id === activeId ? 'active' : ''}
                        key={index}
                        onClick={() => handleClick(hobby)}
                    >{hobby.title}</li>

                ))}

            </ul>
        </div>
    );
}

export default HobbyList;