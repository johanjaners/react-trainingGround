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
function Profile() {
  return (
    <img 
      className="avatar"
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
    />
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
    </div>
  )
}
