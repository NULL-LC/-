function getQueryString(key) {
    var l0 = location.search;
    if (l0 == "" || l0 == "?") {
        return null;
    }
    var k = [],
        v = [],
        gS, item, l = l0.substring(1).split("&"),
        result = null;
    for (var i = 0; i < l.length; i++) {
        item = l[i].split("=");
        k[i] = item[0];
        v[i] = (item[1] == undefined) ? ("") : (item[1]);
    }
    gS = [k, v];
    gS[0].find(function(v) {
        if (v.toLowerCase() == key.toLowerCase()) {
            result = gS[1][gS[0].indexOf(v)];
        }
    });
    return (result == null) ? (null) : (decodeURIComponent(result));
}
