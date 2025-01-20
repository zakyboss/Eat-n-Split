# Eat-n-Split

This project is a simplified expense tracking and friend management app inspired by SplitWise. The application allows users to manage a list of friends, split bills, and track shared expenses effectively.

## Features

- **Add Friends**: Easily add friends with their names and a random profile picture fetched from an API.
- **View Friends List**: View a list of all your friends along with their outstanding balances.
- **Delete Friends**: Remove a friend from the list.
- **Split Bills**: Calculate and track expenses shared with friends.
- **Real-time Notifications**: Display whether you owe a friend or they owe you.

## Screenshots

Below are some screenshots of the application:

1. **Friends List View**
![Friends List](public/Screenshot1.png)

2. **Add Friend Form**
![Add Friend Form](public/Screenshot2.png)

3. **Split Bill Form**
![Split Bill Form](public/Screenshot3.png)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd splitwise-expense-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the app.

## Code Overview

### Components

#### `App.js`
The main application component that maintains the state of friends, payments, and the currently selected friend.

#### `AddFriend.js`
A form component for adding new friends with their details.

#### `AFriend.js`
A card-like component to display individual friends and their current balance.

#### `Friends.js`
A wrapper component for the friends list and the AddFriend form.

#### `Payments.js`
Contains the logic and form for splitting bills with selected friends.

### State Management

The app uses React's `useState` hook to manage local states for friend details, payments, and form visibility.

### Photo Fetching
Random profile pictures are fetched using the [Random User API](https://randomuser.me/).

## Future Improvements

- Add authentication to allow multiple users.
- Store data persistently using a database or local storage.
- Improve the user interface and add animations for better UX.
- Add more granular expense tracking features.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Happy coding! If you have any questions or suggestions, feel free to reach out!
