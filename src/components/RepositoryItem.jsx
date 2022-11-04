import { Card } from '../styles/list'
import { Star, BracketsAngle, Link, GithubLogo } from 'phosphor-react'

export function RepositoryItem(props) {
  return (
    <Card>
      <h2>{props.repository.name}</h2>
      <p>{props.repository.description}</p>

      <div className="span">
        <h4>
          {' '}
          <BracketsAngle size={16} weight="bold" /> {props.repository.language}
        </h4>
        <h5>
          {' '}
          <Star weight="bold" /> {props.repository.stargazers_count}
        </h5>
      </div>

      <button>
        <a href={props.repository.homepage} target="_blank">
          <Link weight="bold" size={18} /> Link do projeto
        </a>
      </button>
      <button>
        <a href={props.repository.svn_url} target="_blank">
          <GithubLogo weight="bold" size={18} /> Link do repositório
        </a>
      </button>
    </Card>
  )
}
