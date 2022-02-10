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


/*for animation*/

function movebox1() {
    document.getElementById('attributes-box1').classList.add("animate1");
}

function movebox2() {
    document.getElementById('attributes-box2').classList.add("animate2");
}

function movelogo() {
    document.getElementById('attributes-logo-box').classList.add("logoanimate");
}