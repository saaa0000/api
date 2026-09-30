const API_URL = "http://127.0.0.1:5000"; // URL base da API

async function carregarUsuarios() {

    try {
        
        const response = await fetch(`${API_URL}/usuarios`);

        if (!response.ok) {
            throw new Error("Erro ao carregar usuários");
        }

        const usuarios = await response.json();
        const tbody = document.querySelector("#tabelaUsuarios tbody");

        tbody.innerHTML = "";

        usuarios.forEach(user => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nome}</td>
                <td>${user.email}</td>
                <td>${user.idade}</td>
                <td>${user.altura}</td>
                <td>
                    <a class="btn btn-danger"> "Apagar" </a>
            
                </td>
            `;

            tbody.appendChild(tr);
        });



    } catch (error) {
        
       

        alert("Erro: " + err.message);

    }
}
carregarUsuarios();