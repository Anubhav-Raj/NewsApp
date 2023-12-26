// components/ArticleModal.js
import React, { useRef, useEffect } from "react";

const ArticleModal = ({ isOpen, onClose, article }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg max-w-2xl overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4    rounded-2xl text-white-600 hover:text-gray-800 cursor-pointer"
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <img
          src={
            article.urlToImage ||
            "https://api.slingacademy.com/public/sample-photos/1.jpeg"
          }
          alt={article.title}
          className="w-full h-64 object-cover mb-4"
        />
        <p className="text-gray-700">
          {article.description}
          {article.content}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 block"
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default ArticleModal;
