const ImageFrame = ({ image, imageSmall, imageWidth, alt }) => {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-6 rounded-[36px] bg-[#35b46e]/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-4xl border border-white/10">
        <img
          src={image}
          srcSet={imageSmall ? `${imageSmall} 900w, ${image} ${imageWidth}w` : undefined}
          sizes="(min-width: 1024px) 50vw, calc(100vw - 3rem)"
          alt={alt}
          width="490"
          height="328"
          loading="lazy"
          decoding="async"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 ring-1 ring-white/10" />
      </div>
    </div>
  );
};

export default ImageFrame;
