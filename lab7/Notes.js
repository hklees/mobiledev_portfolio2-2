import React, { useState } from 'react';

//user can input notes in box?
const Notes = props => props.data.map(note => <div>{note.text}</div>);

export default () => {
    //const stuff here
    const initialData = [{text: 'Enter extra notes here'}];
    const [data, setData] = useState(initialData);
    const handleClick = () => {
        const text = document.querySelector('#noteinput').value.trim();
        if (text) {
            //const here
            const nextState = produce (data, draftState => {
                draftState.push({text});
            });
            //setData
            setData(nextState);
        };
        document.querySelector('#noteinput').value = '';
        setData(nextState);
    }


    return (
        <>
        <input id='notesinput' type="text" placeholder="Enter notes here" />
        {/* button to sumbit note input */}
        <button onClick={() => handleClick()}>Add note</button>
        <Notes data={data} />
        </>
    );
};

