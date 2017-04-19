var myShakeEvent = new Shake({
    threshold: 15,
    timeout: 1000
});
myShakeEvent.start();

window.addEventListener('shake', shakeEventDidOccur, false);
function shakeEventDidOccur() {

    function pickRandomProperty(obj) {
        var result;
        var count = 0;
        for (var prop in obj)
            if (Math.random() < 1 / ++count)
                result = prop;
        return result;
    }

    var data = {
        "post1": {
            "avatar": "images/logo.jpg",
            "name": "Mark Zuckerberg",
            "date": "21 hrs",
            "location": "San Jose, CA, United States",
            "text": "Today at our F8 developer conference, we're making the camera the first augmented reality platform. We all know where we want augmented reality to get: glasses or eventually contact lenses that look and feel normal, and let you overlay all kinds of information and digital content on the real world. But in the last couple of years, we hve started to see primitive examples of AR on phones in the camera.",
            "img": "images/1.jpg"

        },
        "post2": {
            "avatar": "images/logo.jpg",
            "name": "Mark Zuckerberg",
            "date": "16 April at 16:30",
            "location": "Palo Alto, CA, United States",
            "text": "Throwback 10 years ago to our first F8 and the launch of the Facebook Platform. Looking forward to F8 next week!",
            "img": "images/2.jpg"
        },
        "post3": {
            "avatar": "images/logo.jpg",
            "name": "Mark Zuckerberg",
            "date": "14 April at 08:07 ",
            "location": "Palo Alto, CA, United States",
            "text": "Today at our F8 developer conference, we're making the camera the first augmented reality platform. We all know where we want augmented reality to get: glasses or eventually contact lenses that look and feel normal, and let you overlay all kinds of information and digital content on the real world. But in the last couple of years, we hve started to see primitive examples of AR on phones in the camera.",
            "img": "images/3.jpg"
        }
    };

    var key = pickRandomProperty(data);
    var source = $("#div-template").html();
    var template = Handlebars.compile(source, {
        noEscape: true
    });

    var html = template(data[key]);
    $("#insert-pos").html(html);

}