import {  useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


const Container = styled.div`
    width:100%;
    height:95vh;
    background-color:gary;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState)
    const onInput =(event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any)
    }
    console.log(category)
    return (
        <Container>
            <h1>오늘의 목표</h1>
            <hr style={{width:200}} />
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>ToDo</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <hr style={{width:200}} />
            <CreateToDo />
            <h2>계획중인 할일</h2>
            <ul>
                {toDos?.map((toDo)=>
                    <ToDo key={toDo.id} {...toDo} />
                )}
            </ul>
        </Container>
    )
}

export default ToDoList