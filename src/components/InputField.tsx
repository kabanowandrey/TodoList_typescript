import { useRef } from "react";

 interface props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent) => void;
  }

const InputField: React.FC<props> = ({todo, setTodo, handleAdd}) => {
   const inputRef = useRef<HTMLInputElement>(null);
   
    return (
        <form className='input_task' onSubmit={(e) => {
            handleAdd(e) 
                inputRef.current?.blur();
            }}>
            <input
                className="enter_task"
                ref={inputRef}
                type="text"
                placeholder='Enter the task...'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className='button_go' type="submit">
                Go
            </button>
        </form>
    )
}

export default InputField