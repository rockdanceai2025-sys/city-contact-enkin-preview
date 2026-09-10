/**
 * シティコンタクト｜眼科併設のコンタクトショップを選びましょう ページ
 * - スクロールでのフェードイン
 * - よくあるご質問のアコーディオン
 * 依存ライブラリなし（バニラJS）。CMSへ貼り付けても競合しにくい構成です。
 */
(function () {
  'use strict';

  /* ---------------------------------------------
     1. よくあるご質問（アコーディオン）
     --------------------------------------------- */
  var questions = document.querySelectorAll('.js-faq-q');

  Array.prototype.forEach.call(questions, function (button) {
    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';
      var answer = document.getElementById(button.getAttribute('aria-controls'));
      button.setAttribute('aria-expanded', String(!isOpen));
      if (answer) answer.hidden = isOpen;
    });
  });

  /* ---------------------------------------------
     2. スクロールでのフェードイン
     --------------------------------------------- */
  var targets = document.querySelectorAll('.js-fade');

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  Array.prototype.forEach.call(targets, function (el) { observer.observe(el); });
})();
