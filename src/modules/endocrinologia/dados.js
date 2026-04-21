export const ENDOCRINOLOGIA_TEMAS = [
  {
    id: "cad-ehh",
    nome: "Cetoacidose Diabética / EHH",
    orientacoes: [
      {
        titulo: "Fase 1 e 2: Hidratação Venosa (HV)",
        tipo: "conduta",
        itens: [
          "Fase 1 (1ª hora): SF 0,9% 1000 a 1500 mL (15-20 mL/kg).",
          "Se instabilidade hemodinâmica, considerar Ringer Lactato e aminas vasoativas.",
          "Fase 2 (Após 1ª hora): Manter HV 250-500 mL/h (4 mL/kg/h) até exames."
        ]
      },
      {
        titulo: "Checar Potássio Sérico (K)",
        tipo: "conduta",
        itens: [
          "K < 3,3 e Na < 135: SF 0,9% 1000 mL + KCl 19,1% 10 mL EV em 1 hora.",
          "K < 3,3 e Na ≥ 135: NaCl 0,45% 1000 mL + KCl 19,1% 10 mL EV em 1 hora.",
          "K 3,3 a 5,0 e Na < 135: Insulinoterapia + SF 0,9% 1000 mL + KCl 19,1% 10 mL EV em 2 horas.",
          "K 3,3 a 5,0 e Na ≥ 135: Insulinoterapia + NaCl 0,45% 1000 mL + KCl 19,1% 10 mL EV em 2 horas.",
          "K > 5,0 e Na < 135: Insulinoterapia + SF 0,9% 1000 mL EV em 2 horas.",
          "K > 5,0 e Na ≥ 135: Insulinoterapia + NaCl 0,45% 1000 mL EV em 2 horas."
        ]
      },
      {
        titulo: "Fase 3: Insulinoterapia",
        tipo: "conduta",
        itens: [
          "Insulina Regular 100 UI (1 mL) + SF 0,9% 99 mL — administrar via EV a 0,1 UI/kg/h em BIC.",
          "Glicemia capilar 1/1h.",
          "Ajustar velocidade da BIC para reduzir HGT em 50-75 mg/dL/h.",
          "Se redução de HGT > 75 mg/dL/h: Reduzir velocidade da BIC à metade.",
          "Se redução de HGT < 50 mg/dL/h: Dobrar velocidade da BIC."
        ]
      },
      {
        titulo: "ATENÇÃO: Evitar Hipoglicemia",
        tipo: "alerta",
        itens: [
          "Se HGT < 200-250 mg/dL na FASE 2: Manter SF 0,9% ou NaCl 0,45% +/- KCl + Iniciar SG 5% 250 mL/h.",
          "Se HGT < 200-250 mg/dL na FASE 3: Manter HV + Manter Insulina em BIC (reduzir vazão à metade) + Iniciar SG 5% 250 mL/h.",
          "GLICEMIA ALVO = 150-200 mg/dL até reversão da CAD/EHH."
        ]
      },
      {
        titulo: "Critérios para Resolução da CAD",
        tipo: "info",
        itens: [
          "GLICEMIA < 200 MG/DL + 2 de 3 critérios:",
          "1. pH ≥ 7,3",
          "2. HCO3 ≥ 15",
          "3. Ânion GAP ≤ 12"
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Aguardando Exames Laboratoriais",
        itens: [
          "Dieta zero",
          "SF 0,9% 500 mL – administrar 3 etapas (1500 mL) via EV em 1 hora",
          "SF 0,9% 500 mL – administrar 1 etapa (500 mL), via EV, em 1 hora (repetir etapa a cada hora até 2ª ordem)",
          "Monitorização contínua",
          "Glicemia capilar 1/1h"
        ],
        nota: "Solicitar Gasometria arterial, Hemograma, PCR, Na, K, Cl, Ur, Cr, EAS e Rx de Tórax."
      },
      {
        titulo: "Exemplo Pós-Exames (Pct 70kg, CAD por ITU, K 3,5, Na 130)",
        itens: [
          "Dieta zero",
          "SF 0,9% 1000 mL + KCl 10% 20 mL via EV em 2 horas",
          "Insulina Regular 100 UI + SF 0,9% 99 mL – administrar via EV em BIC a 7 mL/h",
          "Ceftriaxona 1g – diluir 1 fr em 10 mL AD e administrar via EV em 2 min de 12/12h",
          "Monitorização contínua",
          "Glicemia capilar de 1/1h",
          "Gasometria arterial – 1ª amostra, seguido de venosa de 4/4h",
          "Dosar eletrólitos e função renal de 2/2h"
        ]
      }
    ]
  },
  {
    id: "crise-tireotoxica",
    nome: "Crise Tireotóxica",
    orientacoes: [
      {
        titulo: "Inibir a produção de hormônio (Escolher uma)",
        tipo: "procedimento",
        itens: [
          "Propiltiouracil 100 mg/cp: Ataque 6 a 10 cp (600-1000 mg) VO/SNG. Manutenção: 2 cp (200 mg) a cada 4-6h.",
          "Tiamazol (Metimazol) 5-10 mg/cp: 20 mg a cada 4-8h."
        ]
      },
      {
        titulo: "Bloquear liberação de hormônio (Escolher uma)",
        tipo: "alerta",
        itens: [
          "Solução de lugol 1%: 4 a 10 gotas VO/SNG a cada 6-8h. (Administrar 1-2 HORA(S) APÓS o Tiamazol/Propiltiouracil).",
          "Carbonato de lítio 300 mg 6/6h (monitorar litemia - alvo: 1 mg/dL)."
        ]
      },
      {
        titulo: "Suporte Clínico",
        tipo: "info",
        itens: [
          "Corrigir hipertermia: Dipirona 2 mL EV 6/6h ou Paracetamol 750 mg VO 6/6h.",
          "Controlar sintomas adrenérgicos: Propranolol 60-80 mg VO/SNG a cada 4-6h ou Atenolol 50-100 mg VO 12/12h.",
          "Tratar a causa precipitante (ex: infecção, sendo a mais comum)."
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Prescrição Prática (Crise Tireotóxica)",
        itens: [
          "Dieta oral branda",
          "Água potável via oral livre demanda",
          "Hidrocortisona 100 mg/fr – reconstituir 3 fr em 2 mL AD cada e diluir 6 mL em SF 0,9% 50 mL – administrar via EV agora",
          "Propiltiouracil 100 mg/cp – administrar 6 comprimidos, via oral, agora",
          "Colestiramina 4g/envelope – diluir 4g em 90 mL de água e administrar, via oral, de 6/6h",
          "Propranolol 40 mg/cp – administrar 2 comprimidos, via oral, de 6/6h",
          "Solução de lugol 1% – administrar 6 gotas, via oral, de 8/8h",
          "Glicemia capilar 2/2h",
          "Monitorização contínua"
        ]
      }
    ]
  },
  {
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
  },
  {
    id: "insuficiencia-adrenal",
    nome: "Insuficiência Adrenal Aguda",
    orientacoes: [
      {
        titulo: "Ressuscitação Volêmica",
        tipo: "procedimento",
        itens: [
          "Hidratação venosa com 1 L de SF 0,9% na primeira hora.",
          "Pode ser necessário 2 a 3 litros de SF 0,9% nas primeiras 12-24h.",
          "Manutenção (mínimo 24-48 horas): SF 0,9% 30-40 mL/kg EV em 24 horas."
        ]
      },
      {
        titulo: "Corticoterapia",
        tipo: "conduta",
        itens: [
          "Dose de ataque: Hidrocortisona 100 mg EV.",
          "Dose de manutenção: Hidrocortisona 50 mg EV de 6/6 horas nas primeiras 24h. Em seguida, 50 mg EV 12/12h."
        ]
      },
      {
        titulo: "Identificar e tratar causa precipitante",
        tipo: "alerta",
        itens: [
          "Infecção bacteriana.",
          "Gastroenterite viral.",
          "Trauma."
        ]
      }
    ],
    prescricao: [
      {
        titulo: "Prescrição Prática",
        itens: [
          "Dieta zero",
          "SF 0,9% 1000 mL – administrar via EV em 1 hora",
          "Hidrocortisona 100 mg/fr – reconstituir 1 fr em 2 mL AD e diluir em SF 0,9% 20 mL – administrar via EV em 2 minutos imediatamente",
          "Glicose 50% – administrar 40 mL, via EV, se glicemia capilar < 70 mg/dL",
          "Glicemia capilar 2/2h",
          "Monitorização contínua"
        ]
      }
    ]
  }
]
