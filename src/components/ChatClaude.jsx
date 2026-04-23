import { useState } from 'react'
import './ChatClaude.css'

export function ChatClaude() {
  const [mensagens, setMensagens] = useState([])
  const [entrada, setEntrada] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  const enviarMensagem = async () => {
    if (!entrada.trim()) {
      setErro('Digite uma mensagem!')
      return
    }

    setErro('')
    setCarregando(true)

    try {
      // Adicionar mensagem do usuário
      const novasMensagens = [
        ...mensagens,
        { role: 'user', content: entrada }
      ]
      setMensagens(novasMensagens)
      setEntrada('')

      // Chamar backend
      const response = await fetch('/api/chat-claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensagem: entrada })
      })

      const dados = await response.json()

      if (!response.ok) {
        throw new Error(dados.erro || 'Erro ao processar')
      }

      // Adicionar resposta da IA
      setMensagens([
        ...novasMensagens,
        { role: 'assistant', content: dados.resposta }
      ])
    } catch (err) {
      setErro(err.message)
      setMensagens([...mensagens, { role: 'error', content: err.message }])
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="chat-claude-container">
      <div className="chat-header">
        🤖 Assistente Médico Claude
      </div>

      <div className="chat-messages">
        {mensagens.map((msg, idx) => (
          <div key={idx} className={`mensagem ${msg.role}`}>
            <span className="icone">
              {msg.role === 'user' ? '👨‍⚕️' : msg.role === 'error' ? '❌' : '🤖'}
            </span>
            <div className="texto">{msg.content}</div>
          </div>
        ))}

        {carregando && (
          <div className="mensagem assistant">
            <span className="icone">⏳</span>
            <div className="texto">Processando...</div>
          </div>
        )}
      </div>

      {erro && <div className="erro-msg">{erro}</div>}

      <div className="chat-input">
        <input
          type="text"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && enviarMensagem()}
          placeholder="Digite sua pergunta médica..."
          disabled={carregando}
        />
        <button 
          onClick={enviarMensagem}
          disabled={carregando}
        >
          {carregando ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </div>
  )
}