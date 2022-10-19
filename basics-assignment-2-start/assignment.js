const task3Element = document.getElementById('task-3');

function alertNoArgsRandom() {
  alert(Math.random());
}

function alertNameArg(name) {
  alert(`Hey, ${name}!`);
}

alertNameArg('Max');

task3Element.addEventListener('click', alertNoArgsRandom);

const str1 = 'You Gonna ';
const str2 = 'Be ';
const str3 = 'Happy!';

function combine(str1, str2, str3) {
  // const combinedText = str1 + str2 + str3;
  const combinedText = `${str1} ${str2} ${str3}`;
  return combinedText;
}

const combinedString = combine(str1, str2, str3);
alert(combinedString);
