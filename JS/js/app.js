var tabBtn = $('.tab-button');
var tabContent = $('.tab-content');

// tabBtn.eq(0).on('click', function (){
//     tabBtn.removeClass('orange');
//     tabContent.removeClass('show');
//     tabBtn.eq(0).addClass('orange');
//     tabContent.eq(0).addClass('show');
// })
// tabBtn.eq(1).on('click', function (){
//     tabBtn.removeClass('orange');
//     tabContent.removeClass('show');
//     tabBtn.eq(1).addClass('orange');
//     tabContent.eq(1).addClass('show');
// })
// tabBtn.eq(2).on('click', function (){
//     tabBtn.removeClass('orange');
//     tabContent.removeClass('show');
//     tabBtn.eq(2).addClass('orange');
//     tabContent.eq(2).addClass('show');
// })
for(let i =0; i<3; i++){
    tabBtn.eq(i).on('click', function (){
        console.log(i);
        tabBtn.removeClass('orange');
        tabContent.removeClass('show');
        tabBtn.eq(i).addClass('orange');
        tabContent.eq(i).addClass('show');
    })
}
