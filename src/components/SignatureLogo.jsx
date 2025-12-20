import signatureSvg from "../assets/SignatureLogo.svg?raw";

export default function SignatureLogo({ className = "" }) {
  return (
    <span
      className={className}
      aria-hidden="true"
      // Inline the SVG so it can inherit currentColor
      dangerouslySetInnerHTML={{ __html: signatureSvg }}
    />
  );
}