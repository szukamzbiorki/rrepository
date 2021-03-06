$('#close').on('click', function()
{
  $('.videopreview').hide();
});

$('.element-item').on('click', function()
{
  $('.videopreview').show();
});

$('#closeabout').on('click', function()
{
  $('.borderline').show();
  $('.aboutPage').hide();
});

$('.about').on('click', function()
{
  $('.aboutPage').show();
  $('.borderline').hide();
});

var $grid = $('.rightbar').isotope(
{
  // options
  itemSelector: '.element-item',
  transitionDuration: 0,
  percentPosition: true,
  resize: false,
  masonry:
  {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.element-item',
    gutter: 10
  }
});

// $(document).ready(function()
//     {
//       let data = [[
//           {
//             "FIELD1": "class",
//             "FIELD2": 2016
//    },
//           {
//             "FIELD1": "class",
//             "FIELD2": 2017
//    },
//           {
//             "FIELD1": "class",
//             "FIELD2": 2018
//    },
//           {
//             "FIELD1": "class",
//             "FIELD2": 2019
//    },
//           {
//             "FIELD1": "class",
//             "FIELD2": 2020
//    },
//           {
//             "FIELD1": "class",
//             "FIELD2": 2021
//    },
//           {
//             "FIELD1": "class",
//             "FIELD2": 2022
//    }
//   ];
//
//   let template = {
//           '<>': 'div',
//           'class': 'button redColor',
//           'data-filter': '.${FIELD2}'
//           'text': '${FIELD2}'
//         };
//
//   $('.years').json2html(data, template);
//       });



// store filter for each group
var filters = {};

$('.leftbar').on('click', '.button', function(event)
{
  var $button = $(event.currentTarget);
  // get group key
  var $buttonGroup = $button.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[filterGroup] = $button.attr('data-filter');
  // combine filters
  var filterValue = concatValues(filters);
  // set filter for Isotope
  $grid.isotope(
  {
    filter: filterValue
  });
});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup)
{
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function(event)
  {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $(event.currentTarget);
    $button.addClass('is-checked');
  });
});

// flatten object by concatting values
function concatValues(obj)
{
  var value = '';
  for (var prop in obj)
  {
    value += obj[prop];
  }
  return value;
}