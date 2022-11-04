import { useEffect, useState } from 'react'
import { Content } from '../styles/list'
import { RepositoryItem } from './RepositoryItem'

export function Repositories() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/EvanderInacio/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <>
      <Content>
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </Content>
    </>
  )
}
