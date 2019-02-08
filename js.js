/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a "purple" background when you click on one of them*/
//this function gives the hello class a purple bkg when clicked
$(".hello").click(function() {
        $(".hello").css("background-color","purple");
    });

/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
//this function changes the height and width
$("h1hw").mouseover(function () {
    $(this).addClass("#h1hw");
    //this function changes the height and width back to the original setting
    }) .mouseout(function() {
    $(this).css("h1hw")
    });

/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
//this function adds a period to the end of the hello class when clicked
$(".hello").click(function() {
    ($(this).text("."));
        $(".hello").off("click")

    });







