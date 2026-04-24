import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar">
        <h2>Experiment 2</h2>
        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("2.1")}>2.1</button>
          <button onClick={() => setPage("2.2")}>2.2</button>
          <button onClick={() => setPage("2.3")}>2.3</button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container">
        {page === "home" && <Home />}
        {page === "2.1" && <Product />}
        {page === "2.2" && <Library />}
        {page === "2.3" && <Person />}
      </div>
    </div>
  );
}

export default App;

//////////////////////////
// HOME PAGE
//////////////////////////
function Home() {
  return (
    <div className="home">
      <h1>Welcome to Experiment 2</h1>
      <p>Select any experiment from above 👆</p>
    </div>
  );
}

//////////////////////////
// PRODUCT (WITH IMAGES)
//////////////////////////
function Product() {
  const products = [
  {
    name: "Wireless Headphones",
    price: 129.99,
    stock: true,
    img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_1280.jpg"
  },
  {
    name: "Mechanical Keyboard",
    price: 89.99,
    stock: false,
   img: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg"
  },
  {
    name: "Smart Watch",
    price: 199.99,
    stock: true,
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
  }
];

  return (
    <div className="card-row">
      {products.map((p, i) => (
        <div key={i} className="product-card">
          <img src={p.img} alt={p.name} className="product-img" />
          <h3>{p.name}</h3>
          <p className="price">${p.price}</p>
          <span className={p.stock ? "badge green" : "badge red"}>
            {p.stock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      ))}
    </div>
  );
}

//////////////////////////
// LIBRARY
//////////////////////////
function Library() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");

  const addBook = () => {
    if (!title.trim()) return;
    setBooks([...books, title]);
    setTitle("");
  };

  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Library Management System</h1>

      <input
        placeholder="Enter Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addBook}>Add Book</button>

      {books.map((b, i) => (
        <div key={i} className="book-card">
          {b}
          <button onClick={() => removeBook(i)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

//////////////////////////
// PERSON
//////////////////////////
function Person() {
  return (
    <div>
      <h1>Person Class Hierarchy</h1>

      <div className="person-card">
        <h2>Alex Johnson (Person)</h2>
        <p>Age: 30</p>
      </div>

      <div className="person-card">
        <h2>Emma Watson (Student)</h2>
        <p>Age: 20</p>
        <p>Major: Computer Science</p>
      </div>

      <div className="person-card">
        <h2>Dr. James Wilson (Teacher)</h2>
        <p>Age: 45</p>
        <p>Subject: Mathematics</p>
      </div>
    </div>
  );
}