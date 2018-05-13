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
  'My Guardian',
  'Angel',
  'Always There',
  'Helpful',
  'Wicked Smaht',
  'Super Genius',
  'Knows Best',
  'Funny',
  'Trusting',
  'Fancy',
  'Ingenious',
  'Clever',
  'Fun Filled',
  'Unrivaled',
  'Helpful',
  'Thoughtful'
];

// Initializing!

let array = []
initializeArray();

const tooltipTarget = document.querySelector('.hearts');
const tooltip = new Tooltip(tooltipTarget, {
  title: 'Click me!!',
  trigger: 'manual',
  placement: 'right'
});
tooltip.toggle();

// functions for stuff

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

  tooltip.dispose();

  $('tspan').each((i, span) => {
    let word = typeof words[i] !== 'undefined' ? words[i] : '';
    word = word === ' ' ? '&nbsp;' : word;

    $(span).html(word);
  });

  // $('#svg').removeClass('happy').addClass('happy');
}

// Let's get 'er done!

$(document).ready(function () {
  $('.hearts').on('click', clickHandler);
  setTimeout(() => {
    tooltip.dispose();
  }, 8000);
});
