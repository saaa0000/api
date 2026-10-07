const API_URL = "http://127.0.0.1:5000";


async function carregarPedidos() {

    try {

        const response = await fetch(`${API_URL}/pedidos`);

        if (!response.ok) {

            throw new Error("Erro ao carregar pedidos");

        }

        const pedidos = await response.json();

        const tbody = document.querySelector("#tabelaPedidos tbody");

        tbody.innerHTML = "";

        pedidos.forEach(pedido => {

            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${pedido.id}</td>
                <td>${pedido.usuario}</td>
                <td>${pedido.produto}</td>
                <td>${pedido.Quantidade}</td>
                <td>R$ ${pedido.total.toFixed(2)}</td>

                <td>

                    <button 
                        class="btn btn-warning"
                        onclick="editarPedido(${pedido.id})">
                        Editar
                    </button>

                </td>
            `;

            tbody.appendChild(tr);

        });

    } catch (error) {

        alert("Erro: " + error.message);

    }

}


async function editarPedido(pedidoID) {

    window.location.href = `editarPedido.html?id=${pedidoID}`;

}


carregarPedidos();