export default function ProductGallery({ gallery, selectedImage, onSelectImage }) {
  return (
    <div className="pd-gallery">
      <div className="pd-thumbnails" aria-label="Product images">
        {gallery.map((image, index) => (
          <button
            className={selectedImage.src === image.src ? "is-selected" : ""}
            key={image.src}
            type="button"
            onClick={() => onSelectImage(image)}
            aria-label={`Show product image ${index + 1}`}
            aria-pressed={selectedImage.src === image.src}
          >
            <img src={image.src} alt="" />
          </button>
        ))}
      </div>
      <div className="pd-main-image">
        <img src={selectedImage.src} alt={selectedImage.alt} />
      </div>
    </div>
  );
}
