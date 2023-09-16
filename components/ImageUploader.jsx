"use client"

import { useState } from 'react';
import '../app/globals.css';
import Spinner from './Spinner';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import Image from 'next/image';
import { BsFillClipboardFill } from 'react-icons/bs'

const ImageUpload = () => {

    const [loading, setLoading] = useState(false);
    const [wrongImageType, setWrongImageType] = useState(false);
    const [image, setImage] = useState(null);
    const [copied, setCopied] = useState(false)

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage.type === 'image/svg' || selectedImage.type === 'image/jpeg' || selectedImage.type === 'image/gif' || selectedImage.type === 'image/tiff' || selectedImage.type === 'image/png') {
            setWrongImageType(false);
            setLoading(true);
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(selectedImage);
            setLoading(false)

        } else {
            setWrongImageType(true)
        }
    };

    const preventDefault = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const selectedImage = e.dataTransfer.files[0];
        if (selectedImage.type === 'image/svg' || selectedImage.type === 'image/jpeg' || selectedImage.type === 'image/gif' || selectedImage.type === 'image/tiff' || selectedImage.type === 'image/png') {
            setWrongImageType(false);
            setLoading(true);
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(selectedImage);
            setLoading(false)

        } else {
            setWrongImageType(true)
        }

    };

    const handleCopyToClipBoard = () => {
        if (image) {
            navigator.clipboard.writeText(image).then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })   
        }
    }

  return (
    <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
                    <div onDrop={handleDrop}
                            onDragOver={preventDefault} className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
                        {loading && <Spinner />}
                        {wrongImageType && <p>Wrong image type</p>}
                        {!image ? (
                          <label>
                          <div className="flex flex-col items-center justify-center h-full">
                              <div className="flex flex-col justify-center items-center">
                                  <p className="font-bold text-2xl">
                                      <AiOutlineCloudUpload />
                                  </p>
                                  <p className="text-lg">
                                      Click to upload or Drag and Drop
                                  </p>
                              </div>
                              <p className="mt-32 text-gray-400">
                                  Use high-quailty JPG, SVG, PNG, GIF less than 20 MB
                              </p>
                          </div>
                          <input 
                            type='file'
                            name='upload-file'
                            onChange={handleImageChange}
                            className='w-0 h-0'              
                          />
                      </label>
                        ) : (
                          <div className="relative h-full" >
                            <img src={image} alt="uploaded-image" className="h-full w-full" />
                            <div className='flex justify-between'>
                                <button
                                    type="button"
                                    className="bottom-3 right-3 p-3 rounded-full text-lg cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                                    onClick={() => setImage(null)}
                                >
                                    <MdDelete />
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="bottom-10 right-3 p-3 rounded-full text-lg cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                                    onClick={handleCopyToClipBoard}
                                >
                                    <BsFillClipboardFill />
                                    {copied ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                          </div>
                        )}
                    </div>
                </div>
  );
}

export default ImageUpload;