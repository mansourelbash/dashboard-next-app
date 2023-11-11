# Member Management Page

_This project focuses on building a Member Management Page utilizing a Component-Based in Next.js. The goal is to enable CRUD (Create, Read, Update, Delete) operations for managing member information.

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Features

- [x] **Two Pages for Member Management:**
   - Create a page for entering member information.
   - Create another page for displaying and managing members.

- [x] **Member Information:**
   - Members have details such as name, email, and role/authority.

- [x] **CRUD Operations:**
   - **Create:** Allow users to enter member information on one page.
   - **Read:** Display the list of members on the other page using a React DataTable component.
   - **Update:** Enable modification of member information, such as name, email, and role.
   - **Delete:** Provide an option to delete a member.

- [x] **Navigation:**
   - Implement navigation between the two pages.

- [x] **Design:**
   - Use Tailwind CSS for styling.
   - Ensure the design is responsive, making it suitable for various screen sizes.
   - Utilize `react-datepicker` for handling and displaying dates.

- [x] **Technology Stack:**
   - Use Next.js as the framework.
   - Leverage React hooks for state management.
   - Utilize React DataTable Component for displaying tabular data.
   - Write components in TypeScript for type safety.
   - Employ custom hooks for reusable logic.
   - Use `react-hook-form` for form validation.
   - Integrate `uuid` package for creating unique member IDs.
   - Implement responsive design using Tailwind CSS.
   - Use React icons for visual elements.
   - Share data between components using React Context API.
   - Implement notifications using `react-toastify`.
   - Utilize `moment` for handling date and time.

- [x] **Testing:**
   - Write test cases using Jest.
   - Cover edge cases and ensure proper functionality is tested.
   - Use Jest's mocking capabilities for external dependencies.

- [x] **Additional Notes:**
   - Ensure your application is accessible.
   - Implement error handling and display meaningful error messages.
   - Consider adding animations or transitions for a better user experience.

### Page 1: Enter Member Information
- [x] Create a new page using Next.js.
- [x] Design a form to input member details (name, email, role).
- [x] Utilize React hooks (e.g., `useState`) to manage form state.
- [x] Use a custom hook for form validation if needed.
- [x] On form submission, add the member to your data source (e.g., context, state).

### Page 2: Display and Manage Members
- [x] Create another page to display the list of members.
- [x] Use the React DataTable Component to show members in a table format.
- [x] Implement a mechanism to edit member details:
   - [x] Use a modal or navigate to another page for editing.
   - [x] Leverage React context to share member data between components.

### Edit and Delete Functionality
- [x] For the edit feature, create a form similar to the one on Page 1.
- [x] Populate the form with the member's existing details.
- [x] Allow users to modify the member's information.
- [x] For the delete feature, implement a confirmation modal.
- [x] Provide options to confirm or cancel the deletion.

### Navigation
- [x] Implement navigation between the two pages using Next.js `Link` or `useRouter`.
- [x] Ensure a smooth transition between pages.

### Styling
- [x] Apply Tailwind CSS for styling components and layouts.
- [x] Make the design responsive using Tailwind's responsive utility classes.

### Testing
- [x] Write Jest test cases for your components and custom hooks.
- [x] Cover edge cases and ensure proper functionality is tested.
- [x] Use Jest's mocking capabilities for external dependencies.

### Additional Notes
- [x] Ensure your application is accessible.
- [x] Implement error handling and display meaningful error messages.
- [x] Consider adding animations or transitions for a better user experience.

This structured approach should assist you in building a comprehensive member management system with the specified features and technologies. Feel free to adapt these steps based on your specific requirements and preferences.

## Screenshots

### Home Page 
![image](https://github.com/mansourelbash/dashboard-next-app/blob/main/public/screenshots/list-member.png)
### Add Page
![image](https://github.com/mansourelbash/dashboard-next-app/blob/main/public/screenshots/add-member.png)
### Edit Page
![image](https://github.com/mansourelbash/dashboard-next-app/blob/main/public/screenshots/edit-member.png)
### Delete Page
![image](https://github.com/mansourelbash/dashboard-next-app/blob/main/public/screenshots/delete-member.png)

## Usage

### Project Setup

1.  Install [NodeJS](https://nodejs.org/en)
2.  Install [JSON Server] (https://www.npmjs.com/package/json-server)
3.  Open the project in your favourite IDE
4.  run `npm install`


### Running the project

1.  Open the project in your favourite IDE
2.  Run `npm run dev`
3.  Run `npm run json-dev`
4. open [http://localhost:5000/members](http://localhost:5000/members)
5.  open [http://localhost:8080](http://localhost:8080)

### Running Tests

1. Open the project in your favourite IDE
2. Run `npm run test`

---

### If you have any inquiries, feedback, or worries, please feel free to either open an issue on GitHub or contact me directly. Your input and communication are highly valued!