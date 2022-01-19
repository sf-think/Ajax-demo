const request = new XMLHttpRequest();

getCSS.onclick = () => {
  // 使用 AJAX 加载 CSS
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status <= 400) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("下载失败");
      }
    }
  };

  request.send();
};

getJS.onclick = () => {
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status <= 400) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.head.appendChild(script);
      } else {
        alert("下载失败");
      }
    }
  };

  request.send();
};
getHTML.onclick = () => {
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    // 下载完成，但不知道状态码是 2xx 还是 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status <= 400) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("下载失败");
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    // 下载完成，但不知道状态码是 2xx 还是 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status <= 400) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("下载失败");
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    // 下载完成，但不知道状态码是 2xx 还是 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status <= 400) {
        console.log(request.response);
        console.log(typeof request.response);
        console.log(JSON.parse(request.response));
        console.log(typeof JSON.parse(request.response));
      } else {
        alert("下载失败");
      }
    }
  };
  request.send();
};

let n = 1
getPage.onclick = () => {
  request.open('get', `/page${n+1}`)
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status >= 200 && request.status <= 400) {
      const array = JSON.parse(request.response)
      array.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      });
    }
  }
  request.send()
}