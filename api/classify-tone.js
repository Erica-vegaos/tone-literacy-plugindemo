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

    const riskMap = {
      high: isChinese ? '高' : 'High',
      medium: isChinese ? '中' : 'Medium',
      low: isChinese ? '低' : 'Low'
    };

    const gradeLabel = result.grade || '–';
    const explanation = result.explanation || '（無說明）';
    const hallucination = riskMap[result.hallucination_risk] || (isChinese ? '－' : 'N/A');
    const suggestion = result.revision_suggestion || (isChinese ? '暫無建議。' : 'No suggestion available.');

    const html = isChinese
      ? `
        <div class="result-block">
          <p><strong>句子：</strong><br>${sentence}</p>
          <p><strong>分級：</strong> ${gradeLabel}</p>
          <p><strong>語氣解釋：</strong><br>${explanation}</p>
          <p><strong>幻覺風險：</strong> ${hallucination}</p>
          <p><strong>使用建議：</strong><br>${suggestion}</p>
        </div>
      `
      : `
        <div class="result-block">
          <p><strong>Sentence:</strong><br>${sentence}</p>
          <p><strong>Grade:</strong> ${gradeLabel}</p>
          <p><strong>Explanation:</strong><br>${explanation}</p>
          <p><strong>Hallucination Risk:</strong> ${hallucination}</p>
          <p><strong>Suggestion:</strong><br>${suggestion}</p>
        </div>
      `;

    display.innerHTML = html;

  } catch (e) {
    display.innerHTML = '⚠️ 無法連線至分析伺服器，請稍後再試。';
  } finally {
    loader.style.display = 'none';
  }
}
