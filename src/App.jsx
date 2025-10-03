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

export default function App() {
  let isLoggedIn = true;
  
  return (
    <div>
      <h1>Welcome to my app</h1>
      
      {isLoggedIn && <AdminPanel />}

      <MyButton />
      <Profile />
      <AboutPage />
    </div>
  );
}
