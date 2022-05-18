import { Task } from "./../model";
import { LOCAL_STORAGE_TASKS } from "./Constants";

export const modifyCheckedFlag = (currentTask: Task, value: boolean) => {
  const tasksFromStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_TASKS) || ""
  );
  if (tasksFromStorage) {
    const newTaskList = tasksFromStorage.map((element: Task) => {
      if (element.id === currentTask.id) {
        return {
          ...element,
          isChecked: value,
        };
      } else {
        return element;
      }
    });
    localStorage.setItem(LOCAL_STORAGE_TASKS, JSON.stringify(newTaskList));
  }
};

export const getListFromStorage = (
  setData: React.Dispatch<React.SetStateAction<Task[]>>
) => {
  const tasksFromStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_TASKS) || ""
  );
  if (tasksFromStorage) {
    setData(tasksFromStorage);
  }
};
export const addTaskToStorage = (task: string) => {
  const tasksFromStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_TASKS) || ""
  );
  localStorage.setItem(
    LOCAL_STORAGE_TASKS,
    JSON.stringify([
      ...tasksFromStorage,
      { id: Date.now(), task, isChecked: false },
    ])
  );
};
export const deleteTaskFromStorage = (
  setData: React.Dispatch<React.SetStateAction<Task[]>>
) => {
  const tasksFromStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_TASKS) || ""
  );
  const newTaskList = tasksFromStorage.filter(
    (element: Task) => !element.isChecked
  );
  localStorage.setItem(LOCAL_STORAGE_TASKS, JSON.stringify(newTaskList));

  setData(newTaskList);
};
