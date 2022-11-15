import logo from './logo.svg';
import './App.css';
import GraphQLClient from './graphql_client';
import WebSocketClient from './websocket_client';

function App() {
  return (
    <div className="App">
      <GraphQLClient />
      <WebSocketClient />
    </div>
  );
}

export default App;
