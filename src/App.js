import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function Header(props) {
  return <header>
    <h1><a href="#" onClick={function(event){
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props) {
  const lis = [
    <li><a href="/read/1">html</a></li>,
    <li><a href="/read/2">css</a></li>,
    <li><a href="/read/3">js</a></li>
  ]
  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
      </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
  
}
function App() {
  // const_mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  console.log('mode', _mode);
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  let content = null;
  if(mode ==='WELCOME'){
    content = <Article title="Welcome" body="Hello WEB"></Article>
  }else if (mode ==='READ'){
    content = <Article title="Read" body="Hello Read"></Article>
    for(let i = 0; i<topics.length; i++){
      
    }
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={function(){
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) =>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
