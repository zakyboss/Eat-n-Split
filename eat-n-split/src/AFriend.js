export default function AFriend({ data, onSelectFriend }) {
    const { id, firstName, lastName, payments, photo } = data;

    // Debugging
    console.log("Photo URL:", photo);  // Check if the photo URL is correct
console.log(photo)
    return (
        <li className="item">
            <img src={photo} alt={firstName} id="image" />
            <span>
                <h2 style={{ color: "goldenrod" }}>{firstName} {lastName}</h2>
                <h3 style={{ color: "green" }}>Owes You $300</h3>
            </span>
            <button id="selectBtn" onClick={onSelectFriend}>Select</button>
            <button id="deleteBtn" style={{ backgroundColor: "red", color: "white" }}>Delete</button>
        </li>
    );
}
