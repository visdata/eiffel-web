function compareVersions (v1, v2) {
    if (v1 === v2) {
        return 0;
    }

    var v1parts = v1.split('_').map(parseFloat);
    var v2parts = v2.split('_').map(parseFloat);
    var len = Math.min(v1parts.length, v2parts.length);

    for (var i = 0; i < len; i++) {
        if (parseInt(v1parts[i]) > parseInt(v2parts[i])) {
            return 1;
        }

        if (parseInt(v1parts[i]) < parseInt(v2parts[i])) {
            return -1;
        }
    }

    if (v1parts.length > v2parts.length) {
        return 1;
    }
    if (v1parts.length < v2parts.length) {
        return -1;
    }

    return 0;
}
var v1='1_0.8690847534228847';
var v2='0_0.11302401181690515_0.11302401181690623_0.11302401181690616';
var v3='0_0.11302401181690515_0.11302401181690623';
var r1=compareVersions(v1,v2);
var r2=compareVersions(v2,v3);
var r3=compareVersions(v2,v2);
console.log(r1)
console.log(r2)
console.log(r3)