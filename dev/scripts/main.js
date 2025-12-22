const buttonAdd = document.querySelector('#add-buyer');
buttonAdd.addEventListener('click', function (e) {
  this.insertAdjacentHTML(
    'beforebegin',
    '<div class="main-form__fields_line"><div class="main-form__block"><label class="main-form__label">Имя, Должность, Подразделение</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div><div class="main-form__block"><label class="main-form__label">Роль</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div><div class="main-form__block"><label class="main-form__label">Уровень влияния</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div><div class="main-form__block"><label class="main-form__label">Режим</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div></div>'
  );
});

const buttonKey = document.querySelector('#add-key');
buttonKey.addEventListener('click', function (e) {
  this.insertAdjacentHTML(
    'beforebegin',
    '<div class="main-form__block"><label class="main-form__label">Короткая формулировка персональных Выигрышей, которые получает Покупатель при достижении важных, измеримых бизнес Результатов.</label><textarea class="main-form__textarea"></textarea></div><div class="main-form__block"><label class="main-form__label">Рейтинг (-5 to +5)</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div>'
  );
} );

const buttonStrong = document.querySelector('#add-strong');
buttonStrong.addEventListener('click', function (e) {
  this.insertAdjacentHTML(
    'beforebegin',
    '<label class="main-form__label">СИЛЬНЫЕ СТОРОНЫ</label><input class="main-form__input" type="text" placeholder="" value="" name="">'
  );
});
const buttonRed = document.querySelector('#add-red');
buttonRed.addEventListener('click', function (e) {
  this.insertAdjacentHTML(
    'beforebegin',
    '<label class="main-form__label">КРАСНЫЕ ФЛАГИ</label><input class="main-form__input" type="text" placeholder="" value="" name="">'
  );
});
// const labels = document.querySelectorAll( '.main-form__label' );
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('main-form__label')) {
    if (e.target.classList.contains('active-red')) {
      e.target.classList.remove('active-red');
      e.target.classList.add('active-blue');
    } else {
      if (e.target.classList.contains('active-blue')) {
        e.target.classList.remove('active-blue');
      } else {
        e.target.classList.add('active-red');
      }
    }
    // Опционально: предотвращаем повторное срабатывание
    e.preventDefault();
  }
});
