tasks = [
    {
        id: 1,
        name: 'Task 1',
    },
    {
        id: 2,
        name: 'Task 2',
    },
]

const listTask = () => {
    const taskList = document.querySelector('.task-list');
    let html = '';
    tasks.map((t) => {
        html += `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="${t.id}">
             <label class="form-check-label" for="${t.id}">
             ${t.name}-${t.id}
             </label>
        </div>
        `
    })
    taskList.innerHTML = html;

    document.querySelectorAll('.form-check input').forEach(el=>{
        el.addEventListener('change',()=>{
            updateCounters();
        })
    })
    
}
listTask();

const saveTask = () => {
    const newTask = document.querySelector('#newTask');
    if (!newTask.value) return alert('Please enter task name');
    tasks.push({
        id: tasks.length + 1,
        name: newTask.value
    })
    newTask.value = '';
    listTask();
    updateCounters();
}

const updateCounters=()=>{
    const total=tasks.length;
    const realizadas=tasks.filter(t=>document.getElementById(t.id).checked).length
    const pendientes=total-realizadas;
    document.querySelector('.total-count').innerHTML=`Total: ${total}`;
    document.querySelector('.realizadas-count').innerHTML=`Realizadas: ${realizadas} | Pendientes: ${pendientes}`;

}
updateCounters();


