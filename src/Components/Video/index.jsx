import React from "react";

export default function Video({ src }) {
  return (
    <div>
      <iframe
        src={src}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-md w-full h-[720px]"
      ></iframe>
    </div>
  );
}
