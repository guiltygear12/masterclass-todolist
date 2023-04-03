import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList(){
    const{register, watch} = useForm();
    console.log(watch("Email"))
    return(
        <div>
            <form>
                <input {...register("Email")} placeholder="Email" />
                <input {...register("FirstName")} placeholder="FirstName" />
                <input {...register("LastName")} placeholder="LastName" />
                <input {...register("UserName")} placeholder="UserName" />
                <input {...register("Password1")} placeholder="Password1" />
                <input {...register("Password2")} placeholder="Password2" />
                <button>추가하기</button>
            </form>
        </div>
    )
}

// function ToDoList(){
//     const[toDo, setToDo] = useState("");
//     const [toDoError, setToDoError] = useState("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>) =>{
//         const{
//             currentTarget:{value},
//         } = event;
//         setToDoError("")
//         setToDo(value)
//     };
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
//         event.preventDefault();
//         console.log(toDo);
//         if(toDo.length < 10){
//             return setToDoError("할일의 길이가 짧습니다.")
//         }
//         console.log("성공적으로 등록되었습니다.")
//     };
//     return(
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} type="text" value={toDo} placeholder="할일을 적어주세요" />
//                 <button>추가하기</button>
//                 {toDoError !== "" ? toDoError : null}
//             </form>
            
//         </div>
//     )
// }

export default ToDoList