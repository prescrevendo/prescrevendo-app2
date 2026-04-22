export const cadEhhV2Data = {
  id: "cad-ehh-v2",
  nome: "Cetoacidose Diabetica e Estado Hiperglicemico Hiperosmolar v2",
  orientacoes: [
    {
      titulo: "Criterios Diagnosticos - Cetoacidose Diabetica (CAD)",
      itens: [
        "Glicemia >250 mg/dL (ou <200 mg/dL em CAD euglicemica)",
        "pH <7.3 ou bicarbonato <18 mEq/L",
        "Cetonemia ou cetonuria positiva",
        "Gap anionico elevado"
      ]
    },
    {
      titulo: "Criterios Diagnosticos - Estado Hiperglicemico Hiperosmolar (EHH)",
      itens: [
        "Glicemia >600 mg/dL",
        "Osmolalidade serica >320 mOsm/kg",
        "pH >7.3",
        "Ausencia ou minima cetose"
      ]
    },
    {
      titulo: "Classificacao de Gravidade da CAD",
      itens: [
        "Leve: pH 7.25-7.30, bicarbonato 15-18 mEq/L",
        "Moderada: pH 7.00-7.24, bicarbonato 10-14 mEq/L",
        "Grave: pH <7.00, bicarbonato <10 mEq/L"
      ]
    },
    {
      titulo: "Fatores Precipitantes Comuns",
      itens: [
        "Infeccoes (mais comum)",
        "Nao adesao a insulinoterapia",
        "Infarto agudo do miocardio",
        "Acidente vascular cerebral",
        "Uso de inibidores de SGLT2 (CAD euglicemica)",
        "Pancreatite aguda"
      ]
    },
    {
      titulo: "Objetivos do Tratamento",
      itens: [
        "Restaurar volume circulante e perfusao tecidual",
        "Corrigir hiperglicemia e cetoacidose",
        "Normalizar eletrólitos (especialmente potassio)",
        "Identificar e tratar causa precipitante"
      ]
    }
  ],
  prescricao: [
    {
      titulo: "Reposicao Volemica - Primeira Hora",
      itens: [
        "Sem choque: SF 0.9% 1000 mL em 1 hora",
        "Com choque: SF 0.9% 1000 mL em bolus, repetir conforme necessario ate estabilizacao hemodinamica"
      ]
    },
    {
      titulo: "Reposicao Volemica - Apos Primeira Hora",
      itens: [
        "SF 0.9% ou SF 0.45% a 250-500 mL/h",
        "Repor deficit em 24-48 horas",
        "Quando glicemia atingir 250 mg/dL: adicionar glicose 5% ao soro para prevenir hipoglicemia",
        "EHH requer em media 9 L de SF 0.9% em 48 horas",
        "Cautela em pacientes com insuficiencia renal avancada"
      ]
    },
    {
      titulo: "Insulinoterapia - Consideracoes Iniciais",
      itens: [
        "Aguardar 1-2 horas apos inicio da hidratacao",
        "Nao iniciar se potassio <3.3 mEq/L (corrigir primeiro)"
      ]
    },
    {
      titulo: "Insulinoterapia - CAD Moderada a Grave",
      itens: [
        "Insulina regular IV continua: 0.1 UI/kg/h",
        "Se metas nao atingidas (reducao glicemia ~50 mg/dL/h): aumentar 1 UI/h a cada hora",
        "Quando glicemia atingir 250 mg/dL: reduzir para 0.05 UI/kg/h"
      ]
    },
    {
      titulo: "Insulinoterapia - CAD Leve a Moderada (Alternativa)",
      itens: [
        "Insulina subcutanea de acao rapida: bolus inicial 0.3 UI/kg",
        "Seguido de 0.1 UI/kg a cada hora OU 0.2 UI/kg a cada 2 horas",
        "Pode ser administrada no pronto socorro ou unidades de observacao"
      ]
    },
    {
      titulo: "Insulinoterapia - EHH",
      itens: [
        "Bolus inicial: 0.1 UI/kg IV",
        "Infusao continua: 0.1 UI/kg/h (ou 0.14 UI/kg/h sem bolus inicial)",
        "Continuar ate glicemia <300 mg/dL"
      ]
    },
    {
      titulo: "Insulina Basal Precoce (Opcional)",
      itens: [
        "Glargina 0.3 UI/kg SC no inicio do tratamento",
        "Pode acelerar resolucao e facilitar transicao",
        "Nao aumenta risco de hipoglicemia"
      ]
    },
    {
      titulo: "Reposicao de Potassio - Monitoracao",
      itens: [
        "A cada 2 horas (ou a cada hora se fora da normalidade)",
        "Estabelecer debito urinario antes de iniciar reposicao"
      ]
    },
    {
      titulo: "Reposicao de Potassio - Protocolos",
      itens: [
        "K+ <3.3 mEq/L: SUSPENDER insulina, repor potassio ate >3.3 mEq/L",
        "K+ 3.3-5.0 mEq/L: adicionar 20-40 mEq/L ao soro",
        "K+ >5.0 mEq/L: nao repor, monitorizar"
      ]
    },
    {
      titulo: "Reposicao de Potassio - EHH",
      itens: [
        "Deficits mais graves que CAD",
        "Iniciar com 40 mEq/L no soro de reposicao",
        "Pode necessitar taxas maiores apos inicio da insulina",
        "Considerar monitorizacao cardiaca continua"
      ]
    },
    {
      titulo: "Outros Eletrólitos - Bicarbonato",
      itens: [
        "Nao recomendado rotineiramente",
        "Considerar apenas em: pH <6.9, hipercalemia grave ou acidose grave com disfuncao cardiaca"
      ]
    },
    {
      titulo: "Outros Eletrólitos - Fosforo e Magnesio",
      itens: [
        "Fosforo: nao repor rotineiramente, considerar em hipofosfatemia grave (<1.0 mg/dL) - usar mistura 50:50 de fosfato de potassio e cloreto de potassio",
        "Magnesio: considerar se hipocalcemia refrataria - dose: 25-50 mg/kg/dose por 3-4 doses a cada 4-6 horas"
      ]
    },
    {
      titulo: "Monitorizacao",
      itens: [
        "Glicemia capilar: a cada hora",
        "Eletrólitos e gasometria: a cada 2-4 horas",
        "Beta-hidroxibutirato: a cada hora (se disponivel)",
        "Sinais vitais: continuos",
        "Debito urinario: rigoroso"
      ]
    },
    {
      titulo: "Criterios de Resolucao da CAD",
      itens: [
        "Melhora clinica",
        "pH >7.3",
        "Bicarbonato ≥18 mEq/L",
        "Gap anionico normalizado",
        "Beta-hidroxibutirato normalizado",
        "Glicemia <200 mg/dL"
      ]
    },
    {
      titulo: "Transicao para Insulina Subcutanea",
      itens: [
        "Administrar insulina basal SC 2-4 horas antes de suspender insulina IV",
        "Manter sobreposicao de 30-60 minutos com insulina de acao rapida SC",
        "Retomar dose domiciliar se bem controlado OU 0.5-0.8 UI/kg/dia (50% basal + 50% prandial) OU ~80% da insulina IV usada nas ultimas 12-24h"
      ]
    },
    {
      titulo: "Complicacoes a Evitar",
      itens: [
        "Hipoglicemia (reduzir insulina quando glicemia atingir 250 mg/dL)",
        "Hipocalemia (monitorizacao rigorosa, reposicao adequada)",
        "Edema cerebral (hidratacao nao excessivamente rapida)",
        "Acidose hiperclorеmica (uso de SF 0.45% apos estabilizacao)",
        "Recorrencia de CAD (transicao adequada para insulina SC)"
      ]
    },
    {
      titulo: "Investigacao da Causa Precipitante",
      itens: [
        "Hemograma, PCR, procalcitonina",
        "Urina I, urocultura",
        "Radiografia de torax",
        "ECG, troponina (se indicado)",
        "Hemoculturas (se febre/sepse)",
        "Revisao de medicacoes (SGLT2i, corticoides)"
      ]
    }
  ],
  referencias: [
    {
      numero: 1,
      titulo: "Diabetes Care in the Hospital: Standards of Care in Diabetes-2026",
      autores: "American Diabetes Association Professional Practice Committee for Diabetes",
      ano: 2026,
      publicacao: "Diabetes Care"
    },
    {
      numero: 2,
      titulo: "Diabetic Ketoacidosis and Hyperosmolar Hyperglycemic Syndrome: Review of Acute Decompensated Diabetes in Adult Patients",
      autores: "Karslioglu French E, Donihi AC, Korytkowski MT",
      ano: 2019,
      publicacao: "BMJ"
    },
    {
      numero: 3,
      titulo: "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report",
      autores: "Umpierrez GE, Davis GM, ElSayed NA, et al",
      ano: 2024,
      publicacao: "Diabetes Care"
    },
    {
      numero: 4,
      titulo: "Diabetic Ketoacidosis: Evaluation and Treatment",
      autores: "Veauthier B, Levy-Grau B",
      ano: 2024,
      publicacao: "American Family Physician"
    },
    {
      numero: 5,
      titulo: "Diabetic ketoacidosis (DKA), hyperglycaemic hyperosmolar state (HHS) and lactic acidosis",
      autores: "Iskandar Idris, Rudy Bilous, Richard Donnelly",
      ano: 2021,
      publicacao: "Handbook of Diabetes 5e"
    },
    {
      numero: 6,
      titulo: "Hyperosmolar Hyperglycemic State",
      autores: "Stoner GD",
      ano: 2017,
      publicacao: "American Family Physician"
    },
    {
      numero: 7,
      titulo: "American Association of Clinical Endocrinology Clinical Practice Guideline: Developing a Diabetes Mellitus Comprehensive Care Plan-2022 Update",
      autores: "Blonde L, Umpierrez GE, Reddy SS, et al",
      ano: 2022,
      publicacao: "Endocrine Practice: Official Journal of the American College of Endocrinology and the American Association of Clinical Endocrinologists"
    },
    {
      numero: 8,
      titulo: "Hyperglycemic Hyperosmolar Syndrome in Children: Pathophysiological Considerations and Suggested Guidelines for Treatment",
      autores: "Zeitler P, Haqq A, Rosenbloom A, Glaser N",
      ano: 2011,
      publicacao: "The Journal of Pediatrics"
    },
    {
      numero: 9,
      titulo: "Management of Diabetes and Hyperglycaemia in the Hospital",
      autores: "Pasquel FJ, Lansang MC, Dhatariya K, Umpierrez GE",
      ano: 2021,
      publicacao: "The Lancet. Diabetes & Endocrinology"
    }
  ]
}
