/* -----------------------------------------------------
   フォーム送信時の動作（デモ用）
----------------------------------------------------- */
document.getElementById("contactForm").addEventListener("submit", function (event) {

  // ページリロードを防止
  event.preventDefault();

  // 完了メッセージ
  alert("お問い合わせを送信しました。ありがとうございます！");
});
