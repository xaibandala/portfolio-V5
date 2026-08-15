import React, { useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";

const ProjectCardModal = ({ image, title, description, demo, open, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleDemo = (e) => {
    if (!demo) {
      e.preventDefault();
      alert("Live demo is not available for this project");
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      className="fixed inset-0 m-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 shadow-2xl p-0 backdrop:bg-black/70 backdrop:backdrop-blur-sm animate-slide-up"
    >
      <div className="relative">
        <button
          type="button"
          className="absolute top-4 right-4 z-10 rounded-full p-2 bg-black/50 hover:bg-black/70 text-white/80 hover:text-white transition-colors duration-200"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {image && (
          <div className="relative overflow-hidden rounded-t-2xl aspect-video bg-slate-800">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="p-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <p className="text-gray-300/90 leading-relaxed mb-6">{description}</p>
          <div className="flex justify-end space-x-3">
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDemo}
              className="inline-flex items-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-medium text-white hover:opacity-90 transition-opacity duration-200"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="rounded-lg bg-white/5 px-4 py-2 font-medium text-white/90 hover:bg-white/10 transition-colors duration-200"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ProjectCardModal;