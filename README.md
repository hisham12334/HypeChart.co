# HypeChart.co Landing Page

This repository contains the source code for the HypeChart.co landing page, the back-office solution for Instagram brands.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/en/) (v18.x or later is recommended)
*   [Git](https://git-scm.com/)

### Installation & Setup

1.  **Clone the repository**
    
    Open your terminal or command prompt and run the following command.
    ```sh
    git clone <repository-url>
    cd <project-directory>
    ```
    *Replace `<repository-url>` with the actual URL to the repository and `<project-directory>` with the name of the folder created.*

2.  **Install dependencies**
    
    Navigate into your new project directory and install the required npm packages.
    ```sh
    npm install
    ```

3.  **Set up Environment Variables**
    
    This project is set up for future integration with the Google Gemini API. Create a file named `.env.local` in the root of your project and add your API key.
    
    ```env
    GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"
    ```
    *Note: The API key is not used by the current landing page but is required for upcoming features.*

4.  **Run the application**
    
    Start the local development server.
    ```sh
    npm run dev
    ```

Once the command is successful, open your web browser and go to `http://localhost:3000` (or the URL provided in your terminal) to view the application.
