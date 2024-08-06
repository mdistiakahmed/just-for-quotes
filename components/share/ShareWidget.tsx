"use client";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const ShareWidget = () => {
  const pathname = usePathname();
  const [currentPath] = useState(pathname);

  const handleFacebookShare = () => {
    console.log(currentPath);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPath)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const handleTwitterShare = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentPath)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const handleLinkedInShare = () => {
    const shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentPath)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex justify-end gap-4 ">
      <FaFacebook
        style={{ color: "#4267B2" }}
        className="cursor-pointer"
        onClick={handleFacebookShare}
      />
      <FaXTwitter className="cursor-pointer" onClick={handleTwitterShare} />
      <FaLinkedin
        style={{ color: "#0077B5" }}
        className="cursor-pointer"
        onClick={handleLinkedInShare}
      />
    </div>
  );
};

export default ShareWidget;
