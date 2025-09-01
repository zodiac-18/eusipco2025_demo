// ヘルパー関数: 指定IDの要素を取得
function $(id) {
    return document.getElementById(id);
  }
  
  // OKボタン押下時に音声ファイルのパスを切り替え
  function changeAudioSources() {
    // 選択された音声ID（例：1st_color_seg1, BC_seg20 など）
    const audioId = $("audioIdSelect").value;
  
    // 自然音声（F1.00のみ）
    $("natural_f1.0").src = `./wav/${audioId}/${audioId}_f1.00_Natural.wav`;
  
    // SiFi-GAN
    $("sifigan_f1.0").src = `./wav/${audioId}/${audioId}_f1.00_SiFiGAN.wav`;
    $("sifigan_f0.5").src = `./wav/${audioId}/${audioId}_f0.50_SiFiGAN.wav`;
    $("sifigan_f2.0").src = `./wav/${audioId}/${audioId}_f2.00_SiFiGAN.wav`;
  
    // VAE-SiFiGAN
    $("vae_sifigan_f1.0").src = `./wav/${audioId}/${audioId}_f1.00_VAE-SiFiGAN.wav`;
    $("vae_sifigan_f0.5").src = `./wav/${audioId}/${audioId}_f0.50_VAE-SiFiGAN.wav`;
    $("vae_sifigan_f2.0").src = `./wav/${audioId}/${audioId}_f2.00_VAE-SiFiGAN.wav`;
  
    // w/o Prior
    $("woprior_f1.0").src = `./wav/${audioId}/${audioId}_f1.00_wo_prior.wav`;
    $("woprior_f0.5").src = `./wav/${audioId}/${audioId}_f0.50_wo_prior.wav`;
    $("woprior_f2.0").src = `./wav/${audioId}/${audioId}_f2.00_wo_prior.wav`;
  }
  
  // ページ読み込み後に初期化
  window.addEventListener("DOMContentLoaded", () => {
    $("changeBtn").addEventListener("click", changeAudioSources);
    changeAudioSources();
  });
  