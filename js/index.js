window.onload = function() {
    if (typeof window.innerWidth != 'undefined')
    {
        var viewportwidth = window.innerWidth

        if (viewportwidth < 767)
        {
            buttons = document.getElementById("buttons")
            buttons.style.display = "none"
        }
    }
}
