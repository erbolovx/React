import React from 'react';
import List from './component/List'
const App = () => {
    const apex = [
        {
            id:1 ,
            title: 'coding',
            completed: false
        },
        {
            id:2,
            title: 'eat',
            completed: false
        },
        {
            id: 3,
            title: 'sleep',
            completed: false

        }
        ]

    return(
        <div>
        <List newApex = {apex}/>
        </div>
        )


};

export default App;