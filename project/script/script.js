// JSON data
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

function display_all(Clients){
    Clients.forEach(client => client.display()); 
}

clients = [
    new Client(1, 'John Doe', 'john.doe@example.com', '123-456-7890'),
    new Client(2, 'Jane Smith', 'jane.smith@example.com', '098-765-4321'),
    new Client(3, 'Alice Johnson', 'alice.johnson@example.com', '555-555-5555'),
    new Client(4, 'Bob Brown', 'bob.brown@example.com', '777-777-7777'),
    new Client(5, 'Emily White', 'emily.white@example.com', '111-222-3333')
]

display_all(clients);