// global tab variable
var tab = 'home-tab';

// Set default tab
if (location.hash) {
  tab = location.hash.slice(1) + '-tab';
  $('.navbar .item').removeClass('active');
  $('.navbar .item[data-tab="'+tab+'"]').addClass('active');

  $('.tab-pane').removeClass('active');
  $('.' + tab).addClass('active');
}

// Times Background
var currentTime = new Date().getHours();
if (6 <= currentTime && currentTime < 9) {
  $("body").css({
    "background": "url(/assets/img/times/morning.png) no-repeat center center fixed",
    "background-size": "cover"
  });
} else if (9 <= currentTime && currentTime < 12) {
  $("body").css({
    "background": "url(/assets/img/times/late-morning.png) no-repeat center center fixed",
    "background-size": "cover"
  });
} else if (12 <= currentTime && currentTime < 15) {
  $("body").css({
    "background": "url(/assets/img/times/afternoon.png) no-repeat center center fixed",
    "background-size": "cover"
  });
} else if (15 <= currentTime && currentTime < 18) {
  $("body").css({
    "background": "url(/assets/img/times/late-afternoon.png) no-repeat center center fixed",
    "background-size": "cover"
  });
} else if (18 <= currentTime && currentTime < 21) {
  $("body").css({
    "background": "url(/assets/img/times/evening.png) no-repeat center center fixed",
    "background-size": "cover"
  });
} else if (21 <= currentTime && currentTime < 0) {
  $("body").css({
    "background": "url(/assets/img/times/late-evening.png) no-repeat center center fixed",
    "background-size": "cover"
  });
} else if (0 <= currentTime && currentTime < 3) {
  $("body").css({
    "background": "url(/assets/img/times/night.png) no-repeat center center fixed",
    "background-size": "cover"
  });
} else {
  $("body").css({
    "background": "url(/assets/img/times/late-night.png) no-repeat center center fixed",
    "background-size": "cover"
  });
}

// Quotes
var sentences = [
  '"Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart." - Steve Jobs',
  '"Quality is more important than quantity. One home run is much better than two doubles." - Steve Jobs',
  '"Any sufficiently advanced technology is indistinguishable from magic." - Arthur C. Clarke',
  '"One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man." - Elbert Hubbard',
  '"Technological progress has merely provided us with more efficient means for going backwards." - Aldous Huxley',
  '"Life isn\'t about getting and having, it\'s about giving and being." - Kevin Kruse',
  '"Strive not to be a success, but rather to be of value." - Albert Einstein',
  '"You miss 100% of the shots you don\'t take." - Wayne Gretzky',
  '"Every child is an artist. The problem is how to remain an artist once he grows up." - Pablo Picasso',
  '"The two most important days in your life are the day you are born and the day you find out why." - Mark Twain',
  '"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do." - Leonardo da Vinci',
  '"A person who never made a mistake never tried anything new." - Albert Einstein',
  '"I would rather die of passion than of boredom." - Vincent van Gogh',
  '"It\'s not the years in your life that count. It\'s the life in your years." - Abraham Lincoln',
  '"The only way to do great work is to love what you do." - Steve Jobs',
  '"Design is the fundamental soul of a man-made creation that ends up expressing itself in successive outer layers of the project, or service." - Steve Jobs',
  '"For you to sleep well at night, the aesthetic, the quality, has to be carried all the way through." - Steve Jobs',
  '"Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it\'s really how it works." - Steve Jobs',
  '"Be a yardstick of quality. Some people aren\'t used to an environment where excellence is expected." - Steve Jobs',
  '"In most people\'s vocabularies, design means veneer. It\'s interior decorating. It\'s the fabric of the curtains and the sofa. But to me, nothing could be further from the meaning of design." - Steve Jobs',
  '"It\'s really hard to design products by focus groups. A lot of times, people don\'t know what they want until you show it to them." - Steve Jobs',
  '"To design something really well, you have to get it. You have to really grok what it\'s all about." - Steve Jobs',
  '"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs'
];

var indexNum = Math.floor(Math.random() * sentences.length);
var rand = sentences[indexNum];
$('#quotes').text(rand);

// Shrooms
$('#shroomNext').on('click', function() {
  indexNum++;
  if (indexNum == sentences.length) {
    indexNum = 0;
  }
  rand = sentences[indexNum];
  $('#quotes').text(rand);
});
$('#shroomPrev').on('click', function() {
  indexNum--;
  if (indexNum === 0) {
    indexNum = sentences.length;
  }
  rand = sentences[indexNum];
  $('#quotes').text(rand);
});
$('#shroomRand').on('click', function() {
  indexNum = Math.floor(Math.random() * sentences.length);
  rand = sentences[indexNum];
  $('#quotes').text(rand);
});

// change tab-content size on click
$('.navbar .item').on('click', function() {
  if (!$(this).hasClass('active')) {
    tab = $(this).data('tab');

    $('.navbar .item').removeClass('active');
    $(this).addClass('active');

    $('.tab-pane').removeClass('active');
    $('.' + tab).addClass('active');

    tabContentSize();
  }
});

// change tab-content size
function tabContentSize() {
  var height;
  if (['profile-tab'].indexOf(tab) > -1) {
    height = $("." + tab).height() + 30;
  } else {
    height = $("." + tab).height() + 60;
  }
  var heightPx = height + "px";
  if (window.innerWidth < 700) {
    $(".tab-content").css({
      "min-height": heightPx
    });
  }
}

window.onresize = function(event) {
  if (window.innerWidth < 700) {
    tabContentSize();
  } else {
    $(".tab-content").css({
      "min-height": "355px"
    });
  }
};

setTimeout(function() {
  tabContentSize();
}, 500);

// navbar hover
$('.item').prepend('<div class="hover"><span></span><span></span><span></span><span></span><span></span></div>');