import React from 'react'
import Button from '../../button/Button'

export default function Item({name, isDone, onToggle, id, onDelete}) {
  return (
    <div>
        <input onChange={onToggle} checked={isDone} type="checkbox" />
        <span>{name}</span>
        <Button onClick={onDelete}>x</Button>
    </div>
  )
}
