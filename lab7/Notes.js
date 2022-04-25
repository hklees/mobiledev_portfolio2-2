import React, { useState } from 'react';

//user can input notes in box?
export default() => {
    //const stuff here
    const initialData = [{text: 'Enter extra notes here'}];
    const [data, setData] = useState(initialData);

}

return (
    <>
    <input id='notesinput' type="text" placeholder="Enter notes here" />
    //button to sumbit note input
    <button onClick={() => handleClick()}>Add note</button>
    <Notes data={data} />
    </>
);
};
