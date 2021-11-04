const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

fetch('https://mini-todo-appz.herokuapp.com/v1/todos')
    .then(response => response.json())
    .then(data => {
        data.forEach(todo => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = todo.text;

            const h2 = document.createElement('h2');

            let status = "";

            if (todo.status === 1) {
                status = "To do";
            } else if (todo.status === 2) {
                status = "Doing";
            } else {
                status = "Done";
            }

            h2.textContent = `${status}`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(h2);
        });
    }).catch(err => {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Essa não! Não está funcionando!` + err.message;
        app.appendChild(errorMessage);
    });