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
    '<div class="main-form__grid_columns"><div class="main-form__wrapper main-form__wrapper_62"><div class="main-form__fields main-form__fields_2 nopad-right"><div class="main-form__block"><label class="main-form__label">Короткая формулировка персональных Выигрышей, которые получает Покупатель при достижении важных, измеримых бизнес Результатов.</label><textarea class="main-form__textarea"></textarea></div><div class="main-form__block"><label class="main-form__label main-form__label_2">Рейтинг (-5 to +5)</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div></div></div><div class="main-form__wrapper main-form__wrapper_38"><div class="main-form__fields"><div class="main-form__block"><label class="main-form__label main-form__label_2">Свидетельства в пользу рейтинга</label><textarea class="main-form__textarea"></textarea></div></div></div></div>'
  );
} );

const buttonStrong = document.querySelector('#add-strong');
buttonStrong.addEventListener('click', function (e) {
  this.insertAdjacentHTML(
    'beforebegin',
    '<div class="main-form__grid_columns"><div class="main-form__wrapper main-form__wrapper_40"><div class="main-form__fields nopad-right nopad-top"><div class="main-form__block"><label class="main-form__label main-form__label_noclick"><span class="circle-blue"></span>СИЛЬНЫЕ СТОРОНЫ</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div></div></div><div class="main-form__wrapper main-form__wrapper_20"><div class="main-form__fields nopad-right nopad-left nopad-top"><div class="main-form__block"><label class="main-form__label">&nbsp;</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div></div></div><div class="main-form__wrapper main-form__wrapper_40"><div class="main-form__fields main-form__fields_3 nopad-left nopad-top"><div class="main-form__block"><label class="main-form__label">Что</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div><div class="main-form__block"><label class="main-form__label">Кто</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div><div class="main-form__block"><label class="main-form__label">Когда</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div></div></div></div>'
  );
});
const buttonRed = document.querySelector('#add-red');
buttonRed.addEventListener('click', function (e) {
  this.insertAdjacentHTML(
    'beforebegin',
    '<div class="main-form__grid_columns"><div class="main-form__wrapper main-form__wrapper_40"><div class="main-form__fields nopad-right nopad-top"><div class="main-form__block"><label class="main-form__label main-form__label_noclick"><span class="circle-red"></span>КРАСНЫЕ ФЛАГИ</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div></div></div><div class="main-form__wrapper main-form__wrapper_20"><div class="main-form__fields nopad-right nopad-left nopad-top"><div class="main-form__block main-form__block_column-2"><label class="main-form__label">Необходимая информация</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div></div></div><div class="main-form__wrapper main-form__wrapper_40"><div class="main-form__fields main-form__fields_3 nopad-left nopad-top"><div class="main-form__block"><label class="main-form__label">От кого</label><input class="main-form__input" type="text" placeholder="" value="" name=""></div></div></div></div>'
  );
});
// const labels = document.querySelectorAll( '.main-form__label' );
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('main-form__label') && ! e.target.classList.contains('main-form__label_noclick')) {
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
