import './App.css'
import { useState } from 'react';

function MyButton() {
  function handleClick() {alert('You clicked me!');}
  return (
    <button onClick={handleClick}>Click me</button>
  );
}
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />how do you do?</p>
    </>
  );
}

const user = {
    name: "Hedy Lamarr",
    imageUrL: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90
  };

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img 
        className="avatar"
        src={user.imageUrL}
        alt={user.name}
      />
    </>
  );
}

function AdminPanel() { return <h2>Welcome back!</h2>; }
function LogInForm() { return <h2>Please log in</h2>; }

const products = [
  {title: `Cabbage`, isFruit: false, id: 1},
  {title: `Garlic`, isFruit: false, id: 2},
  {title: `Apple`, isFruit: true, id: 3},
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li key={product.id}
      style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
      {product.title}
    </li>
    );  
    return (
      <ul>{listItems}</ul>
    );
}

export default function App() {
  let isLoggedIn = false;
  
  return (
    <div>
      <h1>Welcome to my app</h1>
      
      {isLoggedIn && <AdminPanel />}
      {!isLoggedIn && <LogInForm />}

      <MyButton />
      <Profile />
      <AboutPage />

      <ShoppingList />
    </div>
  );
}
