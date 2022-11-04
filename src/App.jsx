import { Repositories } from './components/Repositories'
import { Container, Title } from './styles/list'

function App() {
  return (
    <>
      <Title>Lista de Repositórios</Title>
      <Container>
        <Repositories />
      </Container>
    </>
  )
}

export default App
