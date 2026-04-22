export const cadEhhData = {
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
  }
