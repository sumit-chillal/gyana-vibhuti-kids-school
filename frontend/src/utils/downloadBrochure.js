import { jsPDF } from "jspdf";
import { SCHOOL_INFO } from "@/constants";

export const downloadBrochureAsPdf = async () => {
  try {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = SCHOOL_INFO.brochureImage;

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const imgData = canvas.toDataURL("image/jpeg", 0.95);

    // A4 size in mm
    const pdfWidth = 210;
    const pdfHeight = 297;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const pageRatio = pdfWidth / pdfHeight;

    let renderWidth, renderHeight, offsetX, offsetY;

    if (imgRatio > pageRatio) {
      renderWidth = pdfWidth;
      renderHeight = pdfWidth / imgRatio;
      offsetX = 0;
      offsetY = (pdfHeight - renderHeight) / 2;
    } else {
      renderHeight = pdfHeight;
      renderWidth = pdfHeight * imgRatio;
      offsetX = (pdfWidth - renderWidth) / 2;
      offsetY = 0;
    }

    const pdf = new jsPDF("portrait", "mm", "a4");
    pdf.addImage(imgData, "JPEG", offsetX, offsetY, renderWidth, renderHeight);
    pdf.save("Gyana-Vibhuti-Kids-School-Brochure.pdf");
  } catch (err) {
    // Fallback: open image in new tab
    window.open(SCHOOL_INFO.brochureImage, "_blank");
  }
};
