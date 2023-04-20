'use client';

import { useVoteContext, Vote } from '@/context/vote';
import { useEffect, useState } from 'react';

import { TbChevronDown, TbChevronUp, TbX } from 'react-icons/tb';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CATEGORY } from '@/constants/projects/CATEGORY';

const VotingModal = ({ closeModal }: { closeModal: () => void }) => {
	const [info, setInfo] = useState({ name: '', email: '' });
	const [showLast, setShowLast] = useState(false);
	const [showResult, setShowResult] = useState(false);

	const { addInfo, validateGivenInfo, getErrors, submitVote } = useVoteContext();
	const { emailError, nameError, votingError } = getErrors();

	const handleInfo = () => {
		if (validateGivenInfo(info.name, info.email)) {
			addInfo(info.name, info.email);
			setShowLast(true);
		}
	};

	const handleVote = () => {
		if (submitVote()) {
			setShowResult(true);
			setShowLast(false);
		}
	};

	const handleClose = () => {
		setShowLast(false);
		setShowResult(false);
		closeModal();
	};

	return (
		<div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			{!showLast && !showResult && (
				<div className="w-full h-full flex items-center justify-center">
					<div className="w-full max-w-2xl bg-bg-color border border-border rounded-lg p-4 z-50">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold">Още малко остава</h2>
							<button
								onClick={closeModal}
								className="p-2 opacity-75 hover:opacity-100 duration-300 transition-all"
							>
								<TbX size={24} />
							</button>
						</div>
						<div className="w-full flex flex-col gap-4 mt-4">
							<p className="-mt-2 opacity-70 text-sm">
								Моля, попълнете име и имейл, за да можем да ви изпратим линк за потвържение за
								гласуването.
							</p>
							<div className="w-full flex flex-col gap-2">
								<label htmlFor="name" className="text-sm font-medium">
									Име
								</label>
								<input
									type="text"
									id="name"
									className={`w-full bg-bg-color border ${
										nameError ? 'border-error' : 'border-border'
									} rounded-lg p-2`}
									value={info.name}
									placeholder="Иван Иванов"
									onChange={(e) => setInfo({ ...info, name: e.target.value })}
								/>
								{votingError || (nameError && <p className="text-sm text-error">Моля, въведете име</p>)}
							</div>
							<div className="w-full flex flex-col gap-2">
								<label htmlFor="email" className="text-sm font-medium">
									Имейл
								</label>
								<input
									type="email"
									id="email"
									className={`w-full bg-bg-color border ${
										emailError ? 'border-error' : 'border-border'
									} rounded-lg p-2`}
									value={info.email}
									placeholder="ivanivanov@gmail.com"
									onChange={(e) => setInfo({ ...info, email: e.target.value })}
								/>
								{votingError ||
									(emailError && <p className="text-sm  text-error">Моля, въведете валиден имейл</p>)}
							</div>
						</div>
						<button
							className="w-full mt-4 bg-primary-color text-white bg-border border border-stroke hover:bg-primary font-bold py-2 rounded-lg duration-300 transition-all"
							onClick={handleInfo}
						>
							Потвърди
						</button>
					</div>
				</div>
			)}
			{showLast && (
				<div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="w-full h-full flex items-center justify-center">
						<div className="w-full max-w-2xl bg-bg-color border border-border rounded-lg p-4 z-50">
							<p className="text-error">
								Сигурни ли сте, че искате да използвате{' '}
								<span className="font-bold text-error underline italic">{info.email}</span>, за да
								получите линк за потвърждение?
							</p>
							<div className="w-full flex items-center justify-between mt-4 gap-4">
								<button
									className="w-1/2 bg-primary-color text-white bg-border border border-stroke hover:bg-primary font-bold py-2 rounded-lg duration-300 transition-all"
									onClick={handleVote}
								>
									Гласувай
								</button>
								<button
									className="w-1/2 bg-bg-color border border-border rounded-lg p-2 duration-300 transition-all"
									onClick={() => setShowLast(false)}
								>
									Отказ
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
			{showResult && (
				<div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="w-full h-full flex items-center justify-center">
						<div className="w-full max-w-2xl bg-bg-color border border-border rounded-lg p-4 z-50">
							{votingError ? (
								<p className="text-error">
									Възникна грешка при гласуването. Моля, опитайте отново.
									<br />
									{votingError}
								</p>
							) : (
								<p className="text-success">
									Гласувахте успешно! Моля, проверете имейла си за линк за потвърждение.
								</p>
							)}
							<button
								className="w-full mt-4 bg-primary-color text-white bg-border border border-stroke hover:bg-primary font-bold py-2 rounded-lg duration-300 transition-all"
								onClick={() => handleClose()}
							>
								ОК
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const VotingCategory = ({ category, cat, error }: { category: Vote | null; cat: string; error: boolean | null }) => {
	const { removeVote } = useVoteContext();

	if (category === null) {
		return (
			<div className={`w-full flex items-center justify-between py-2 ${error ? '!text-error' : ''}`}>
				<div className="flex items-center gap-4">
					<div className="w-12 h-12 bg-bg-color border border-border rounded-full flex items-center justify-center" />
					<p className={`font-bold text-md line-clamp-1 ${error ? '!text-error' : ''}`}>{CATEGORY[cat]}</p>
				</div>
				<Link
					className="p-2 text-sm font-medium opacity-75 hover:opacity-100 duration-300 transition-all"
					href={`/projects/category/${cat}`}
				>
					{'<избери>'}
				</Link>
			</div>
		);
	}

	return (
		<div className={`w-full flex items-center justify-between py-2 ${error ? '!text-error' : ''}`}>
			<div className="flex items-center gap-4">
				<div className="shrink-0 break-words relative aspect-square w-12 h-12 bg-bg-color border border-border rounded-full flex items-center justify-center overflow-hidden">
					<img
						src={category.image}
						alt={category.name}
						className="aspect-square w-full h-full object-cover"
					/>
				</div>
				<Link
					href={`/projects/${category.id}`}
					title={category.name}
					className={`font-bold text-md line-clamp-1 ${error ? '!text-error' : ''}`}
				>
					{category.name}
				</Link>
			</div>
			<button
				className="p-2 opacity-75 hover:opacity-100 duration-300 transition-all"
				onClick={() => removeVote(category.category as string)}
			>
				<TbX size={24} />
			</button>
		</div>
	);
};

const VotingOverlay = ({ showModal }: { showModal: () => void }) => {
	const [minimized, setMinimized] = useState(false);
	const { getVotes, getErrors } = useVoteContext();

	const { software, embedded, battlebot, networks } = getVotes();
	const { softwareError, embeddedError, battlebotError, networksError } = getErrors();

	return (
		<motion.div className="w-screen fixed z-10 bottom-5 right-0" animate={minimized}>
			<div className="relative container">
				<div className="w-full sm:w-fit absolute bottom-0 left-0 flex items-center justify-start">
					<div
						className={`w-full mx-4 sm:w-96 ${
							minimized ? 'h-16 flex items-center' : 'h-[26rem] pt-4'
						} bg-bg-color border border-border p-2 rounded-xl bg-opacity-75  backdrop-blur-md duration-300 transition-all drop-shadow-lg`}
					>
						<div className={`relative ${minimized ? 'h-fit w-full shrink-0' : 'h-16'}`}>
							<div className="relative w-full px-4 flex items-center justify-between">
								<p className="font-bold text-2xl">
									Твоят избор
									<span className="ml-2 text-sm opacity-50">
										{
											Object.values({
												software,
												embedded,
												battlebot,
												networks,
											}).filter((v) => v !== null).length
										}{' '}
										/ 4
									</span>
								</p>
								<button
									className="p-2 bg-bg-color border border-border rounded-full hover:bg-border hover:border-stroke bg-opacity-75 duration-300 transition-all"
									onClick={() => setMinimized(!minimized)}
								>
									{!minimized ? (
										<TbChevronDown size={24} className="transition-all duration-300" />
									) : (
										<TbChevronUp size={24} className="transition-all duration-300" />
									)}
								</button>
							</div>
						</div>
						<div
							className={`w-full px-4 flex flex-col gap-4 items-center justify-center ${
								minimized ? 'hidden' : 'block'
							}`}
						>
							<div className="w-full flex flex-col divide-y divide-stroke">
								<VotingCategory category={software} cat='software' error={softwareError} />
								<VotingCategory category={embedded} cat="embedded" error={embeddedError} />
								<VotingCategory category={battlebot} cat="battlebot" error={battlebotError} />
								<VotingCategory category={networks} cat="networks" error={networksError} />
							</div>
							<button
								className="text-lg font-bold bg-primary px-6 py-2 border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:border-stroke bg-opacity-75 duration-300 transition-all"
								onClick={showModal}
							>
								Гласувай
							</button>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

const VotingLayout = () => {
	const { anyVotes, validateVote } = useVoteContext();

	const [showOverlay, setShowOverlay] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const continueVoting = () => {
		if (!validateVote()) return;

		setShowOverlay(false);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);

		if (anyVotes()) {
			setShowOverlay(true);
		}
	};

	useEffect(() => {
		if (anyVotes()) {
			setShowOverlay(true);
		}
	}, [anyVotes]);

	return (
		<>
			{showOverlay && !showModal && <VotingOverlay showModal={continueVoting} />}
			{showModal && <VotingModal closeModal={closeModal} />}
		</>
	);
};

export default VotingLayout;
