import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addTodo, delTodo } from "@/store/todoSlice"
const Main = () => {
  const dispatch = useDispatch()
  const todoList = useSelector(state => state.todo.todoList)
  const inputDom = useRef()
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleKeyDown = (e) => {
    if(e.key !== 'Enter'){
      return;
    }
    dispatch(addTodo(inputValue))
    inputDom.current.value = ""
  }
  const delTodoItem = index => {
    dispatch(delTodo(index))
  }

  useEffect(()=>{
    inputDom.current.focus()
  }, [])
  return (
    <div className="main">
      <div className="main_container">
        <input
          type="text"
          placeholder="Text Here"
          className="main_input"
          ref={inputDom}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <ul className="main_list no-scrollbar">
          {todoList.length > 0 && todoList.map((item,i) => {
            return (
              <li
                key={i}
                className="cursor-pointer"
                onClick={()=>delTodoItem(i)}
              >
                <span className="pr-4">{i+1 + '.'}</span>
                <span>{item}</span>
              </li>
            )
          })}

          {todoList.length === 0 &&
            <p className="noData">
              <span>No Data</span>
            </p>
          }
        </ul>
      </div>
    </div>
  )
}
export default Main