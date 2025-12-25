**System Scope: User Management Web Application**

**1. System Overview**

The User Management Web Application is a full-stack web system designed to manage user accounts within a web platform.
The system provides functionality for user registration, authentication, authorization, and basic user record management through a secure and structured interface.

The application serves as a foundational system that can be integrated into larger platforms such as:

e-commerce systems

learning management systems

company internal portals

administrative dashboards

**2. Purpose of the System**

The primary purpose of this system is to:

Allow users to create and manage accounts

Provide secure authentication using industry-standard practices

Enable administrators to view and manage registered users

Demonstrate a complete full-stack CRUD workflow using modern web technologies

This system is also intended as a learning and portfolio project, showcasing best practices in:

- API design

- Front-end and back-end integration

- Security and authentication

**3. Target Users**

The system supports two main user roles:

i. Regular Users

- Register an account

- Log in securely

- Access protected areas of the application (e.g. dashboard)

- View or update their own account information

ii. Administrator (Optional / Extendable)

- View all registered users

- Delete or deactivate user accounts

- Monitor basic user data (excluding sensitive credentials)

**4. Functional Scope (What the System Does)**
**4.1 User Authentication**

User registration with secure password hashing

User login using email and password

Session management using JSON Web Tokens (JWT)

Logout functionality

**4.2 User Authorization**

Access control to protected routes

Prevention of unauthorized access to restricted pages

Token validation middleware on the back-end

**4.3 User Management (CRUD)**

Create new user records (registration)

Read user information (admin or self)

Update user profile details

Delete user accounts (admin only)

**5. Data Scope (What Data the System Handles)**

The system manages the following user data:

Username

Email address

Encrypted password

System-generated user ID

❗ The system does not store:

Plain-text passwords

Financial information

Personal identification data

**6. System Boundaries (What the System Does NOT Do)**

To clearly define scope, the system does not include:

Payment processing

Email notifications

Social media login (Google, Facebook, etc.)

Advanced analytics

Multi-factor authentication (can be added later)

File uploads or profile images

These are considered future enhancements, not part of the current scope.

**7. Technical Scope**
Frontend

Vue 3 for UI and routing

Axios for API communication

TypeScript for type safety

Backend

Node.js and Express for RESTful APIs

JWT-based authentication

Password hashing using bcrypt

Database

PostgreSQL for persistent user data storage

**8. Constraints and Assumptions**
Constraints

Single-page web application

Internet connection required

JWT-based authentication only

Assumptions

Users have basic knowledge of web navigation

Administrators are trusted users

The system is deployed in a controlled environment

**9. Success Criteria**

The system will be considered successful if:

Users can register and log in securely

Protected routes cannot be accessed without authentication

User data is stored securely in the database

CRUD operations function correctly through the UI

The frontend and backend communicate reliably

**10. Future Enhancements (Out of Scope)**

Role-based access control

Password reset via email

Audit logs

OAuth authentication

Admin analytics dashboard
