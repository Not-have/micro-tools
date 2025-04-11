import {
  executeFileCopy
} from "../utils";

interface IPluginCopyDevMd {
  name: string;
  transformIndexHtml: (html: string) => string;
}

interface IProps {

  /**
   * 输出目录
   */
  outDir: string;

  /**
   * 入口文件
   */
  entry: string | string[];
}

export default function pluginCopyMd({
  outDir,
  entry
}: IProps): IPluginCopyDevMd {
  return {
    name: "plugins-copy-md",
    transformIndexHtml(html: string): string {

      executeFileCopy({
        outDir,
        entry
      });

      return html;
    }
  };
}
