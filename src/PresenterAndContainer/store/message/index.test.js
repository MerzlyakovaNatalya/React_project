import { messageReducer, initialState } from './reducer';
import { createAddMessageSuccess } from './actions';

describe('messageReducer', () => {
    
    it('вызов редьюсера без экшена вернёт initialState', () => {
        const result = messageReducer();
        expect(result).toEqual(initialState);
    })

    it('сообщение добавляется в конец списка', () => {
        const result = messageReducer(undefined, createAddMessageSuccess({message: 'ok', id: 1}))
        expect(result).toEqual({
            messages: [{message: 'ok', id: 1}],
            isLoading: false,
            isError: false,
          })
    })
})