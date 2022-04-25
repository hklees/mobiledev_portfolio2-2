import React, { useState } from 'react';
import produce from 'immer';
//user can input notes in box?
const Notes = props => props.data.map(note => <div>{note.text}</div>);

export default () => {
    //const stuff here
    const initialData = [{text: 'Notes will be added to this section'}];
    const [data, setData] = useState(initialData);
    const handleClick = () => {
        const text = document.querySelector('#noteinput').value.trim();
        if (text) {
            //const here
            const nextState = produce (data, draftState => {
                draftState.push({text});
            });
            //setData
            document.querySelector('#notesinput').value = '';
            setData(nextState);
        };
        document.querySelector('#notesinput').value = '';
        setData(nextState);
    };



    return (
        <>
        <input id='notesinput' type="text" placeholder="Enter your extra notes here" />
        {/* button to sumbit note input */}
        <button onClick={() => handleClick()}>Add note</button>
        <Notes data={data} />
        </>
    );
};

