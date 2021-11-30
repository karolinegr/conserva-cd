var defaultTheme = getRandom(4);

var today = new Date();

var events = [ {
    id: "event001",
    name: "Dia dos Oceanos",
    description: "Comemorado o dia dos Oceanos e do profissional oceanógrafo",
    date: "Junho 08, 2021",
    type: "event",
    everyYear: !0
}, {
    id: "event002",
    name: "Natal",
    description: "Feliz natal!",
    date: "Dezembro 25, 2021",
    type: "event",
    everyYear: !0
}, {
    id: "event003",
    name: "Lançamento CONSERVA-CD",
    description: "Lançamento da primeira versão do projeto CONSERVA-CD.",
    date: today,
    type: "event"
} ];

var active_events = [];

var week_date = [];

var curAdd, curRmv;

function getRandom(a) {
    return Math.floor(Math.random() * a);
}

function getWeeksInMonth(a, b) {
    var c = [], d = new Date(b, a, 1), e = new Date(b, a + 1, 0), f = e.getDate();
    var g = 1;
    var h = 7 - d.getDay();
    while (g <= f) {
        c.push({
            start: g,
            end: h
        });
        g = h + 1;
        h += 7;
        if (h > f) h = f;
    }
    return c;
}

week_date = getWeeksInMonth(today.getMonth(), today.getFullYear())[2];

$(document).ready(function() {
    $("#demoEvoCalendar").evoCalendar({
        format: "MM dd, yyyy",
        titleFormat: "MM",
        calendarEvents: [ {
            id: "event001",
            name: "Dia dos Oceanos",
            description: "Comemorado o dia dos Oceanos e do profissional oceanógrafo",
            date: "Junho 08, 2021",
            type: "event",
            everyYear: !0
        }, {
            id: "event002",
            name: "Natal",
            description: "Feliz natal!",
            date: "Dezembro 25, 2021",
            type: "event",
            everyYear: !0
        }, {
            id: "event003",
            name: "Lançamento CONSERVA-CD",
            description: "Lançamento da primeira versão do projeto CONSERVA-CD.",
            date: today,
            type: "event"
        } ]
    });
    $("[data-set-theme]").click(function(b) {
        a(b.target);
    });
    $("#addBtn").click(function(a) {
        curAdd = getRandom(events.length);
        $("#demoEvoCalendar").evoCalendar("addCalendarEvent", events[curAdd]);
        active_events.push(events[curAdd]);
        events.splice(curAdd, 1);
        if (0 === events.length) a.target.disabled = !0;
        if (active_events.length > 0) $("#removeBtn").prop("disabled", !1);
    });
    $("#removeBtn").click(function(a) {
        curRmv = getRandom(active_events.length);
        $("#demoEvoCalendar").evoCalendar("removeCalendarEvent", active_events[curRmv].id);
        events.push(active_events[curRmv]);
        active_events.splice(curRmv, 1);
        if (0 === active_events.length) a.target.disabled = !0;
        if (events.length > 0) $("#addBtn").prop("disabled", !1);
    });
    a($("[data-set-theme]")[defaultTheme]);
    function a(a) {
        var b = a.dataset.setTheme;
        $("[data-set-theme]").removeClass("active");
        $(a).addClass("active");
        $("#demoEvoCalendar").evoCalendar("setTheme", b);
    }
    var b = getRandom($("[data-settings]").length);
    var c = $("[data-settings]")[b];
    var d = getRandom($("[data-method]").length);
    var e = $("[data-method]")[d];
    var f = getRandom($("[data-event]").length);
    var g = $("[data-event]")[f];
    showSettingsSample($(c).data().settings);
    showMethodSample($(e).data().method);
    showEventSample($(g).data().event);
    $("[data-settings]").on("click", function(a) {
        var b = $(a.target).closest("[data-settings]");
        var c = b.data().settings;
        showSettingsSample(c);
    });
    $("[data-method]").on("click", function(a) {
        var b = $(a.target).closest("[data-method]");
        var c = b.data().method;
        showMethodSample(c);
    });
    $("[data-event]").on("click", function(a) {
        var b = $(a.target).closest("[data-event]");
        var c = b.data().event;
        showEventSample(c);
    });
});

$('[data-go*="#"]').on("click", function(a) {
    a.preventDefault();
    var b = $(this).data().go;
    if ("#top" === b) {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return;
    } else var c = $(b)[0].offsetTop - $("header")[0].offsetHeight - 10;
    $("html, body").animate({
        scrollTop: c
    }, 500);
});