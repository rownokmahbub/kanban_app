import React from 'react'
import { MoreHorizontal } from 'react-feather'
import Card from '../Card/Card'
import Editable from '../Editable/Editable'
import "./Board.css"
const Board = () => {
  return (
    <div className='board'>
       <div className="board_header">
        <p className='board_header_title'>
             todo<span>2</span></p>
             <MoreHorizontal/> 
       </div>
       <div className="board_cards custom-scroll">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Editable/>
</div>
    </div>
  )
}

export default Board