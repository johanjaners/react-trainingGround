import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
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
  {title: `Cabbage`, id: 1},
  {title: `Garlic`, id: 2},
  {title: `Apple`, id: 3},
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li key={product.id}>
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
