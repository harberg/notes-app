$ = require('jquery');

var data = '';

// $.ajax({
//     url: 'http://localhost:3000/api/v0_0_1/notes',
//     data: data,
//     success: function(data) {
//         console.dir(data);
//     },
//     dataType: 'json'
// })

$.ajax({
    url: 'http://localhost:3000/api/v0_0_1/notes',
    data: data,
    
    success: function(data) {
        data.forEach(function(element) {
            $('#notes').append('<li>'+element.noteBody+'</li>');
        })
    },
    dataType: 'json'
});
console.dir(data);
console.log('bilbo wants ajax');
