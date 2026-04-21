import '../styles/TelaFavoritos.css'

export function TelaFavoritos() {
  return (
    <div className="tela-favoritos">
      <div className="empty-state">
        <div className="empty-icon">⭐</div>
        <h2 className="empty-title">Favoritos</h2>
        <p className="empty-message">
          Você ainda não tem nenhum favorito. <br />
          Clique no ⭐ em qualquer prescrição para adicionar aos favoritos!
        </p>
      </div>
    </div>
  )
}
