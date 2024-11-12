class Client{
    constructor(id,name,email,phone){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    
    // displays client information
    display_client(){
        console.log('-'.repeat(10));
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log('-'.repeat(10));
    }
}


clients = [
    new Client(1, 'John Doe', 'john.doe@example.com', '123-456-7890'),
    new Client(2, 'Jane Smith', 'jane.smith@example.com', '987-654-3210'),
    new Client(3, 'Alice Johnson', 'alice.johnson@example.com', '555-555-5555'),
    new Client(4, 'Bob Brown', 'bob.brown@example.com', '777-777-7777')
]

// Display all clients
console.log('All Clients:');
for (let i = 0; i < clients.length; i++) {
    clients[i].display_client()
}