const array = [
  'Strong',
  'Loving',
  'Caring',
  'Kind'
];

function randomWord() {
  return array[Math.floor(Math.random() * array.length)];
}

$('.hearts').on('click', function () {
  $('tspan').remove();

  const word = randomWord().split('');

  word.forEach(l => {
    console.log('JOE: l: ', l);
    $('#text-container').append('<tspan>' + l + '</tspan>');
  });

  $('#svg').removeClass('happy').addClass('happy');
  // $('.happy').beginElement();
  // document.getElementById('svg').beginElement();
  // $('#svg').detach().prependTo('body');

});