import Layout from "./components/Layout/Layout";
import "./App.css"
import Builder from "./components/Builder/Builder";
function App() {
  return (
    <div className="App">
      <Layout>
        <Builder/>
      </Layout>
    </div>
  );
}

export default App;
