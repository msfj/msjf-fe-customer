var tagEle,
    paper,
    RADIUS = 300,
    fallLength = 1200,
    tags = [],
    angleX = Math.PI / 1200,
    angleY = Math.PI / 350,
    CX,
    CY,
    EX,
    EY;

function listener(nd, ev, hd) {
    if ('addEventListener' in window) {
        nd.addEventListener(ev, hd);
    } else {
        nd.attachEvent('on' + ev, hd);
    }
}

function innit() {
    paper = document.getElementById('tagball');
    if(paper.getAttribute('ballinit')) return;
    paper.setAttribute('ballinit', 'true');
    tagEle = paper.childNodes;
    CX = paper.offsetWidth / 2;
    CY = paper.offsetHeight / 2;
    EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft;
    EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;

    listener(paper, 'mousemove', function(event) {
        var x = event.clientX - EX - CX;
        var y = event.clientY - EY - CY;
        angleY = x * 0.0001;
        angleX = y * 0.0001;
    });

    for (var i = 0, le = tagEle.length; i < le; i++) {
        var a, b, k = -1 + (2 * (i + 1) - 1) / le;
            a = Math.acos(k);
            b = a * Math.sqrt(le * Math.PI);
        var x = RADIUS * Math.sin(a) * Math.cos(b);
        var y = RADIUS * Math.sin(a) * Math.sin(b);
        var z = RADIUS * Math.cos(a);
        var t = new tag(tagEle[i], x, y, z);
        // tagEle[i].style.color = "rgb(" + Number(Math.random() * 255) + "," + Number(Math.random() * 255) + "," + Number(Math.random() * 255) + ")";
        tags.push(t);
        t.move();
    }

    animate();
}

function animate() {
    rotateX();
    rotateY();
    tags.forEach(function(it, i) {
        it.move();
    });
    requestAnimationFrame(animate);
}

function rotateX() {
    var cos = Math.cos(angleX);
    var sin = Math.sin(angleX);
    tags.forEach(function(it, i) {
        var y1 = it.y * cos - it.z * sin;
        var z1 = it.z * cos + it.y * sin;
        it.y = y1;
        it.z = z1;
    })
}
function rotateY() {
    var cos = Math.cos(angleY);
    var sin = Math.sin(angleY);
    tags.forEach(function(it, i) {
        var x1 = it.x * cos - it.z * sin;
        var z1 = it.z * cos + it.x * sin;
        it.x = x1;
        it.z = z1;
    })
}
var tag = function(ele, x, y, z) {
    this.ele = ele;
    this.x = x;
    this.y = y;
    this.z = z;
}

tag.prototype = {
    move: function() {
        var scale = fallLength / (fallLength - this.z);
        var alpha = (this.z + RADIUS) / (2 * RADIUS);
        var left = this.x + CX - this.ele.offsetWidth / 2 + "px";
        var top = this.y + CY - this.ele.offsetHeight / 2 + "px";
        var transform = 'translate(' + left + ', ' + top + ') scale(' + scale + ')';
        this.ele.style.opacity = alpha + 0.5;
        this.ele.style.zIndex = Number(scale * 100);
        this.ele.style.transform = transform;
        this.ele.style.webkitTransform = transform;
    }
}

export default {
    innit,
    animate
}
