import Header from "./components/header";
import { AppoloProvider, AppoloClient, InMemoryCache }
from '@apollo/client';

const client = new AppoloClient({
  uri: 'http://localhost:5005/graphql',
})
function App() {
  return (
    <>
    <ApolloProvider client= {client}>
    <Header /> 
    <div className="container">
      <h1>Hello World</h1>
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
