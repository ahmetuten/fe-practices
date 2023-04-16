$(document).ready(function() {
    let quotes = [["Change your thoughts and you change your world.", "Norman Vincent Peale"],
        ["If you can dream it, you can achieve it.", "Zig Ziglar"],
        ["Go confidently in the direction of your dreams. Live the life you have imagined.", "Henry David Thoreau"],
        ["You miss 100% of the shots you don’t take.", "Michael Scott"],
        ["You become what you believe", "Oprah Winfrey"],
        ["It is never too late to be what you might have been.", "George Eliot"],
        ["Whether you think you can or you think you can’t, you’re right.", "Henry Ford"]];

        let colors = ["#74a856", "#bdbb9a", "#e74b3c", "#77b2a9", "#fb6965", "#2c3f50", "#f39c13"];

        let stdQuote = "";
        let stdAuthor = "";
        let stdColor = "";

    $("#new-quote").on("click", function () {
        let newColor = stdColor;
        let newQuote = stdQuote;
        let newAuthor = stdAuthor;

        while (newColor === stdColor) {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        }
        stdColor = newColor;

        while (newQuote === stdQuote) {
            newQuote = quotes[Math.floor(Math.random() * quotes.length)][0];
        }
        stdQuote = newQuote;

        while (newAuthor === stdAuthor) {
            newAuthor = quotes[Math.floor(Math.random() * quotes.length)][1];
        }
        stdAuthor = newAuthor;

        $("#text").css("opacity", "0");
        $("#author").css("opacity", "0");
        setTimeout(function() {
            $("#text").text(stdQuote);
            $("#text").css("opacity", "1");
            $("#author").text(stdAuthor);
            $("#author").css("opacity", "1");

            $("body, .btn-primary").css("background-color", stdColor);
            $(".row").css("color", stdColor);
        }, 500);
        })

        $("#text").text(quotes[Math.floor(Math.random() * quotes.length)][0]).hide().fadeIn(1000);
        $("#author").text(quotes[Math.floor(Math.random() * quotes.length)][1]).hide().fadeIn(1000);

});