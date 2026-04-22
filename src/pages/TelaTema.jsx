import { useState } from 'react'
import '../styles/TelaTema.css'

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
        {tema.referencias && tema.referencias.length > 0 && (
          <button
            className={`tab-btn ${activeTab === 'referencias' ? 'active' : ''}`}
            onClick={() => setActiveTab('referencias')}
          >
            📚 Referências
          </button>
        )}
      </div>

      {/* CONTEÚDO */}
      <div className="tema-content">
        {activeTab === 'orientacoes' && tema.orientacoes && (
          <div className="secoes-container">
            {tema.orientacoes.map((secao, idx) => {
              const sectionId = `${tema.id}-${idx}`
              const isExpanded = expandedSections[sectionId]

              return (
                <div key={sectionId} className="secao-card">
                  <button
                    className="secao-header"
                    onClick={() => toggleSection(sectionId)}
                  >
                    <div className="secao-title">
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

        {activeTab === 'referencias' && tema.referencias && (
          <div className="referencias-container">
            {tema.referencias.map((ref, idx) => (
              <div key={idx} className="referencia-card">
                <div className="ref-numero">[{ref.numero}]</div>
                <div className="ref-content">
                  <div className="ref-titulo">{ref.titulo}</div>
                  <div className="ref-autores">{ref.autores}</div>
                  <div className="ref-detalhes">
                    <span className="ref-publicacao">{ref.publicacao}</span>
                    <span className="ref-ano">{ref.ano}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
