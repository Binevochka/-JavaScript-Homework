const ToDoList = {
    tasks: [],
    nextId: 1,

    addTask(name, priority, description = null) {
        const task = { id: this.nextId, name, priority: parseInt(priority), description };
        this.tasks.push(task);
        this.nextId++;
        this.displayTasks();
    },

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.displayTasks();
    },

    updateTask(taskId, newName = null, newPriority = null, newDescription = null) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            if (newName !== null) task.name = newName;
            if (newPriority !== null) task.priority = parseInt(newPriority);
            if (newDescription !== null) task.description = newDescription;
        }
        this.displayTasks();
    },

    sortTasksByPriority() {
        this.tasks.sort((a, b) => a.priority - b.priority);
        this.displayTasks();
    },

    sortTasksById() {
        this.tasks.sort((a, b) => a.id - b.id);
        this.displayTasks();
    },

    displayTasks() {
        console.clear();
        console.log('Список задач:');
        this.tasks.forEach(task => {
            const desc = task.description ? ` Описание: ${task.description}` : '';
            console.log(`ID: ${task.id}. Название: ${task.name}. Приоритет: ${task.priority}.${desc}`);
        });
    },

    promptAddTask() {
        const name = prompt('Введите название задачи:');
        const priority = prompt('Назначьте приоритет задаче:');
        const description = prompt('Введите описание задачи (опционально):');
        this.addTask(name, priority, description || null);
    },

    promptRemoveTask() {
        const taskId = parseInt(prompt('Введите ID задачи для удаления:'));
        this.removeTask(taskId);
    },

    promptUpdateTask() {
        const taskId = parseInt(prompt('Введите ID задачи для обновления:'));
        const newName = prompt('Введите новое название задачи (оставьте пустым, чтобы не изменять):');
        const newPriority = prompt('Введите новый приоритет задачи (оставьте пустым, чтобы не изменять):');
        const newDescription = prompt('Введите новое описание задачи (оставьте пустым, чтобы не изменять):');
        this.updateTask(taskId, newName || null, newPriority || null, newDescription || null);
    },

    promptSortTasksByPriority() {
        this.sortTasksByPriority();
    },

    promptSortTasksById() {
        this.sortTasksById();
    }
};

let c = true;

while (c) {
    const action = prompt('Выберите действие: \n1. Добавить задачу \n2. Удалить задачу \n3. Обновить задачу \n4. Сортировать по приоритету \n5. Сортировать по ID \n6. Выйти');
    switch (action) {
        case '1':
            ToDoList.promptAddTask();
            break;
        case '2':
            ToDoList.promptRemoveTask();
            break;
        case '3':
            ToDoList.promptUpdateTask();
            break;
        case '4':
            ToDoList.promptSortTasksByPriority();
            break;
        case '5':
            ToDoList.promptSortTasksById();
            break;
        case '6':
            c = false;
            break;
        default:
            console.log('Некорректное действие, пожалуйста, выберите от 1 до 6.');
    }
}