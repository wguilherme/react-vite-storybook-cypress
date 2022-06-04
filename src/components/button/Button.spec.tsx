import { render, screen } from '@testing-library/react';
import { Button } from './Button';
test('button renders correctly', () =>{
  // expect(1+1).toBe(3);
  const {debug} = render(
    <Button label="Confirmei"/>
  )
  expect(screen.getByText('Confirmei')).toBeInTheDocument();
  debug()
})
