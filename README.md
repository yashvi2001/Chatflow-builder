# Chatbot Flow Builder

## Overview:

Created a simple chat bot flow builder using nextjs and react flow

## Features:

1. **Text Node**
    - Our flow builder currently supports only one type of message (i.e., Text Message).
    - Multiple Text Nodes can exist within a single flow.
    - Nodes are incorporated into the flow by dragging and dropping a Node from the Nodes Panel.
2. **Nodes Panel**
    - This panel houses all types of Nodes supported by our Flow Builder.
    - Currently, there's only the Message Node, but the system should be designed to accommodate additional node types in the future, thus making this section extensible.
3. **Edge**
    - Connects two Nodes together.
4. **Source Handle**
    - Represents the source of a connecting edge.
    - Only one edge can originate from a source handle.
5. **Target Handle**
    - Represents the target of a connecting edge.
    - More than one edge can connect to a target handle.
6. **Settings Panel**

    - The Settings Panel replaces the Nodes Panel when a Node is selected.
    - It contains a text field to edit the text of the selected Text Node.
7. **Save Button**
    - A button to save the flow.
    

## Technologies Used

- **Next**: The project is built using the NextJS (React Framework)library, providing a component-based architecture for building user interfaces.
- **Tailwind CSS**:  Tailwind is used for designing and styling the user interface components, ensuring a modern and visually appealing look and feel.
- **React flow** : A customizable React component for building node-based datas and interactive datas in here we used it to build the chatflow


## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yashvi2001/Bitespeed-task.git
   ```

   ## Install Dependencies

2. **Navigate into the project directory and install the necessary dependencies using npm or yarn.**

```bash
cd Bitespeed-task
npm install
# or
yarn install
```

  ##  Run the Application

3. **Start the development server to run the application locally.**

```bash
npm start
# or
yarn start
```
## Open in Browser

Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.
    
## Acknowledgements

*   [Tailwind CSS](https://tailwindcss.com/): For providing the UI components and styling.
*   [Next](https://nextjs.org/): For the powerful React Framework for building user interfaces.
*   [React Flow](https://reactflow.dev/) : A customizable React component for building node-based editors and interactive diagrams



