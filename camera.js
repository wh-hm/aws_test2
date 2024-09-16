const cameraWidth = 300;
const cameraHeight = 400;

const cameraInitSmartphoneSupport = () => {
    const video = document.getElementById("camera");

    //スマホからの閲覧か
    const isMobile = navigator.userAgent.match(/iPhone|Android/);

    const cameraSetting = {
        audio: false,
        video: {
            //スマホの場合は縦横を逆に設定する
            width: isMobile ? cameraHeight : cameraWidth,
            height: isMobile ? cameraWidth : cameraHeight,
            facingMode: "environment",
        }
    }

    navigator.mediaDevices.getUserMedia(cameraSetting)
        .then((mediaStream) => {
            video.srcObject = mediaStream;
        })
        .catch((err) => {
            console.log(err.toString());
        });
}
