document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("image-track");
  console.log(track);

  if (!track) {
    console.error("Element with id 'image-track' not found.");
    return;
  }

  window.onmousedown = (e) => {
    track.dataset.mouseDownAt = e.clientX;
  };

  window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  window.onmousemove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentage =
      parseFloat(track.dataset.prevPercentage) + percentage;

    track.dataset.percentage = nextPercentage;
    track.style.transform = `translate(${nextPercentage}%, -50%)`;
  };
});
