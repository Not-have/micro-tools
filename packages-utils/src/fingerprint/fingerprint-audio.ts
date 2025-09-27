/**
 * 🫆 获取音频指纹
 * @returns Promise<string> 音频指纹数据
 */
export default async function fingerprintAudio(): Promise<string> {
  try {
    const AudioCtx = window.OfflineAudioContext || (window as typeof window & { webkitOfflineAudioContext?: typeof OfflineAudioContext }).webkitOfflineAudioContext;

    if (!AudioCtx) {
      return "";
    }

    const ctx = new AudioCtx(1, 44_100, 44_100);

    const oscillator = ctx.createOscillator();

    const compressor = ctx.createDynamicsCompressor();

    // 配置振荡器
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(1000, ctx.currentTime);

    // 连接音频节点
    // 固定压缩器参数
    compressor.threshold.setValueAtTime(-50, ctx.currentTime);
    compressor.knee.setValueAtTime(40, ctx.currentTime);
    compressor.ratio.setValueAtTime(12, ctx.currentTime);
    compressor.attack.setValueAtTime(0, ctx.currentTime);
    compressor.release.setValueAtTime(0.25, ctx.currentTime);

    oscillator.connect(compressor);
    compressor.connect(ctx.destination);

    // 开始渲染
    oscillator.start(0);
    const buffer = await ctx.startRendering();

    // 获取前100个样本数据
    const channelData = buffer.getChannelData(0).slice(0, 100);

    const samples = [];

    for (let i = 0; i < 100; i += 10) {
      samples.push(channelData[i]);
    }

    return samples.join(",");
  } catch (error) {
    console.warn("Audio 指纹失败:", error);

    return "";
  }
}
