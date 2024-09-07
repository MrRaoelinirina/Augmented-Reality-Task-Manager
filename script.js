document.addEventListener('DOMContentLoaded', () => {
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', true);
    scene.setAttribute('arjs', 'sourceType: webcam;');
    document.getElementById('ar-container').appendChild(scene);

    const marker = document.createElement('a-marker');
    marker.setAttribute('preset', 'hiro');
    scene.appendChild(marker);

    const taskList = document.createElement('a-entity');
    taskList.setAttribute('id', 'task-list');
    taskList.setAttribute('position', '0 0 -2');
    marker.appendChild(taskList);

    document.getElementById('add-task').addEventListener('click', () => {
        const title = document.getElementById('task-title').value;
        if (title) {
            const task = document.createElement('a-text');
            task.setAttribute('value', title);
            task.setAttribute('position', `0 ${taskList.children.length * 1} 0`);
            task.setAttribute('color', '#000');
            taskList.appendChild(task);
            document.getElementById('task-title').value = '';
        }
    });
})
