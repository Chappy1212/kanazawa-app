// メインのJavaScriptファイル

document.querySelector('form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('お問い合わせありがとうございます！');
    this.reset();
});
