task = [
    {
        id: 1,
        name: "jugar",
    },
    {
        id: 2,
        name: "hacer tareas",
    },
    {
        id: 3,
        name: "ir al super",
    },
]
const saveTask = () => {
    //event.preventDefault();
    const newTask = document.querySelector("#newTask");
    if(!newTask.value) return alert("Ingrese una tarea");
    console.log(newTask.value);
    task.push({
        id: task.length + 1,
        name: newTask.value,
    });
    newTask.value = "";
    console.log(task);
    listTask();
}
const updateCounters = () => {
    const total = task.length;
    const realizadas = task.filter(t => document.getElementById(t.id).checked).length;
    const pendientes = total - realizadas;
    document.querySelector('.total-count').innerHTML = `Total: ${total}`;
    document.querySelector('.realizadas-count').textContent = `Realizadas: ${realizadas} | Pendientes: ${pendientes}`;
};
let checkboxState = {};
console.log(checkboxState);
const listTask = () => {
    const taskList = document.querySelector(".task-list");
    let html = "";
    task.map((task) => {
        const checked = checkboxState[task.id] ? 'checked' : '';
        html += `
        <div class="form-check">
            <input class="${task.id}" type="checkbox" value="" id="${task.id}" ${checked}>
                <label class="form-check-label" for="${task.id}">
                    ${task.name}-${task.id}
                </label>
        </div>
        `;
    });
    taskList.innerHTML = html;
    document.querySelectorAll('.form-check input').forEach(el => {
        el.addEventListener('change',()=>{
            updateCounters();
            updateCheckboxState();  
        } );
    });
};
listTask();

const updateCheckboxState = () => {
    task.map((t) => {
        checkboxState[t.id] = document.getElementById(t.id).checked;
    });
};


