import "./App.css";
import Card from "./components/card";

function App() {
  // let myObj = {
  //   username: "Mini",
  //   age: 22,
  // };

  // let newArr = [1, 2, 3];
  // these can be passed in props as : <Card username="chaiaurcode" someObj={newArr} /> Or <Card username="chaiaurcode" someObj={myObj} />

  return (
    <>
      <h1 className="bg-blue-900 font-black text-black rounded-xl p-5">
        Tailwind Test
      </h1>

      <Card username="Hitesh" btnTxt = "Click Me" />
      <Card username="Harry" />
    </>
  );
}

export default App;
