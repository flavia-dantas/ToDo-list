import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ITask } from "../interfaces/Task";

interface TaskFormProps {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?(id: number, title: string, difficulty: number): void
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: TaskFormProps) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };
      setTaskList!([...taskList, newTask]);
      setTitle("");
      setDifficulty(0);
      console.log(taskList);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form
      onSubmit={addTaskHandler}
      className="flex flex-col max-w-[400px] my-0 mx-auto"
    >

      <div className="flex flex-col text-left">
        <label
          className="font-bold mb-2"
          htmlFor="title">
          Título:
        </label>
        <input
          className="py-2 px-4 mb-6 rounded-xl border-solid border-[2px] border-[#282c34]"
          onChange={handleChange}
          type="text"
          name="title"
          value={title}
          placeholder="Título da Tarefa" />
      </div>

      <div className="flex flex-col text-left">
        <label
          className="font-bold mb-2"
          htmlFor="difficulty">
          Dificuldade:
        </label>
        <input
          className="py-2 px-4 mb-6 rounded-xl border-solid border-[2px] border-[#282c34]"
          onChange={handleChange}
          type="text"
          name="difficulty"
          value={difficulty}
          placeholder="Dificuldade da Tarefa" />
      </div>

      <input
        className={`bg-[#282c34] rounded-xl border-solid border-[2px] border-[#282c34] 
        text-[#61dafb] transition duration-75 cursor-pointer h-11
        hover:bg-[#61dafb] hover:text-[#282c34]`}
        type="submit"
        value={btnText} />
    </form>
  );
};

export default TaskForm;
