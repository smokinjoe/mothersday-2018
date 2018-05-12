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
  'Inspirational',
  'Beautiful',
  'Guardian',
  'Angel',
  'Always there',
  'Helpful',
  'Wicked Smaht',
  'Super Genius',
  'Knows Best',
  'Funny',
  'Trusting'
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
  return array.pop();
}

function clickHandler () {
  const words = randomWord().split('');

  $('tspan').each((i, span) => {
    let word = typeof words[i] !== 'undefined' ? words[i] : '';
    word = word === ' ' ? '&nbsp;' : word;

    $(span).html(word);
  });

  $('#svg').removeClass('happy').addClass('happy');
}

$(document).ready(function () {
  $('.hearts').on('click', clickHandler);
});

