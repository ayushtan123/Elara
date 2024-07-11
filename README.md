# <img src="https://github.com/ayushtan123/Elara/assets/121681555/48ced792-0748-4aa1-8e77-3d5aa7fcb2b0" alt="Elara" width="40" height="40"> ELARA - Elegant Learning And Resource Assistant 

## Overview  
**Elara** is a cutting-edge web app that leverages the power of the **Gemini AI** to transform user questions into **neatly organized flashcards.** 🎴

Perfect for students, professionals, and lifelong learners, Elara makes complex information easily digestible, enhancing study sessions, quick info retrieval and personal growth with its intuitive design and powerful functionality.

## Tech Stack

- **Frontend**: React.js
- **Styling**: CSS (with a responsive design approach)
- **Backend**: Node, Express, Axios for API requests
- **API**: Gemini AI
- **Deployment**: Vercel ➡️ https://elara-ai.vercel.app

## Features

1. **User-Friendly Interface**: 
   - A clean and modern design with a responsive layout.
   - A textarea for inputting questions, with a white background for better readability.
<img src="https://github.com/ayushtan123/Elara/assets/121681555/d1c0ade2-22bf-4391-93f2-a8f6fe72d6db" alt="ss" width="800" height="400">

1. **Flashcard Representation**: 
   - Answers can be split into multiple flashcards based on user preference.
   - Each flashcard is numbered and arranged side by side, with a maximum of three cards per row.
   - Flashcards are displayed in a grid layout, with automatic wrapping to new rows as needed.

2. **API Integration**:
   - Utilizes the Gemini API to generate content based on user input.
   - Handles loading states and errors gracefully.

3. **Customization Options**:
   - Users can choose to display answers in multiple flashcards.
   - Limit of 15 flashcards to prevent overload.
   - An error message is shown if the user attempts to generate more than 15 flashcards. _Feature of Pro version to be released soon (USP)._

## Demo Video

https://github.com/ayushtan123/Elara/assets/121681555/805166d0-56fc-4268-b491-ba0e29bb3f2d

## Advantages of Flashcard Representation

- **Better Organization**: Information is divided into smaller, manageable pieces, making it easier to digest.
- **Enhanced Learning**: _Flashcards are a proven method for effective learning and memorization._ They help in reinforcing concepts through repetition and active recall.
- **Customizable**: Users can choose how they want the information to be presented, making it adaptable to different learning styles.

## Use Cases

### For Students

1. **Study Aid**: 
   - Students can input questions related to their subjects and receive concise answers split into **flashcards.**
   - Useful for **quick revision** and reinforcing knowledge through active recall.

2. **Exam Preparation**:
   - Generate **summaries** of key topics or concepts and review them as flashcards.
   - Helps in breaking down complex topics into simpler parts, making **studying more effective**.

### For Professionals

1. **Quick Information Retrieval**:  Ideal for preparing **presentations, reports** or gaining quick insights on a subject.

2. **Skill Enhancement**:  Professionals can use the tool to learn new skills or concepts, with information presented in an easily digestible format.

### For General Users

1. **General Knowledge**: Generate answers to everyday questions and learn new things in a structured manner.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your Gemini API key:
   ```plaintext
   VITE_API_KEY=your_gemini_api_key
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Any contributions, whether they be bug fixes, new features, or improvements to the documentation, are greatly appreciated.

## Future Work
 - Maiking the website more responsive (soon) 
