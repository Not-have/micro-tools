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
    oscillator.frequency.setValueAtTime(10_000, ctx.currentTime);

    // 连接音频节点
    oscillator.connect(compressor);
    compressor.connect(ctx.destination);

    // 开始渲染
    oscillator.start(0);
    const buffer = await ctx.startRendering();

    // 获取前100个样本数据
    const channelData = buffer.getChannelData(0).slice(0, 100);

    return channelData.join(",");
  } catch (error) {
    console.warn("Audio fingerprint failed:", error);

    return "";
  }
}
