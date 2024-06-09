(function() {
    var header = new Headroom(document.querySelector("#header"), {
        tolerance: 5,
        offset : 70,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp"
        }
    });
    header.init();
}());