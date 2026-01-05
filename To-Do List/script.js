function addTodo(){
    // récupérer la valeur
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim(); 

    // Vérifier si la valeur est vide
    if (todoText === '') return;  // le return arrête la fonction 

    // récupérer la liste
    const todoList = document.getElementById('todo-list');

    // créer la tâche
    const li = document.createElement('li');
    li.textContent = todoText; // va créer le li qui va contenir la tâche 

    //boutton supprimer 
    const btnSupr = document.createElement('button'); //Creation bouton supprimer dans le dom
    btnSupr.textContent = "Supprimer"; 
    btnSupr.classList.add('btnSupr');
    btnSupr.onclick = function() {
        todoList.removeChild(li)
    }

    li.appendChild(btnSupr)
    todoList.appendChild(li); // création de l'enfant (appendchild) dans son parent (todolist ->ul)

    // Réinitialiser la valeur
        input.value = "";
}