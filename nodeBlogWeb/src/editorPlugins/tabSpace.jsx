import { useEffect } from "react";
const TabSpace = (props) => {
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown); // 添加全局事件
    return () => {
      window.removeEventListener("keydown", onKeyDown); // 销毁
    };
  });
  const onKeyDown = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      handleClick();
    }
  };
  const handleClick = () => {
    props.editor.insertText("&emsp;&emsp;");
  };

  return <span></span>;
};
TabSpace.align = "left";
TabSpace.pluginName = "tabSpace";
export default TabSpace;