"use strict";

// bt correspond au bouton + 
let bt = document.querySelector('#ajouter');

bt.onclick = function click() {

    let list = document.querySelector('#list').value;

    if (list == "") {
        // Ici  dans la condition de ce if, je met aucune instruction car l'utilisateur n'a rien entré
    } else {
        // Je créée une balise li qui sera la tâche que j'ai écris dans l'input 
        let newTask = document.createElement('li');
        newTask.textContent = document.querySelector('#list').value;
        document.body.insertBefore(newTask, document.querySelector('footer'));
        newTask.style.fontSize = "3rem";
        newTask.style.border = "1px solid black";
        newTask.style.padding = "1rem";

        // pour remettre le texte à 0
        document.querySelector('#list').value = "";

        // pour le bouton supprimer la tâche 
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute('type', 'button');
        let x = document.createTextNode("x");
        deleteButton.appendChild(x);
        newTask.appendChild(deleteButton);
        // Quand j'appuie sur le bouton, je supprimer la balise li (la tâche)
        deleteButton.onclick = function deleteTask() {
            newTask.remove();
        }
    }

}

// https://codepen.io/Simson/pen/jrzqqw

