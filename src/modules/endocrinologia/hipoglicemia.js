export const hipoglicemiaData = {
    id: "hipoglicemia",
    nome: "Hipoglicemia",
    orientacoes: [
      {
        titulo: "Hipoglicemia Leve (Dx < 70 mg/dL)",
        tipo: "conduta",
        itens: [
          "Tratamento via oral (se houver condições de deglutir): Oferecer 15 g de carboidrato.",
          "Exemplos: 1 colher de sopa rasa de açúcar ou mel.",
          "150 mL de refrigerante comum.",
          "150 mL de suco de laranja.",
          "3 balas de caramelo."
        ]
      },
      {
        titulo: "Hipoglicemia Grave (Dx < 54 mg/dL) ou sem deglutição",
        tipo: "alerta",
        itens: [
          "Tratamento Endovenoso: Glicose 50% – 40 mL EV + SG 5% 100 mL/h EV, até estabilidade clínica.",
          "Tratamento Intramuscular (se sem acesso): Glucagon 1 mg/fr – 1 mL via IM."
        ]
      },
      {
        titulo: "Pós-Reversão",
        tipo: "info",
        itens: [
          "Após reversão (Dx > 70 mg/dL): oferecer um lanche para o paciente."
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Prescrição Prática",
        itens: [
          "Glicose 50% – administrar 40 mL, via EV, agora",
          "SG 5% 500 mL – administrar via EV a 33 gts/min",
          "Monitorar glicemia capilar a cada 15 minutos"
        ]
      }
    ]
  }
