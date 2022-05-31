import { render } from '@testing-library/react';
import { Button } from './Button';
test('button renders correctly', () =>{
  const {debug} = render(
    <Button label="Confirmar"/>
  )
  debug()
})
