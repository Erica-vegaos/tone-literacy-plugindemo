const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { sentence } = req.body;
  let response = {
    tone_level: "C",
    explanation: "Default: Subjective or simulated tone.",
    hallucination_risk: "medium",
    revision_suggestion: "Consider removing subjective framing to increase objectivity."
  };

  if (sentence.toLowerCase().includes('according to')) {
    response = {
      tone_level: "A",
      explanation: "The sentence references a verifiable source and presents factual information.",
      hallucination_risk: "low",
      revision_suggestion: "Verify the source citation is accurate and up-to-date."
    };
  } else if (sentence.includes('might') || sentence.includes('could')) {
    response = {
      tone_level: "B",
      explanation: "The sentence expresses a possibility, making it a logical inference.",
      hallucination_risk: "medium",
      revision_suggestion: "Add specific data to strengthen the statement."
    };
  } else if (sentence.toLowerCase().includes('dragon') || sentence.includes('in another universe')) {
    response = {
      tone_level: "D",
      explanation: "The sentence contains fictional or creative narrative elements.",
      hallucination_risk: "high",
      revision_suggestion: "Remove fictional framing to enhance realism."
    };
  }

  res.json(response);
});

module.exports = router;
