export const MessageItem = ({ message, onRemove }) => (
  <li className="messageItem">
    {message}___________
    <button onClick={onRemove}>Удалить</button>
  </li>
);
