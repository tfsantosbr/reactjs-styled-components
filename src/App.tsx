import { useState } from 'react'
import { Button } from './components/Button'
import { ButtonWithStyledComponent } from './components/ButtonWithStyledComponent'

export function App() {
  return (
    <>
      <h1>Normal Button</h1>
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="danger" />
      <Button color="success" />
      <Button />

      <h1>Styled Component Button</h1>
      <ButtonWithStyledComponent variant="primary" />
      <ButtonWithStyledComponent variant="secondary" />
      <ButtonWithStyledComponent variant="danger" />
      <ButtonWithStyledComponent variant="success" />
      <ButtonWithStyledComponent />
    </>
  )
}