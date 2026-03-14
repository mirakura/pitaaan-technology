// ===== FAQ アコーディオン処理 =====
const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    // 次の要素（回答）を取得
    const answer = question.nextElementSibling;

    // 表示・非表示を切り替え
    answer.style.display =
      answer.style.display === 'block' ? 'none' : 'block';
  });
});
