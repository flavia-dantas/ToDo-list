import { useState } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ITask } from "./interfaces/Task";


function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaksToUpdate] = useState<ITask | null>(null);
  const [showModal, setShowModal] = useState(true);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    );
  };

  const editTask = (task: ITask): void => {
    setShowModal(true);
    setTaksToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {

    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updateTask : task;
    });

    setTaskList(updatedItems);
    setShowModal(false);
  };

  return (
    <div>
      <Modal closeModal={() => setShowModal(false)} showModal={showModal}>
        <TaskForm
          btnText="Editar Tarefa"
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />
      </Modal>
      <Header />
      <main className="min-h-[60vh] text-center p-8">
        <div>
          <h2 className="mb-3">O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2 className="mb-3">Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
