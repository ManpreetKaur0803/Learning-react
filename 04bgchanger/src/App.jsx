import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <h1 className="font-extrabold text-5xl pt-4 flex justify-center underline text-black">
        Background Changer
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center,shadow-lg px-3 py-2 gap-3 shadow-lg bg-slate-400 rounded-3xl">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="rounded-full p-2 text-black font-bold"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="rounded-full p-2 text-white font-bold"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="rounded-full p-2 text-black font-bold"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("olive");
            }}
            className="rounded-full p-2 text-white font-bold"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="rounded-full p-2 text-black font-bold"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("gray");
            }}
            className="rounded-full p-2 text-white font-bold"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="rounded-full p-2 text-black font-bold"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="rounded-full p-2 text-white font-bold"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor("lavender");
            }}
            className="rounded-full p-2 text-black font-bold"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="rounded-full p-2 text-white font-bold"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => {
              setColor("white");
            }}
            className="rounded-full p-2 text-black font-bold"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
