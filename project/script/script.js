const btn_add = document.getElementById('add');
const btn_edit = document.querySelectorAll('.editBtn');
const btn_delete = document.getElementsByClassName('deleteBtn');
btn_add.addEventListener('click', () =>{
    alert('Please enter client');
})

// btn_edit.addClientEventListener('click', () =>{
//     alert('Please select client to edit');
// })
console.log(btn_edit)

class Client{
    constructor(id, name, email, phone){
        if(!id ||!name ||!email ||!phone){
            console.error('Missing required fields');
            return;  // exit the constructor if any required field is missing.
        }
        this.id = id;
        this.name = name;   
        this.email = email;
        this.phone = phone;
    }

    makeRaw(){
        return `
            <tr>
                <td class="highlight">${this.id}</td>
                <td>${this.name}</td>
                <td><a href="mailto:${this.email}">${this.email}</a></td>
                <td>${this.phone}</td>
                <td class="action">
                    <div class="btn">
                        <button class="detailBtn">Detail</button>
                        <button class="editBtn">Edit</button>
                        <button class="deleteBtn">Delete</button>
                    </div>
                </td>
            </tr>
        `
    }
    display(){
        const tableBody = document.getElementById('clientTableBody')
        if(!tableBody){
            console.error('Table body not found');
            return;
        }
        let rows = document.createElement("tr");
        rows.innerHTML = this.makeRaw();
        tableBody.appendChild(rows);
    }
}

class ClientManagement{
    constructor(){
        this.clients = [];
    }
    addClient(client){
        this.clients.push(client);
    }
    update(id,new_name, new_email, new_phone){
        const client = this.clients.find(c => c.id === id);
        if(!client){
            console.error('Client not found');
            return;
        }
        client.name = new_name;
        client.email = new_email
        client.phone = new_phone;
    }

    delete(clientId){
        // Find the index of the client with the given ID
        const clientIndex = this.clients.findIndex(client => client.id === clientId);

        if (clientIndex !== -1) {
            // Remove the client from the array using splice
            const deletedClient = this.clients.splice(clientIndex, 1);
            console.log(`Client ${deletedClient[0].name} deleted successfully.`);
        } else {
            console.log(`Client with ID ${clientId} not found.`);
        }
    }

    search(nameClient){
        const foundClients = this.clients.filter(client => client.name.includes(nameClient));
        if(foundClients.length === 0){
            console.log('No clients found');
            return;
        }
        foundClients.forEach(client => client.display());  // display each found client's information
    }

    display(){
        this.clients.forEach(client => client.display());  // display each client's information
    }
}

clients = [
    new Client(1, 'John Doe', 'john.doe@example.com', '123-456-7890'),
    new Client(2, 'Jane Smith', 'jane.smith@example.com', '098-765-4321'),
    new Client(3, 'Alice Johnson', 'alice.johnson@example.com', '555-555-5555'),
    new Client(4, 'Bob Brown', 'bob.brown@example.com', '777-777-7777'),
    new Client(5, 'Emily White', 'emily.white@example.com', '111-222-3333')
]

s_m = new ClientManagement()
clients.forEach(client => s_m.addClient(client))
s_m.update(2,"client","client@example.com","1234567890")
s_m.search("John Doe")
// s_m.delete(4)

s_m.display()

// display_all(clients);