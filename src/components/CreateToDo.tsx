import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

const ToDoForm = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    input{
        width: 100%;
        height: 36px;
        padding: 8px;
        box-sizing: border-box;
        border-radius: 8px;
        border: none;
    }
    button{
        width: 100%;
        border-radius: 8px;
        border: none;
    }
`;

interface IForm {
    toDo: string;
}


function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const onSubmit = ({ toDo }:IForm)=>{
        setToDos((oldToDos) => [
            { text:toDo,id:Date.now(), category:category }, ...oldToDos
        ]);
        setValue("toDo","")
    }

    return (
        <ToDoForm onSubmit={handleSubmit(onSubmit)}>
            <input {...register("toDo",{
                required:"입력값이 없습니다."
            })} placeholder="오늘의 일정!" />
            <span></span>
            <button>추가하기</button>
        </ToDoForm>

    )
}

export default CreateToDo;