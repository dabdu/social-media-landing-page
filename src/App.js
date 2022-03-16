import Feed from "./components/Feed";
import Friends from "./components/Friends";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        <Friends />
        {/* <Sidebar /> */}
      </main>


    </div>
  );
}

export default App;
