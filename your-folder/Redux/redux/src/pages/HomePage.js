import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/HobbyList';

import { addNewHobby, setActiveHobby } from '../actions/hobby'


const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage(props) {

    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.activeId)

    const dispatch = useDispatch()
    const handleAddHobbyClick = () => {
        //id + title
        const newId = randomNumber()
        const newHobby = {

            id: newId,
            title: `Hobby ${newId}`
        }

        const action = addNewHobby(newHobby)
        dispatch(action)
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby)
        dispatch(action)
    }

    return (
        <div>
            <h1>REACT HOOKS - Home page</h1>

            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />

        </div>
    );
}

export default HomePage;