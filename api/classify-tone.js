export default function handler(req, res) {
  const { sentence } = req.body;

  const staticToneMap = {
    "台灣的法定最低工資自 2024 年起為每月 27,470 元。": {
      grade: "A",
      explanation: "屬於可查證之政策事實，具明確來源。",
      hallucination_risk: "低",
      revision_suggestion: "無需修改。"
    },
    "我認為他是我見過最有魅力的產品經理。": {
      grade: "C",
      explanation: "屬於主觀評價與個人觀點。",
      hallucination_risk: "中",
      revision_suggestion: "如需提升客觀性，可去除個人立場描述。"
    },
    "想像一下，你成為首富的那一刻。": {
      grade: "D",
      explanation: "屬於幻想式敘事語句，非真實語境。",
      hallucination_risk: "高",
      revision_suggestion: "如要轉為實際推論，應補充具體條件與背景。"
    },
    "大型語言模型未來可能將取代大部分初階客服工作。": {
  grade: "B",
  explanation: "屬於對技術趨勢的合理推論，非確定性事實。",
  hallucination_risk: "中",
  revision_suggestion: "可加入研究或數據來源以增強信度。"
    },
    "AI tools might soon replace over 50% of routine coding tasks.": {
      grade: "B",
      explanation: "A logical inference based on observable trends.",
      hallucination_risk: "medium",
      revision_suggestion: "Add recent data or expert citation to strengthen the claim."
    },
    "I honestly think this is the most beautifully designed laptop ever.": {
      grade: "C",
      explanation: "A subjective statement reflecting personal opinion.",
      hallucination_risk: "medium",
      revision_suggestion: "Consider using neutral language to reduce subjectivity."
    },
    "Imagine a future where robots run entire governments without human input.": {
      grade: "D",
      explanation: "A fictional scenario framed as speculative narrative.",
      hallucination_risk: "high",
      revision_suggestion: "Clarify the speculative nature to avoid interpretive ambiguity."
    },
    "According to IEEE, the USB4 protocol supports up to 40Gbps data transfer.": {
      grade: "A",
      explanation: "Contains a verifiable technical statement with citation.",
      hallucination_risk: "low",
      revision_suggestion: "Ensure the cited specification is accurate and current."
    }
  };

  const result = staticToneMap[sentence] || {
    grade: "C",
    explanation: "預設分類：無法比對輸入，判定為主觀或模擬語氣。",
    hallucination_risk: "中",
    revision_suggestion: "請確認輸入是否為標準測試句，或補充具體資訊。"
  };

  res.status(200).json(result);
}
