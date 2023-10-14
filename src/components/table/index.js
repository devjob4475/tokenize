import React from 'react'
import { head } from '../../data/head'
import { useDataContext } from '../../context';

export default function Index(props) {
    const { data, setData } = useDataContext();

    return (
        <>
        <table style={{ borderCollapse: "collapse", width: "80%" }}>
        <thead>
        <tr>
          {head.map((column, index) => (<th key={index} style={{ border: "1px solid #ccc", padding: "8px" }}>{column}</th>))}
        </tr>
        </thead>
        <tbody>
          <tr >
            {data.datatoken.map((item, index) => (<td key={index} className='td' style={{ border: "1px solid #ccc", padding: "8px" }}>{item.value}</td>))}
          </tr>
        </tbody>
        </table>
        </>
    )
}
