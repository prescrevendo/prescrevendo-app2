import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const SISTEMA_MEDICO = `Você é um assistente médico especializado em emergência.
- Sempre cite as diretrizes usadas
- NUNCA substitua julgamento clínico
- Recomende confirmação com especialista
⚠️ Aviso: Esta é uma ferramenta educacional, não substitui médico.`;

export default async (req, res) => {
  const { mensagem } = req.body;

  if (!mensagem) {
    return res.status(400).json({ erro: "Mensagem vazia" });
  }

  try {
    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: SISTEMA_MEDICO,
      messages: [
        { role: "user", content: mensagem }
      ]
    });

    res.json({
      sucesso: true,
      resposta: response.content[0].text
    });
  } catch (erro) {
    console.error("Erro Claude:", erro);
    res.status(500).json({ 
      erro: "Erro ao processar",
      detalhes: erro.message 
    });
  }
};