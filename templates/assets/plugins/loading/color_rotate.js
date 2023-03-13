/**
 * @date: 2023/1/15
 * @author: 小红
 * @fileName: color_rotate
 * @Description: 彩色旋转加载loading
 */


document.onreadystatechange = function () {

  if (document.readyState === "complete") {
    console.log('内容完全加载完毕');
    // document.querySelector('#Butterfly').classList.remove('none');
    document.querySelector('.loader').remove();
    document.body.style.background = '';
  } else {
    document.body.style.background = 'none';
    const dom = document.createElement('div');
    dom.className = 'loader';
    dom.style.cssText = 'margin: auto;position: absolute;left: 0;right: 0;top: 0;bottom: 0;';
    dom.innerHTML = `<span>加载中...</span>
<style>
.loader {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 5px solid #e74c3c;
  position: relative;
  animation: load 2s linear infinite;
}

.loader::before,.loader::after {
  content: '';
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border-radius: 50%;
}

.loader::before {
  border-top: 5px solid #e67e22;
  transform: rotate(120deg);
}

.loader::after {
  border-top: 5px solid #3498db;
  transform: rotate(240deg);
}

.loader span {
  position: absolute;
  font-size: small;
  width: 100px;
  height: 100px;
  color: #000;
  text-align: center;
  line-height: 100px;
  animation: a2 2s linear infinite;
}

@keyframes load {
  to {
    transform: rotate(360deg);
  }
}

@keyframes a2 {
  to {
    transform: rotate(-360deg);
  }
}
</style>
`
    document.body.appendChild(dom);
  }
};
