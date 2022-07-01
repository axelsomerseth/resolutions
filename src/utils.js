const timeAgo = (d) => {
  const diff = (new Date() - d) / 1000;
  if (diff < 60) {
    const v = Math.round(diff);
    return v + " second" + (v === 1 ? "" : "s") + " ago";
  } else if (diff < 60 * 60) {
    const v = Math.round(diff / 60);
    return v + " minute" + (v === 1 ? "" : "s") + " ago";
  } else if (diff < 60 * 60 * 24) {
    const v = Math.round(diff / (60 * 60));
    return v + " hour" + (v === 1 ? "" : "s") + " ago";
  } else if (diff < 60 * 60 * 24 * 30.436875) {
    const v = Math.round(diff / (60 * 60 * 24));
    return v + " day" + (v === 1 ? "" : "s") + " ago";
  } else if (diff < 60 * 60 * 24 * 30.436875 * 12) {
    const v = Math.round(diff / (60 * 60 * 24 * 30.436875));
    return v + " month" + (v === 1 ? "" : "s") + " ago";
  }
  const v = Math.round(diff / (60 * 60 * 24 * 30.436875 * 12));
  return v + " year" + (v === 1 ? "" : "s") + " ago";
};

function hexToRGB(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

export { timeAgo, hexToRGB };
