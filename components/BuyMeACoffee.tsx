"use client";

import {useEffect} from "react";

export default function BuyMeACoffee() {
  useEffect(() => {
    // 기본 버튼 컨테이너 생성
    const buttonContainer = document.createElement("div");
    buttonContainer.id = "bmc-wbtn";
    buttonContainer.style.cssText = `
      position: fixed;
      right: 18px;
      bottom: 18px;
      width: 64px;
      height: 64px;
      background-color: #f8c44c;
      border-radius: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,.15);
      z-index: 9999;
    `;

    // 커피 컵 이미지 추가
    const img = document.createElement("img");
    img.src = "https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg";
    img.alt = "Buy Me A Coffee";
    img.style.cssText = "height: 36px; width: 36px; margin: 0; padding: 0;";

    buttonContainer.appendChild(img);

    // iframe 컨테이너 생성
    const iframeContainer = document.createElement("div");
    iframeContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      background: rgba(0, 0, 0, 0);
      text-align: center;
      z-index: 999999;
      transition: all .25s ease;
    `;

    // iframe 생성
    const iframe = document.createElement("iframe");
    iframe.id = "bmc-iframe";
    iframe.allow = "payment";
    iframe.title = "Buy Me a Coffee";
    iframe.style.cssText = `
      position: fixed;
      right: 18px;
      bottom: 90px;
      width: 420px;
      height: 0;
      border: 0;
      border-radius: 10px;
      box-shadow: -6px 0px 30px rgba(13, 12, 34, 0.1);
      background: #fff;
      transition: all .25s ease;
      transform: scale(0);
      opacity: 0;
      z-index: 999999;
    `;

    // 클릭 이벤트 추가
    buttonContainer.onclick = () => {
      // iframe이 아직 로드되지 않았다면 src 설정
      if (!iframe.src) {
        iframe.src = `https://www.buymeacoffee.com/widget/page/materokattl?description=Support%20me%20on%20Buy%20me%20a%20coffee!&color=%23FEDD03`;
      }

      // iframe 표시
      iframeContainer.style.width = "100%";
      iframeContainer.style.height = "100%";
      iframe.style.height = `${window.innerHeight - 140}px`;
      iframe.style.transform = "scale(1)";
      iframe.style.opacity = "1";

      // 버튼 아이콘 변경
      img.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuMTEzMyAwTDggNi4xMTMzMUwxLjg4NjY5IDBMMCAxLjg4NjYzTDggOS44ODY2M0wxNiAxLjg4NjYzTDE0LjExMzMgMFoiIGZpbGw9IndoaXRlIi8+PC9zdmc+";
    };

    // iframe 컨테이너 클릭 시 닫기
    iframeContainer.onclick = () => {
      iframeContainer.style.width = "0";
      iframeContainer.style.height = "0";
      iframe.style.height = "0";
      iframe.style.opacity = "0";
      iframe.style.transform = "scale(0)";
      img.src = "https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg";
    };

    // iframe 이벤트 버블링 방지
    iframe.onclick = (e) => {
      e.stopPropagation();
    };

    // DOM에 요소 추가
    iframeContainer.appendChild(iframe);
    document.body.appendChild(iframeContainer);
    document.body.appendChild(buttonContainer);

    return () => {
      if (buttonContainer && buttonContainer.parentNode) {
        buttonContainer.parentNode.removeChild(buttonContainer);
      }
      if (iframeContainer && iframeContainer.parentNode) {
        iframeContainer.parentNode.removeChild(iframeContainer);
      }
    };
  }, []);

  return null;
}
