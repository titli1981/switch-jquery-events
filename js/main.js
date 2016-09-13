
$(document).ready(function() {
    console.log( "ready!");


    $("button").click(function(){
        if ($("button").hasClass("on")){
        $("button").addClass("off").removeClass("on")
        $("body").addClass("dark").removeClass("light")
        $(".status").text("Who turned off the light")
    }

        else
        {$("button").addClass("on").removeClass("off")
        $("body").addClass("light").removeClass("dark")
        $(".status").text("It's so bright in here!")
    }

    });

})
