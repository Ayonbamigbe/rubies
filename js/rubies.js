// $(document).ready(function(){
    
//     $('#menu').click(function(){
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle');
//     });

//     $('#login').click(function(){
//         $('.login-form').addClass('popup');
//     });
    
//     $('#login-form form .fa-times').click(function(){
//         $('.login-form').removeClass('popup');
//     });

//     $(window).on('load scroll',function(){

//         $('#menu').removeClass('fa-times');
//         $('.navbar').removeClass('nav-toggle');
        
//         $('.login-form').addClass('popup');

//         $('section').each(function(){
            
//             let top = $(window).scrollTop();
//             let height = $(this).heigth();
//             let id = $(this).attr('id');
//             let offset = $(this).offset().top - 200;

//             if(top > offset && top < offset + height){
//                 $('.navbar ul li a').removeClass('active');
//                 $('.navbar').find('[href="#${id}"]').addClass('active');
//             }
//         })
//         });
//     });
// });
let clickLogin = document.querySelector('#login-form');
let login_icons = document.querySelector('#login')






