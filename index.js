// $(document).ready(function(){

//     $("h1").hide();
    

//     $("#mypage").click(function(){
//         $("h1").show();
//         $("#mypage").hide();
//     });




// });



// $(document).ready(function(){

    
//     // $(".pages").click(function(){
//     //     $(this).css('color','#00bbff');
//     // })


//     // let isClicked = false;
//     // $(".pages").dblclick(function(){
//     //     if(!isClicked)
//     //     {
//     //         $(this).css("font-size",'4em')
//     //         $(this).css("color",'red')
//     //     }
//     //     else
//     //     {
//     //         $(this).css("font-size",'1em');
//     //         $(this).css("color",'green');

//     //     }
//     //     isClicked = !isClicked;
//     // })



//     // $("p").mouseenter(function(){
//     //     $(this).css("color","red");
//     //     $(this).css("transition","1s");
//     // })



//     // $("p").mouseleave(function(){
//     //     $(this).css("color","green");
//     //     $(this).css("transition","1s");
//     // });


//     // $("input").css("outline","none");

//     // $("input").focus(function(){
//     //     $(this).css("border","2px solid #00bfff");
//     //     $(this).css("transition","1s");
//     // })

//     // $("input").blur(function(){
//     //     $(this).css("border","2px solid red");
//     //     $(this).css("transition","1s");
//     // })


//     // $("input").keydown(function(){
//     //     $(this).css("border","2px solid orange");
//     //     $(this).css("transition","1s");
//     // });

    
//     // $("input").keyup(function(){
//     //     $(this).css("border","2px solid #00bfff");
//     //     $(this).css("transition","1s");
//     // });

// });








let content = "";
let names = ["Kamran","Omar","Lale","Cavid","Eli"];


for (let i = 0; i < names.length; i++) {
    content+=`
    
        <div style='top:${i*100}px' class='notification-success'>
            <div>
                <img src='images/1.jpg' />
            </div>
            <div class='rectangle'>
                <h2>
                    ${names[i]}
                </h2>
                <p>Do you want to go see a movie tonight?</p>
            </div>
        </div>

    `;
}

$(document).ready(function(){

    //html text attr val

    $("#div1").html(content);

})
