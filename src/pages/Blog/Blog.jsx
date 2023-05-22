import React from 'react';

const Blog = () => {
    return (
        <div className='p-24 text-yellow-50 space-y-5'>
            <h1 className='text-4xl text-bold text-blue-950 text-center mb-4'>Blogs</h1>
            <h1 className='bg-blue-950 p-2 rounded'>Q1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <div className='bg-blue-800 p-10 rounded'>Ans: Access tokens and refresh tokens are commonly used in authentication systems to provide secure access to resources and extend the validity of the access token without requiring the user to reauthenticate.

An access token is a credential that is used to access protected resources, such as APIs or server-side endpoints. It is typically issued by an authentication server after successful user authentication. Access tokens are time-limited and contain information about the user and their permissions.

A refresh token, on the other hand, is a long-lived credential that is used to obtain a new access token without requiring the user to provide their credentials again. When the access token expires, the refresh token can be sent to the authentication server to request a new access token. Refresh tokens are usually associated with a longer expiration period compared to access tokens.

Here's a high-level overview of how access tokens and refresh tokens work together:
<ol>
    <li>User authentication: The user provides their credentials (e.g., username and password) to the authentication server.</li>
    <li>Token issuance: Upon successful authentication, the authentication server generates an access token and a refresh token.</li>
    <li>Access token usage: The client includes the access token in each request to access protected resources, typically by adding it to the request headers (e.g., Authorization header).</li>
    <li>Token expiration: The access token has an expiration time after which it is no longer valid.</li>
    <li>Token refresh: If the access token expires, the client can send the refresh token to the authentication server to request a new access token.</li>
    <li>New access token issuance: The authentication server validates the refresh token and, if valid, issues a new access token to the client</li>
    <li>Repeat steps 3-6: The client continues to use the new access token to access protected resources until it expires, and the process repeats.</li>
</ol>
</div>

<h1 className='bg-blue-950 p-2 rounded'>Q2.Compare SQL and NoSQL databases?</h1>
  <div className='bg-blue-800 p-10 rounded'>
    <p>SQL (Structured Query Language) and NoSQL (Not only SQL) databases are two different types of database management systems that are designed to handle data storage and retrieval in different ways. Here's a comparison between SQL and NoSQL databases:</p>
    <ul>
       Data Model:
       <li>SQL: SQL databases follow a structured, tabular data model where data is organized into tables with predefined schemas. The relationships between tables are defined using foreign keys.</li>
       <li>NoSQL: NoSQL databases use various data models such as key-value, document, columnar, or graph. They offer flexibility in handling unstructured or semi-structured data without requiring a predefined schema.</li>
    </ul>
    <ul>
    Scalability:
    <li>SQL: SQL databases typically use a vertical scaling approach, where you increase the capacity of a single server to handle more data or traffic. Scaling horizontally (across multiple servers) can be more challenging.</li>
    <li>NoSQL: NoSQL databases are designed to scale horizontally, making it easier to distribute data across multiple servers. They can handle large amounts of data and high traffic loads.</li>
    </ul>
    <ul>
    Query Language:
    <li>SQL: SQL databases use the SQL query language, which is a standardized language for managing and querying relational databases. It provides a powerful and expressive way to retrieve and manipulate data.</li>
    <li>NoSQL: NoSQL databases often have their own query languages, which vary depending on the database type. Some NoSQL databases offer a subset of SQL-like querying capabilities, while others use custom APIs or query languages specific to their data model.</li>
    </ul>

  </div>
  <h1  className='bg-blue-950 p-2 rounded'>Q3.What is express js? What is Nest JS?</h1>
   <div className='bg-blue-800 p-10 rounded'>
   <p>Express.js is a minimalist and flexible web application framework for Node.js. It provides a simple and unopinionated approach to building web servers and APIs. Express.js allows you to handle HTTP requests, define routes, process middleware, and interact with databases and other resources. It provides a robust set of features while keeping the core framework lightweight, giving developers the freedom to choose additional libraries and tools based on their specific needs. Express.js is widely used and has a large ecosystem of middleware and extensions available.</p>
  <p>Nest.js is a progressive and opinionated web application framework for Node.js, inspired by Angular. It aims to provide an organized and scalable structure for building server-side applications. Nest.js follows the concept of modular architecture and uses decorators, TypeScript, and dependency injection to define and manage the components of an application. It provides built-in support for features like routing, validation, authentication, caching, and more. Nest.js embraces the use of decorators and object-oriented programming principles to create reusable and maintainable code. It also has strong integration with libraries like TypeORM and Swagger for database management and API documentation.</p>
   </div>
  <h1 className='bg-blue-950 p-2 rounded'>What is MongoDB aggregate and how does it work ?</h1>
  <p  className='bg-blue-800 p-10 rounded'>
In MongoDB, the aggregate method is used to perform advanced data aggregation operations on a collection. It allows you to process and transform data, perform calculations, apply filters, group documents, and more, all within the database.</p>
        </div>
    );
};

export default Blog;