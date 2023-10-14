import React from 'react'
import { useDataContext } from '../../context';

export default function Index(props) {
    const { data, setData } = useDataContext();
    return (
        <><button className='btnsubmit' onClick={()=>{setData(prevData => ({...prevData,active: true}));}}>Save</button></>
    )
}
