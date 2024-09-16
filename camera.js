const cameraWidth = 300;
const cameraHeight = 400;

const cameraInitSmartphoneSupport = () => {
    const video = document.getElementById("camera");

    //スマホからの閲覧か
    const isMobile = navigator.userAgent.match(/iPhone|Android/);

    var media = navigator.mediaDevices.getUserMedia({
        video: true;
        audio: false;
    });

    media.then((stream) => {
        video.srcObject = stream;
    });

}
