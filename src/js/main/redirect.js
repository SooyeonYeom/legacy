function redirect() {
    var link = document.location.href.split("/");
    var link = link[3];
    var cookies = document.cookie.split("; ");
    var isCookie = cookies.includes("mycookie");

    if (isCookie) {
        console.log("쿠키있음");
    } else {
        console.log("쿠키없음");
    }

    if (link == "" && !isCookie) { // 로그인창 + 쿠키없음
        try {
            opener.close(); // 로그인 성공 시 메인창으로 옮긴 후 로그인창 끔
        } catch (e) {
            console.log("하와와 오류예요!" + e);
        }
    } else if (link == "" && isCookie) { // 로그인창 + 쿠키있음
        window.location.replace("https://sooyeonyeom.github.io/home");
    } else if (link !== "" && !isCookie) { // 일반창 + 쿠키없음
        window.location.replace("https://sooyeonyeom.github.io/");
    } else { // 일반창 + 쿠키있음
        try {
            opener.close(); // 로그인 성공 시 메인창으로 옮긴 후 로그인창 끔
        } catch (e) {
            console.log("하와와 오류예요!" + e);
        }
    }
}

