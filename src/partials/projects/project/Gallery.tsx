'use client';

import Image from 'next/image';

import { Picture } from '@/app/projects/[projectId]/page';
import { useState } from 'react';
import { TbX } from 'react-icons/tb';

const GalleryModal = ({ picture, closeModal }: { picture: Picture; closeModal: () => void }) => {
	return (
		<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-xl z-[100]">
			<div className="relative h-3/4 w-3/4">
				<div className="absolute top-0 right-0 p-4">
					<button onClick={closeModal} className="absolute bg-bg-color rounded-full p-2 hover:bg-border transition-colors">
						<TbX size={32} />
					</button>
				</div>
				<div className="h-full w-full flex items-center justify-center">
					<Image
						src={picture.url}
						alt={'снимка на проект'}
						fill
						className="h-full w-full object-contain rounded-xl"
					/>
				</div>
			</div>
		</div>
	);
};

const Gallery = ({ name, pictures }: { name: string; pictures: Picture[] }) => {
	const [modal, setModal] = useState(false);
	const [modalPicture, setModalPicture] = useState<Picture | null>(null);

	const openModal = (picture: Picture) => {
		setModal(true);
		setModalPicture(picture);
	};

	const closeModal = () => {
		setModal(false);
		setModalPicture(null);
	};

	return (
		<>
			<div className="max-w-screen-lg w-full relative h-64 flex flex-col bg-bg-color rounded-xl border-2 border-border">
				<div className="h-full">
					<div className="h-full shrink-0 flex flex-col gap-4">
						<div className="h-full flex overflow-x-auto p-4 gap-4 items-center justify-start">
							{pictures?.map((picture, index) => (
								<div
									key={picture.url}
									className="h-full shrink-0 overflow-hidden !aspect-square rounded-xl border-2 border-border"
								>
									<Image
										src={picture.url}
										alt={`снимка ${index + 1} от проект ${name}`}
										width={512}
										height={512}
										onClick={() => openModal(picture)}
										className="h-full shrink-0 !aspect-square object-cover hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			{modal && modalPicture && <GalleryModal picture={modalPicture} closeModal={closeModal} />}
		</>
	);
};

export default Gallery;
