import React, {useState, useEffect, useRef} from 'react'  //comecar com rfce - npm add react-icons>icones react

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');
    };
  
  
    return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
            <>
        <input
        placeholder='Editar Tarefa'
        value={input}
        name='text'
        className='todo-input edit'
        onChange={handleChange}
        ref={inputRef}
        />
        <button onClick={handleSubmit} className='todo-button edit'>Editar</button>
        </>
        ) :
        
        (
        <>
        <input
            placeholder='Adicionar Tarefa'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>Adicionar</button>
            </>)
        }

        
    </form>
  );
}

export default TodoForm;
