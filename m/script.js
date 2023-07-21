// JS 代码

// 获取菜单按钮和更多按钮
const menuBtn = document.querySelector(".burger");
const moreBtn = document.querySelector(".more");

// 获取更多菜单
const moreMenu = document.querySelector(".more-menu");

// 点击菜单按钮时显示/隐藏更多菜单
menuBtn.addEventListener("click", () => {
  moreMenu.classList.toggle("show");
});

// 根据设备类型和方向显示/隐藏菜单按钮和更多按钮
function checkDevice() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isLandscape = width > height;
  
  if (isMobile) {
    menuBtn.style.display = "flex";
    moreBtn.style.display = "flex";
    if (isLandscape) {
      moreMenu.classList.remove("show");
    } else {
      moreMenu.classList.add("show");
    }
  } else if (isTablet) {
    menuBtn.style.display = "none";
    moreBtn.style.display = "flex";
    moreMenu.classList.add("show");
  } else {
    menuBtn.style.display = "none";
    moreBtn.style.display = "none";
    moreMenu.classList.remove("show");
  }
}

// 页面加载时检查设备类型和方向
checkDevice();

// 监听窗口大小变化，重新检查设备类型和方向
window.addEventListener("resize", checkDevice);