// We can simulate receiving a JSON file by storing the raw JSON string in a variable.
// This allows the project to run locally in the browser without an HTTP server.
// Initialized database containing products, customers, and a set of offices.
const rawJsonData = `
{
  "products": [
    {
      "productId": "PROD-001",
      "name": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 129.99,
      "stock": 45
    },
    {
      "productId": "PROD-002",
      "name": "4K Gaming Monitor",
      "category": "Electronics",
      "price": 499.50,
      "stock": 18
    },
    {
      "productId": "PROD-003",
      "name": "Noise-Cancelling Headphones",
      "category": "Audio",
      "price": 249.00,
      "stock": 32
    },
    {
      "productId": "PROD-004",
      "name": "Standing Desk",
      "category": "Furniture",
      "price": 389.00,
      "stock": 12
    },
    {
      "productId": "PROD-005",
      "name": "HD Webcam",
      "category": "Accessories",
      "price": 89.95,
      "stock": 25
    }
  ],
  "customers": [
    {
      "customerId": "CUST-001",
      "firstName": "Alice",
      "lastName": "Smith",
      "email": "alice.smith@example.com",
      "phone": "555-0101",
      "address": "123 Maple St",
      "city": "Springfield",
      "state": "IL",
      "zipCode": "62701",
      "status": "Active"
    },
    {
      "customerId": "CUST-002",
      "firstName": "Bob",
      "lastName": "Johnson",
      "email": "bob.j@example.com",
      "phone": "555-0102",
      "address": "456 Oak Ave",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "status": "Inactive"
    },
    {
      "customerId": "CUST-003",
      "firstName": "Carol",
      "lastName": "Williams",
      "email": "carol.w@example.com",
      "phone": "555-0103",
      "address": "789 Pine Rd",
      "city": "Gotham",
      "state": "NJ",
      "zipCode": "07001",
      "status": "Active"
    },
    {
      "customerId": "CUST-004",
      "firstName": "David",
      "lastName": "Brown",
      "email": "dbrown@example.com",
      "phone": "555-0104",
      "address": "321 Elm St",
      "city": "Star City",
      "state": "CA",
      "zipCode": "90210",
      "status": "Active"
    },
    {
      "customerId": "CUST-005",
      "firstName": "Eve",
      "lastName": "Davis",
      "email": "eve.davis@example.com",
      "phone": "555-0105",
      "address": "654 Birch Blvd",
      "city": "Central City",
      "state": "OH",
      "zipCode": "43215",
      "status": "Pending"
    }
  ],
  "offices": [
    {
      "officeId": "OFF-001",
      "name": "Global Headquarters",
      "address": "100 N Riverside Plaza",
      "city": "Chicago",
      "state": "IL",
      "phone": "312-555-0199",
      "employees": 240
    },
    {
      "officeId": "OFF-002",
      "name": "Northeast Branch",
      "address": "450 Lexington Ave",
      "city": "New York",
      "state": "NY",
      "phone": "212-555-0144",
      "employees": 115
    },
    {
      "officeId": "OFF-003",
      "name": "West Coast Tech Hub",
      "address": "500 Howard St",
      "city": "San Francisco",
      "state": "CA",
      "phone": "415-555-0177",
      "employees": 180
    },
    {
      "officeId": "OFF-004",
      "name": "Southern Operations",
      "address": "701 Brazos St",
      "city": "Austin",
      "state": "TX",
      "phone": "512-555-0122",
      "employees": 95
    }
  ]
}
`;

// "Ingest" the JSON document by parsing the raw string into JavaScript objects
const database = JSON.parse(rawJsonData);

// Helper function to pause execution, simulating a streaming data feed
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Establish a JavaScript-based tool for iterating that database and printing data streams
async function iterateDatabaseStream(db) {
  console.log("=== DATABASE STREAM REPORT ===\n\n");

  // --- STREAM 1: PRODUCTS ---
  console.log(">>> [STREAMING PRODUCTS]");
  for (const product of db.products) {
    await sleep(350); // Pause to print as a stream
    console.log(`Product ID:  ${product.productId}`);
    console.log(`Name:        ${product.name}`);
    console.log(`Category:    ${product.category}`);
    console.log(`Price:       $${product.price.toFixed(2)}`);
    console.log(`Stock:       ${product.stock} units`);
    console.log("--------------------------------------------------");
  }
  console.log(`Products Processed: ${db.products.length}\n\n`);

  // --- STREAM 2: CUSTOMERS ---
  console.log(">>> [STREAMING CUSTOMERS]");
  for (const customer of db.customers) {
    await sleep(350); // Pause to print as a stream

    // Variables to hold the marshalled contents
    const id = customer.customerId;
    const fullName = `${customer.firstName} ${customer.lastName}`;
    const email = customer.email;
    const phone = customer.phone;
    const address = `${customer.address}, ${customer.city}, ${customer.state} ${customer.zipCode}`;
    const status = customer.status;

    // Reformat the data for human reading and print it to the console
    console.log(`Customer ID: ${id}`);
    console.log(`Name:        ${fullName}`);
    console.log(`Contact:     ${email} | ${phone}`);
    console.log(`Address:     ${address}`);
    console.log(`Status:      ${status}`);
    console.log("--------------------------------------------------");
  }
  console.log(`Customers Processed: ${db.customers.length}\n\n`);

  // --- STREAM 3: OFFICES ---
  console.log(">>> [STREAMING OFFICES]");
  for (const office of db.offices) {
    await sleep(350); // Pause to print as a stream
    console.log(`Office ID:   ${office.officeId}`);
    console.log(`Name:        ${office.name}`);
    console.log(`Location:    ${office.address}, ${office.city}, ${office.state}`);
    console.log(`Phone:       ${office.phone}`);
    console.log(`Employees:   ${office.employees}`);
    console.log("--------------------------------------------------");
  }
  console.log(`Offices Processed: ${db.offices.length}\n\n`);

  const totalProcessed = db.products.length + db.customers.length + db.offices.length;
  console.log(`Total Database Records Processed: ${totalProcessed}`);
}

// Execute the iteration tool
iterateDatabaseStream(database);
