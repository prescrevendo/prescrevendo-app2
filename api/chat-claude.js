import Anthropic from "@anthropic-ai/sdk";

export default async function handler(req, res) {
  console.log("API Route chamada!");

  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  const { mensagem } = req.body;

  if (!mensagem) {
    return res.status(400).json({ erro: "Mensagem vazia" });
  }

  try {
    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });

    const SISTEMA_MEDICO = `Você é um assistente médico especializado em emergência.
- Sempre cite as diretrizes usadas
- NUNCA substitua julgamento clínico
- Recomende confirmação com especialista
⚠️ Aviso: Esta é uma ferramenta educacional, não substitui médico.`;

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: SISTEMA_MEDICO,
      messages: [
        { role: "user", content: mensagem }
      ]
    });

    res.status(200).json({
      sucesso: true,
      resposta: response.content[0].text
    });
  } catch (erro) {
    console.error("Erro Claude:", erro.message);
    res.status(500).json({ 
      erro: "Erro ao processar",
      detalhes: erro.message 
    });
  }
}