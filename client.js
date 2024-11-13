

class Client{
    constructor(id,name,email,phone){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    
    // displays client information
    display(){
        const tableBody = document.getElementById('clientTableBody')
        let rows = document.createElement("tr");
        rows.innerHTML = `
            <td class="highlight">${this.id}</td>
            <td>${this.name}</td>
            <td><a href="mailto:${this.email}">${this.email}</a></td>
            <td>${this.phone}</td>
        `;
        // rows.classList.add('hightlight');
        tableBody.appendChild(rows);
    }
}


clients = [
    new Client(1, 'John Doe', 'john.doe@example.com', '123-456-7890'),
    new Client(2, 'Jane Smith', 'jane.smith@example.com', '987-654-3210'),
    new Client(3, 'Alice Johnson', 'alice.johnson@example.com', '555-555-5555'),
    new Client(4, 'Bob Brown', 'bob.brown@example.com', '777-777-7777'),
    new Client(5, 'Emily White', 'emily.white@example.com', '111-222-3333'), 
    new Client(6, 'Michael Green', 'michael.green@example.com', '444-555-6666'), 
    new Client(7, 'Jessica Blue', 'jessica.blue@example.com', '777-888-9999'), 
    new Client(8, 'David Black', 'david.black@example.com', '000-111-2222')
]

// Display all clients
// console.log('All Clients:');
for (let i = 0; i < clients.length; i++) {
    console.log(clients[i].name);
    clients[i].display()
}