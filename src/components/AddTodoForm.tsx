import { Button, FormControl, HStack, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import useSound from 'use-sound'

import dingSfx from '../sounds/dingelevator.mp3';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm = ({ addTodo }: Props) => {
  const [text, setText] = useState("")
  const [playDingSfx] = useSound(dingSfx)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if (text !== "") {
      playDingSfx()
      addTodo(text)
      setText('')
    } else {
      console.error("err: empty todo")
    }
  }

  //!! handleSubmit no hace falta porque lee handleclick al submitear

  // const handleSubmit = (e: any) => {
  //   // e.preventDefault();
  //   console.log("asdasd")
  //   addTodo(text)
  //   setText('')
  // }


  return (
    <FormControl as={"form"} textAlign={'center'}>
      <HStack>
        <Input placeholder='Add a todo...' type='text' value={text} onChange={handleChange} />
        <Button type='submit' onClick={handleClick}><AddIcon /></Button>
      </HStack>
    </FormControl>
  )
}