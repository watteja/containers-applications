import PropTypes from "prop-types";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {todos
        .map((todo) => {
          const doneInfo = (
            <>
              <span>This todo is done</span>
              <span>
                <button onClick={onClickDelete(todo)}> Delete </button>
              </span>
            </>
          );

          const notDoneInfo = (
            <>
              <span>This todo is not done</span>
              <span>
                <button onClick={onClickDelete(todo)}> Delete </button>
                <button onClick={onClickComplete(todo)}> Set as done </button>
              </span>
            </>
          );

          return (
            <div
              key={todo._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "70%",
                margin: "auto",
              }}
            >
              <span>{todo.text}</span>
              {todo.done ? doneInfo : notDoneInfo}
            </div>
          );
        })
        .reduce((acc, cur, idx) => [...acc, <hr key={`hr-${idx}`} />, cur], [])}
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default TodoList;
