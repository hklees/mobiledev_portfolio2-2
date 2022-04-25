import React, { useState } from 'react';
//new component #2

function Notes() {
    const [input, setInput] = useState("");
    const handleUserInput = (e) => {
        setInput(e.target.value);
    };
    const resetInputField = () => {
        setInput("");
    };

    return(
        <div>
            {/* <input type= "text" value={input} onChange={handleUserInput} /> */}
            {/* text area box */}
            <textarea id="body" value={input} onChange={handleUserInput} 
            placeholder="Write your notes in here. Expand this notes section if neccessary."/>
            {/* reset button */}
            <br></br>
            <button onClick={resetInputField}>Reset Notes</button>
        </div>
    );
}

export default Notes;


// //user can input notes in box?
// const Notes = props => props.data.map(note => <div>{note.text}</div>);

// export default () => {
//     //const stuff here
//     const initialData = [{text: 'Notes will be added to this section'}];
//     const [data, setData] = useState(initialData);
//     const handleClick = () => {
//         const text = document.querySelector('#notesinput').value.trim();
//         if (text) {
//             //const here
//             const nextState = produce (data, draftState => {
//                 draftState.push({text});
//             });
//             //setData
//             document.querySelector('#notesinput').value = '';
//             setData(nextState);
//         };
//         document.querySelector('#notesinput').value = '';
//         setData(nextState);
//     };



//     return (
//         <>
//         <input id='notesinput' type="text" placeholder="Enter your extra notes here" />
//         {/* button to sumbit note input */}
//         <button onClick={() => handleClick()}>Add note</button>
//         <Notes data={data} />
//         </>
//     );
// };

