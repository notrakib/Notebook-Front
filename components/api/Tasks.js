import global from '../../global';

const CreateTask = async newTask => {
  return fetch(`${global.Base_URL}/create-toDO`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTask),
  })
    .then(res => {
      return res.json();
    })
    .then(returnObj => {
      if (returnObj.error) {
        console.log(returnObj.error);
      } else {
        return returnObj;
      }
    })
    .catch();
};

const CreateTaskLists = async (newTaskList, taskId) => {
  return fetch(`${global.Base_URL}/create-toDOList/${taskId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTaskList),
  })
    .then(res => {
      return res.json();
    })
    .then(returnObj => {
      if (returnObj.error) {
        console.log(returnObj.error);
      } else {
        return returnObj;
      }
    })
    .catch();
};

const EditTaskLists = async (newTaskList, taskListId) => {
  return fetch(`${global.Base_URL}/edit-toDOList/${taskListId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTaskList),
  })
    .then(res => {
      return res.json();
    })
    .then(returnObj => {
      if (returnObj.error) {
        console.log(returnObj.error);
      } else {
        return returnObj;
      }
    })
    .catch();
};

const FetchAllTasks = async () => {
  return fetch(`${global.Base_URL}/fetch-all-toDO`)
    .then(res => {
      return res.json();
    })
    .then(returnObj => {
      if (returnObj.error) {
        console.log(returnObj.error);
      } else {
        return returnObj;
      }
    })
    .catch();
};

const FetchTaskLists = async taskId => {
  return fetch(`${global.Base_URL}/fetch-all-toDOList/${taskId}`)
    .then(res => {
      return res.json();
    })
    .then(returnObj => {
      if (returnObj.error) {
        console.log(returnObj.error);
      } else {
        return returnObj;
      }
    })
    .catch();
};

const ChangeStatusTaskList = async (taskListId, status) => {
  return fetch(`${global.Base_URL}/change_status-toDOList/${taskListId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(status),
  })
    .then(res => {
      return res.json();
    })
    .then(returnObj => {
      if (returnObj.error) {
        console.log(returnObj.error);
      } else {
        return returnObj;
      }
    })
    .catch();
};

const DeleteTask = async taskId => {
  return fetch(`${global.Base_URL}/delete-toDO/${taskId}`, {
    method: 'DELETE',
  })
    .then(res => {
      return res.json();
    })
    .then(returnObj => {
      if (returnObj.error) {
        console.log(returnObj.error);
      } else {
        return returnObj;
      }
    })
    .catch();
};

export {
  FetchAllTasks,
  FetchTaskLists,
  CreateTaskLists,
  CreateTask,
  EditTaskLists,
  ChangeStatusTaskList,
  DeleteTask,
};
