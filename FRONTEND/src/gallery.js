import React, { useState } from 'react';
import './Gallery.css';

import image12 from './image12.jpg';
import image13 from './image13.jpg';
import image14 from './image14.jpg';
import image15 from './image15.jpg';
import image16 from './image16.jpg';

const images = [
    { id: 1, src: image12, alt: 'Gym Interior 1' },
    { id: 2, src: image13, alt: 'Gym Interior 2' },
    { id: 3, src: image14, alt: 'Gym Equipmentt' },
    { id: 4, src: image15, alt: 'Gym Equipmente' },
    { id: 5, src: image16, alt: 'Gym Equipments' },
    // Add more images as needed
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            <div className="gallery-grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className="gallery-item"
                        onClick={() => openModal(image)}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
