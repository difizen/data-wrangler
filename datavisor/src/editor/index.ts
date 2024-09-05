import {
  S2DataConfig,
  S2Event,
  S2Options,
  TableSheet,
  ThemeName,
} from "@antv/s2";
import { ParseResult } from "../csv-parser";
import { debounce } from "lodash";
import { customTheme } from "./theme";

interface S2Data extends ParseResult {
  theme?: string;
}

window.addEventListener("message", (event) => {
  const message = event.data; // The json data that the extension sent
  if (message.type === "update") {
    const text = message.text;
    try {
      const data = JSON.parse(text);
      handleData(data);
    } catch (error) {}
  }
});

const handleData = (data: S2Data) => {
  const container = document.getElementById("container");
  if (!container) {
    return;
  }
  const s2DataConfig: S2DataConfig = {
    fields: {
      columns: data.columns,
    },
    data: data.data,
  };

  const s2Options: S2Options = {
    width: 600,
    height: 480,
  };

  const s2 = new TableSheet(container, s2DataConfig, s2Options);

  if (data.theme) {
    s2.setTheme(customTheme);
  }
  s2.render();

  const debounceRender = debounce(async (width, height) => {
    s2.changeSheetSize(width, height);
    await s2.render(false);
  }, 200);

  const resizeObserver = new ResizeObserver(([entry] = []) => {
    const [size] = entry.borderBoxSize || [];

    debounceRender(size.inlineSize, size.blockSize);
  });

  // 通过监听 document.body 来实现监听窗口大小变化
  resizeObserver.observe(document.body);

  // 别忘了表格销毁时取消监听
  s2.on(S2Event.LAYOUT_DESTROY, () => {
    resizeObserver.disconnect();
  });
};
