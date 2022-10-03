import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { SendMessageForm } from './index';

const onSubmit = jest.fn();
const onChange = jest.fn();

describe('SendMessageForm component', () => {
  
  it('render SendMessageForm component', () => {
     render(<SendMessageForm
        onSubmit={onSubmit}
      >
        <button onClick={onSubmit}>Отправить</button>
      </SendMessageForm>);
      expect(screen.getByText(/отправить/i)).toBeInTheDocument()
  })
  
   it('custom isLoading works correctly', () => {
      render(<SendMessageForm isLoading='true' />)
      expect(screen.getByText(/loading.../)).toBeInTheDocument()
   })

   it('custom isError works correctly', () => {
    render(<SendMessageForm isError='true' />)
    expect(screen.getByText(/error/)).toBeInTheDocument()
   })

   it('onChange worcs', () => {
      render(<SendMessageForm onChange={onChange} />)
      userEvent.type(screen.getByRole('textbox'), 'React')
      expect(onChange).toHaveBeenCalledTimes(5)
   })
})