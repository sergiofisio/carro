import "./App.css";
import Header from "./components/header";
// import video from "./assets/video.mp4";
import Project from "./components/project/project";
import Info from "./components/info";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Project />
        <Info />
      </main>
    </>
  );
}
