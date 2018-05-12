const DEFAULT_ARRAY = [
  'Strong',
  'Loving',
  'Caring',
  'Kind',
  'Lovely',
  'The Best',
  'Patient',
  'Mama',
  'Charming',
  'Magical',
  'Beaming',
  'Inspiration'
];

let array = []
initializeArray();

function initializeArray () {
  array = DEFAULT_ARRAY.slice();
  shuffle(array);
}

function shuffle (_array) {
    let counter = _array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = _array[counter];
        _array[counter] = _array[index];
        _array[index] = temp;
    }

    return _array;
}

function randomWord () {
  if (array.length === 0) {
    initializeArray()
  }
  // const index = Math.floor(Math.random() * array.length);
  return array.pop();
}

function clickHandler () {
  // $('tspan').remove();

  const words = randomWord();

  console.log(words);

  words.split('');

  $('tspan').each((i, span) => {
    let word = typeof words[i] !== 'undefined' ? words[i] : '';
    $(span).text(word);
  });

  // words.forEach(l => {
  //   console.log('JOE: l: ', l);
  //   $('#text-container').append('<tspan>' + l + '</tspan>');
  // });

  $('#svg').removeClass('happy').addClass('happy');
  // $('.happy').beginElement();
  // document.getElementById('svg').beginElement();
  // $('#svg').detach().prependTo('body');
}

$(document).ready(function () {
  $('.hearts').on('click', clickHandler);
});

