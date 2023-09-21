# task-master

This project is my first attempt at building a Project Management App using GraphQL and Apollo Client. It allows users to manage clients and projects efficiently. Key features include client and project record management, database integration with MongoDB, and a GraphQL API for data retrieval and manipulation.

**Key Features:**

1. **Client Management:** Allows the creation, editing, and deletion of client records, including name, email, and phone details.

2. **Project Tracking:** Enables the management of projects, including project names, descriptions, statuses (Not Started, In Progress, Completed), and their associated clients.

3. **GraphQL API:** Utilizes GraphQL to provide a flexible and efficient API for querying and manipulating client and project data.

4. **Database Integration:** Connects to a MongoDB database to store and retrieve client and project information, ensuring data persistence.

**Function:**

This project management app serves as a centralised platform for managing clients and projects. It allows users to create and manage client records, including contact information. Additionally, users can track projects, specifying project names, descriptions, and current statuses.

The app leverages GraphQL to provide an API that offers fine-grained control over data retrieval and manipulation. Clients can query specific client or project details, update records, or even retrieve data from multiple sources in a single request.

**Tech Used:**

- **Node.js:** The backend is built using Node.js, providing a runtime environment for the server-side code.

- **Express.js:** Express is used to create the RESTful endpoints and handle HTTP requests.

- **MongoDB:** MongoDB serves as the database management system, storing client and project data.

- **Mongoose:** Mongoose is used to define and interact with MongoDB schemas and models.

- **GraphQL:** GraphQL is employed to create a flexible and efficient API for client and project data.

- **GraphQL-Express Middleware:** This middleware allows the integration of GraphQL with Express.js.

- **Cors:** CORS (Cross-Origin Resource Sharing) is implemented to handle cross-origin requests and enhance security.

- **dotenv:** The dotenv library is used to load environment variables from a `.env` file.

**Lessons Learned:**

1. **Schema Modeling:** Gained proficiency in defining clear and structured data schemas using Mongoose for MongoDB.

2. **GraphQL Implementation:** Learned how to leverage GraphQL to create a flexible and efficient API, allowing clients to request specific data.

3. **Database Integration:** Successfully integrated MongoDB with Node.js using Mongoose, ensuring data persistence.

4. **Middleware Usage:** Acquired knowledge of middleware usage, including CORS for handling cross-origin requests, enhancing the app's security.

5. **Environment Configuration:** Utilized environment variables with the dotenv library for configuring the application across different environments.

