/* eslint-disable no-console */
import {
  EEntry,
  EOutDir
} from "../const/index.js";
import {
  executeFileCopy
} from "../utils/index.js";

/**
 * 执行复制 Markdown 文件的操作
 */
async function copyMarkdownFiles() {
  console.log("开始复制 Markdown 文件...");

  // 定义需要复制的文件配置
  const copyConfigs = [
    {
      outDir: EOutDir.DEV,
      entry: EEntry.DEV
    },
    {
      outDir: EOutDir.UTILS,
      entry: EEntry.UTILS
    },
    {
      outDir: EOutDir.CSS,
      entry: EEntry.CSS
    },
    {
      outDir: EOutDir.COMPONENTS,
      entry: EEntry.COMPONENTS
    },
    {
      outDir: EOutDir.TS,
      entry: [EEntry.TYPES, EEntry.ENUM]
    },
    {
      outDir: EOutDir.VITE,
      entry: EEntry.VITE
    },
    {
      outDir: EOutDir.CONF,
      entry: EEntry.CONF
    },
    {
      outDir: EOutDir.REACT,
      entry: EEntry.REACT
    },
    {
      outDir: EOutDir.VUE,
      entry: EEntry.VUE
    },
    {
      outDir: EOutDir.FETCH,
      entry: EEntry.FETCH
    }
  ];

  // 为每个配置执行复制操作
  for (const config of copyConfigs) {
    try {
      executeFileCopy({
        outDir: config.outDir,
        entry: config.entry
      });
      console.log(`成功复制到 ${config.outDir}`);
    } catch (error) {
      console.error(`复制到 ${config.outDir} 失败:`, error);
    }
  }

  console.log("所有 Markdown 文件复制完成！");
}

// 执行脚本
copyMarkdownFiles().
    then(() => {
      console.log("脚本执行完成");

    }).
    catch(error => {
      console.error("脚本执行失败:", error);

      throw error;
    });
