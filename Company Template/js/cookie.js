$(
    function () {
        var ck = false;
        if ( document.cookie && document.cookie.match(/cookie=1/) ) {
            ck = true;
        }

        if ( ! ck ) {
            $("body").append(
                "<section id='cookie'>\ This site uses technical cookies to offer you a better browsing experience on the site. If you want to know more visit the\
                    <a href='js/cookie_policy.html' target='_blank'>Policy</a> or \
                    <a  href='#' data-show='none' data-setc='closecookie'>Close</a> this warning.\
                </section>"
            );

            $("#cookie").css({
                position: "fixed"
                , top: 900
                , left: 0
                , width: "100%"
                , height: "80px"
                , background: "rgba(255,255,255,0.8)"
                , "z-index": 60
                , padding: "1em"
                , color: "#000055"
                , "text-align": "center"
                , "box-shadow": "0 .5em .5em rgba(0,0,0,.5)"
                , margin: 0
                , "min-height": 0
                , "font-size" : "20px"
                , "font-family": "arial"
            });



            $("#cookie>a").css({
                "text-decoration": "none"
                , "padding-top": "10px"
                , "padding-bottom": "10px"
                , "padding-left": "20px"
                , "padding-right": "20px"
                , "border": "solid 1px black"
                , "font-family": "arial"
                , width: "8em"
                , background: "transparent"
                , color: "black"
                , "border-radius": ".2em"
                , display: "inline-block"
                , "text-align": "center"
            });

            $("#cookie>a").css({
              "background-color": "03a9f4"
              , "color": "black"
            });

            $("#cookie>a:first").css({
                background: "transparent"
            });

            $("a[data-setc='closecookie']").click(
                function (e) {
                    $("#cookie").remove();
                    document.cookie = [
                        encodeURIComponent('cookie'), '=1',
                        '; expires=Sat, 31 Dec 2050 00:00:00 UTC',
                        '; path=/'
                    ].join('');
                }
            );
        }
    }
);
