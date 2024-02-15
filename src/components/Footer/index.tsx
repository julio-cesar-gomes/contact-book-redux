import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/julio-gomessf/">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/julio-cesar-gomes">
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
        <p>® 2024 Julio Gomes. Todos os direitos reservados.</p>
        <p>
          Página desenvolvida no curso de Full Stack Java na EBAC - Escola
          Britânica de Artes Criativas e Tecnologia.
        </p>
      </div>
    </S.Footer>
  )
}

export default Footer
