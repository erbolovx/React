import React from 'react';

const List = (props) => {
    return (
        <div>
            {
                props.newApex.map((item) => (
                    <div style={{ marginTop: '20px' ,border: '5px red solid', display: 'flex', alignItems: 'center', gap: '20px', paddingLeft: '30px'}} key={item.id}>
                        <h2>{item.id}</h2>
                        <h1>{item.title}</h1>

                    </div>
                ))
            }
        </div>
    );
};

export default List;
