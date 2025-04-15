async function classify(sentence) {
  const loader = document.getElementById('loadingSpinner');
  const display = document.getElementById('markdownText');
  loader.style.display = 'block';
  display.innerHTML = '';

  try {
    const res = await fetch('/api/classify-tone', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sentence })
    });

    const result = await res.json();
    const isChinese = /[\u4e00-\u9fa5]/.test(sentence);
    const riskMap = { high: '高', medium: '中', low: '低' };
    const riskLabel = isChinese ? riskMap[result.hallucination_risk] : result.hallucination_risk;

    const html = isChinese
      ? `
        <p><strong>句子：</strong><br>${sentence}</p>
        <p><strong>分級：</strong> ${result.grade}</p>
        <p><strong>語氣解釋：</strong><br>${result.explanation}</p>
        <p><strong>幻覺風險：</strong> ${riskLabel || '－'}</p>
        <p><strong>使用建議：</strong><br>${result.revision_suggestion}</p>
      `
      : `
        <p><strong>Sentence:</strong><br>${sentence}</p>
        <p><strong>Grade:</strong> ${result.grade}</p>
        <p><strong>Explanation:</strong><br>${result.explanation}</p>
        <p><strong>Hallucination Risk:</strong> ${riskLabel || 'N/A'}</p>
        <p><strong>Suggestion:</strong><br>${result.revision_suggestion}</p>
      `;

    display.innerHTML = html;
  } catch (e) {
    display.innerHTML = '⚠️ 無法連線至分析伺服器，請稍後再試。';
  } finally {
    loader.style.display = 'none';
  }
}
