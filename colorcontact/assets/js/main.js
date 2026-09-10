/**
 * シティコンタクト｜眼科併設のコンタクトショップを選びましょう
 * スクロールでのフェードインのみ。依存ライブラリなし（バニラJS）。
 */
(function () {
  'use strict';
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
