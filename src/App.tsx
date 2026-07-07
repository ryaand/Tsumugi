import { Button } from "#components/ui/button";
import "./App.css";

const App = () => {
  return (
    <main className="container flex flex-col justify-center items-center w-screen h-screen">
      <h1>Welcome!</h1>
      <Button className="cursor-pointer p-4">Hello</Button>
    </main>
  );
}

export default App;
