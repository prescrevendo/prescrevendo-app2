import './Header.css'

export function Header({ titulo, onBack }) {
  return (
    <div className="header">
      {onBack ? (
        <button className="header-back" onClick={onBack}>
          ‹
        </button>
      ) : (
        <span className="header-icon">💊</span>
      )}
      <span className="header-title">{titulo}</span>
    </div>
  )
}
