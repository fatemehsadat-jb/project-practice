/* for text typing effect*/
document.addEventListener('DOMContentLoaded', function() {

    Typed.new("#typed ", {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 110,
        backDelay: 500,
        loop: true,
        contentType: 'html',
        loopCount: null,
        callback: function() {
            foo();
        },
        resetCallback: function() {
            newTyped();
        }
    });

    var resetElement = document.querySelector('.reset');
    if (resetElement) {
        resetElement.addEventListener('click', function() {
            document.getElementById('typed')._typed.reset();
        });
    }

});

function newTyped() {}

function foo() {
    console.log("Callback ");
}


/*for arrow up animation*/
var arrow = document.getElementById("arrow-up");
arrow.addEventListener("mouseover", function() {
    arrow.classList.add("animate__animated", "animate__bounceIn");
    setTimeout(function() {
        arrow.classList.remove("animate__animated", "animate__bounceIn")
    }, 1000);
});

/*for nav scroll background*/
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("mynav").style.backgroundColor = "black";
        document.getElementById("mynav").style.zIndex = "1000";
        document.getElementById("mynav").style.height = "55px";
    } else {
        document.getElementById("mynav").style.backgroundColor = "transparent";
    }
}
/*for collapse scroll background*/
window.onscroll = function() {
    scrollFunction2()
};

function scrollFunction2() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("mycollapse").style.backgroundColor = "black";
        document.getElementById("mynav").style.backgroundColor = "black";
        document.getElementById("mynav").style.height = "55px";
    } else {
        document.getElementById("mycollapse").style.backgroundColor = "#1e73be";
        document.getElementById("mynav").style.backgroundColor = "transparent";
    }
}
/* for preloader*/
window.onload = function() {
    onloadfunction()
};

function onloadfunction() {
    document.getElementById("preloader").classList.add("hidepreloader");
}