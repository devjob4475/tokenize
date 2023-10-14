import { Box } from '@mui/material'
import React from 'react'
import Title from './components/title';
import Button from './components/button';
import Input from './components/input';
import Table from './components/table';

export default function App(props) {
  
  return (
    <>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Title/>
        <Input/>
        <Button/>
      </Box>
      <Box sx={{mt:3,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Table/>
      </Box>
    </>
  )
}
