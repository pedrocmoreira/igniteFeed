import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
           author='Pedro Moreira' 
           content='Aqui vai um conteúdo de um post qualquer'
          />
          <Post
           author='Pedro Moreira' 
           content='Aqui vai um conteúdo de algum outro post qualquer'
          />
        </main>
      </div>
    </div>

  );
}

export default App;