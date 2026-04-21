import { useState } from 'react'
import '../styles/TelaTema.css'

const BADGE_COLORS = {
  procedimento: { bg: '#EBF3FB', color: '#185fa5', label: 'PROCEDIMENTO' },
  conduta: { bg: '#EAF4EC', color: '#3b6d11', label: 'CONDUTA' },
  alerta: { bg: '#FDECEA', color: '#a32d2d', label: 'ALERTA' },
  info: { bg: '#E8F4EF', color: '#0f6e56', label: 'ORIENTAÇÃO' }
}

export function TelaTema({ tema }) {
  const [activeTab, setActiveTab] = useState('orientacoes')
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  if (!tema) {
    return <div className="tela-tema"><p>Tema não encontrado</p></div>
  }

  return (
    <div className="tela-tema">
      {/* ABAS */}
      <div className="tema-tabs">
        <button
          className={`tab-btn ${activeTab === 'orientacoes' ? 'active' : ''}`}
          onClick={() => setActiveTab('orientacoes')}
        >
          📋 Orientações
        </button>
        <button
          className={`tab-btn ${activeTab === 'prescricao' ? 'active' : ''}`}
          onClick={() => setActiveTab('prescricao')}
        >
          💊 Prescrição
        </button>
      </div>

      {/* CONTEÚDO */}
      <div className="tema-content">
        {activeTab === 'orientacoes' && tema.orientacoes && (
          <div className="secoes-container">
            {tema.orientacoes.map((secao, idx) => {
              const sectionId = `${tema.id}-${idx}`
              const isExpanded = expandedSections[sectionId]
              const badgeInfo = BADGE_COLORS[secao.tipo] || BADGE_COLORS.info

              return (
                <div key={sectionId} className="secao-card">
                  <button
                    className="secao-header"
                    onClick={() => toggleSection(sectionId)}
                  >
                    <div className="secao-title">
                      <span
                        className="badge"
                        style={{
                          background: badgeInfo.bg,
                          color: badgeInfo.color
                        }}
                      >
                        {badgeInfo.label}
                      </span>
                      <span className="titulo">{secao.titulo}</span>
                    </div>
                    <span className="toggle-icon">
                      {isExpanded ? '▲' : '▼'}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="secao-body">
                      <ul className="secao-itens">
                        {secao.itens.map((item, itemIdx) => (
                          <li key={itemIdx} className="secao-item">
                            <span className="bullet" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {activeTab === 'prescricao' && tema.prescricao && (
          <div className="prescricao-container">
            {tema.prescricao.map((grupo, idx) => (
              <div key={idx} className="grupo-prescricao">
                <div className="grupo-header">
                  <span>{grupo.titulo}</span>
                </div>
                <div className="grupo-itens">
                  {grupo.itens.map((item, itemIdx) => (
                    <div key={itemIdx} className="prescricao-item">
                      <span className="numero">{itemIdx + 1}</span>
                      <span className="texto">{item}</span>
                    </div>
                  ))}
                </div>
                {grupo.nota && (
                  <div className="grupo-nota">
                    <span className="nota-icon">⚠️</span>
                    <span><strong>Obs:</strong> {grupo.nota}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
