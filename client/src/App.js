import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Clients from "./components/Clients";
import Projetcs from "./components/Projects";
import AddClientModal from "./components/AddClientModal";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        },

      }
    }
  }
})
const client = new ApolloClient({
  uri: 'http://localhost:5005/graphql',
  cache: new InMemoryCache(),
})
function App() {
  return (
    <>
    <ApolloProvider client= {client}>
    <Header /> 
    <div className="container">
      <AddClientModal />
      <Projetcs />
      <Clients />
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
