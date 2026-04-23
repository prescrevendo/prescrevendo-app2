import express from 'express';
import cors from 'cors';
import Anthropic from "@anthropic-ai/sdk";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(express.json());

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const SISTEMA_MEDICO = `Você é um assistente médico especializado em emergência.
- Sempre cite as diretrizes usadas
- NUNCA substitua julgamento clínico
- Recomende confirmação com especialista
⚠️ Aviso: Esta é uma ferramenta educacional, não substitui médico.`;

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Chat endpoint
app.post('/api/chat-claude', async (req, res) => {
  console.log('Requisição recebida em /api/chat-claude');
  
  const { mensagem } = req.body;

  if (!mensagem) {
    return res.status(400).json({ erro: "Mensagem vazia" });
  }

  try {
    console.log('Enviando para Claude API...');
    
    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: SISTEMA_MEDICO,
      messages: [
        { role: "user", content: mensagem }
      ]
    });

    console.log('Resposta recebida do Claude!');
    
    res.status(200).json({
      sucesso: true,
      resposta: response.content[0].text
    });
  } catch (erro) {
    console.error("ERRO:", erro.message);
    res.status(500).json({ 
      erro: "Erro ao processar",
      detalhes: erro.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
  console.log(`🤖 Endpoint Claude disponível em POST /api/chat-claude`);
});