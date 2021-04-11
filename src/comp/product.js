import React from 'react';
import {useHistory, useParams} from 'react-router';

export default function Product(){
const history = useHistory();
const value  = useParams();

console.log('params',value,history);
    return(
        <div>
            Item Page
            {JSON.stringify(value)}
        </div>
    )
}