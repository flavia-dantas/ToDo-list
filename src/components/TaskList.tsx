import { ITask } from "../interfaces/Task";
import { BsPencil, BsTrash } from "react-icons/bs";

interface TaskListProps {
  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit(task: ITask): void
}

const TaskList = ({ taskList, handleDelete, handleEdit }: TaskListProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div
            className={`flex justify-between max-w-[400px] my-0 mx-auto border-b-2 
            border-solid border-[#ccc] p-4`}
            key={task.id}
          >
            <div className="text-left">
              <h4 className="text-xl font-medium mb-4">{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <BsPencil
                className={`cursor-pointer bg-[#282c34] text-[#61dafb] p-1.5 rounded-md
                border-[2px] border-[#282c34] hover:bg-[#61dafb] hover:border-[#282c34] 
                hover:text-[#282c34]`}
                size="2rem"
                onClick={() => handleEdit(task)}
              />
              <BsTrash
                className={`cursor-pointer bg-[#282c34] text-[#61dafb] p-1.5 rounded-md
                border-[2px] border-[#282c34] hover:bg-[#61dafb] hover:border-[#282c34] 
                hover:text-[#282c34]`}
                size="2rem"
                onClick={() => { handleDelete(task.id); }}
              />
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
};

export default TaskList;
