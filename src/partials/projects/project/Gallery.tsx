'use client';

import Image from 'next/image';

import { Picture } from '@/app/projects/[projectId]/page';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TbChevronLeft, TbChevronRight, TbX } from 'react-icons/tb';

const GalleryModal = ({
	pictures,
	startingIndex,
	closeModal,
}: {
	pictures: Picture[];
	startingIndex: number;
	closeModal: () => void;
}) => {
	const [index, setIndex] = useState(startingIndex);
	const modalRef = useRef<HTMLDivElement>(null);

	const next = useCallback(() => {
		if (index === pictures.length - 1) {
			setIndex(0);
		} else {
			setIndex((prevIndex: number) => prevIndex + 1);
		}
	}, [index, pictures.length]);

	const prev = useCallback(() => {
		if (index === 0) {
			setIndex(pictures.length - 1);
		} else {
			setIndex((prevIndex: number) => prevIndex - 1);
		}
	}, [index, pictures.length]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeModal();
			}

			if (e.key === 'ArrowRight') {
				next();
			}

			if (e.key === 'ArrowLeft') {
				prev();
			}

			if (e.key === ' ') {
				e.preventDefault();
			}

			if (e.key === 'Enter') {
				e.preventDefault();
			}

			if (e.key === 'Tab') {
				e.preventDefault();
			}

			if (e.key === 'Backspace') {
				e.preventDefault();
			}
		};

		const handleWheel = (e: WheelEvent) => {
			e.preventDefault();

			setTimeout(() => {
				if (e.deltaY > 0) {
					next();
				} else {
					prev();
				}
			}, 500);
		};

		const handleOutsideClick = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				closeModal();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('wheel', handleWheel);
		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('wheel', handleWheel);
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [closeModal, modalRef, next, prev]);

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1001] flex items-center justify-center backdrop-blur-md">
			<div ref={modalRef} className="relative h-full w-full max-w-screen-lg">
				<div className="absolute top-12 left-0 p-4 z-[1001]">
					<button
						className="flex items-center gap-2 px-4 py-2 bg-bg-color rounded-xl border-2 border-border hover:bg-bg-color-hover"
						onClick={closeModal}
					>
						<TbX className="h-6 w-6" />
						<span className="text-sm">Затвори</span>
					</button>
				</div>
				<div className="absolute top-1/2 left-0 p-4 !pl-10 z-[1001]">
					<button
						className="flex items-center gap-2 px-4 py-2 bg-bg-color rounded-xl border-2 border-border hover:bg-border hover:border-stroke transition-all duration-300 ease-in-out"
						onClick={prev}
					>
						<span className="text-sm">
							<TbChevronLeft size={32} />
						</span>
					</button>
				</div>
				<div className="absolute top-1/2 right-0 p-4 pr-10 z-[1001]">
					<button
						className="flex items-center gap-2 px-4 py-2 bg-bg-color rounded-xl border-2 border-border hover:bg-border hover:border-stroke transition-all duration-300 ease-in-out"
						onClick={next}
					>
						<span className="text-sm">
							<TbChevronRight size={32} />
						</span>
					</button>
				</div>
				<div className="h-full">
					<div className="h-full flex flex-col gap-4">
						<div className="h-full flex p-4 gap-4 items-center justify-center">
							<div className="h-full max-h-screen w-full shrink-0 overflow-hidden object-contain flex items-center justify-center">
								<img
									src={pictures[index]?.url}
									key={pictures[index]?.url}
									alt={`снимка ${index + 1} на проект`}
									className=" object-contain h-full rounded-xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Gallery = ({ name, pictures }: { name: string; pictures: Picture[] }) => {
	const [modal, setModal] = useState(false);
	const [index, setIndex] = useState(0);

	const openModal = (picture: Picture) => {
		setIndex(pictures.indexOf(picture));
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
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
			{modal && <GalleryModal pictures={pictures} startingIndex={index} closeModal={closeModal} />}
		</>
	);
};

export default Gallery;
