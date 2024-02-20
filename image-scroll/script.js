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
  };

  window.onmousemove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * 100;

    track.style.transform = `translate(${percentage}%, -50%)`;
  };
});
