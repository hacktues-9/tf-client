/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';

const EMPTY_CALC = {
	bgl: 0,
	math: 0,
	math7: 2,
	phys7: 2,
};

const EMPTY_ERR = {
	bgl: '',
	math: '',
	math7: '',
	phys7: '',
};

const CalculatorField = ({ name, label, min, max, value, error, onChange }: any) => {
	return (
		<div>
			<label htmlFor={name} className="mb-2 block text-base font-medium text-white">
				{label}
			</label>
			<input
				type="number"
				id={name}
				name={name}
				className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input appearance-none"
				min={min}
				max={max}
				value={value}
				onChange={onChange}
			/>
			{error && <p>{error}</p>}
		</div>
	);
};

const Calculator = () => {
	const [result, setResult] = useState(0);
	const [calculator, setCalculator] = useState<{
		bgl: any;
		math: any;
		math7: any;
		phys7: any;
	}>(EMPTY_CALC);
	const [errorCalculator, setErrorCalculator] = useState(EMPTY_ERR);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCalculator({ ...calculator, [e.target.name]: e.target.value === '' ? '' : parseFloat(e.target.value) });
	};

	useEffect(() => {
		if (calculator.bgl === '' || calculator.math === '' || calculator.math7 === '' || calculator.phys7 === '')
			return;

		let errors = EMPTY_ERR;

		errors.bgl = calculator.bgl < 0 || calculator.bgl > 100 ? 'НВО по БЕЛ трябва да е между 0 и 100т.' : '';

		errors.math =
			calculator.math < 0 || calculator.math > 100 ? 'НВО по Математика трябва да е между 0 и 100т.' : '';

		errors.math7 =
			calculator.math7 < 2 || calculator.math7 > 6
				? 'Оценка по Математика за 7 клас трябва да е между 2 и 6.'
				: '';

		errors.phys7 =
			calculator.phys7 < 2 || calculator.phys7 > 6 ? 'Оценка по Физика за 7 клас трябва да е между 2 и 6.' : '';

		setErrorCalculator(errors);
		if (errors.bgl || errors.math || errors.math7 || errors.phys7) return;

		const result = calculator.bgl + calculator.math * 3 + (calculator.math7 - 1) * 10 + (calculator.phys7 - 1) * 10;
		setResult(result);
	}, [calculator]);

	return (
		<div className="w-full md:w-full lg:w-96 xl:w-[38rem] shrink-0 relative z-10 overflow-hidden rounded-xl bg-bg-color p-8 sm:p-10 flex flex-col gap-5 border border-stroke">
			<div className="w-fit flex flex-col gap-1">
				<h2 className="bg-gradient text-transparent font-black sm:text-5xl text-3xl bg-clip-text">
					Изчисли си БАЛ-а
				</h2>
				<p className="opacity-70 text-sm">
					Друг начин, по който може да си изчислиш бала, е да ползваш този калкулатор
				</p>
			</div>
			<div className="w-full flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-around gap-4">
				<form className="w-full flex flex-col gap-5">
					<CalculatorField
						name="bgl"
						label="НВО БЕЛ"
						min={0}
						max={100}
						value={calculator.bgl}
						error={errorCalculator.bgl}
						onChange={handleChange}
					/>

					<CalculatorField
						name="math"
						label="НВО Математика"
						min={0}
						max={100}
						value={calculator.math}
						error={errorCalculator.math}
						onChange={handleChange}
					/>

					<CalculatorField
						name="math7"
						label="Оценка Математика"
						min={2}
						max={6}
						value={calculator.math7}
						error={errorCalculator.math7}
						onChange={handleChange}
					/>

					<CalculatorField
						name="phys7"
						label="Оценка Физика"
						min={2}
						max={6}
						value={calculator.phys7}
						error={errorCalculator.phys7}
						onChange={handleChange}
					/>
				</form>
				{result !== 0 && (
					<div className="w-48 h-48 p-8 bg-[#353444] border border-stroke aspect-square rounded-full flex items-center justify-center">
						<p className="bg-gradient text-transparent font-black text-5xl bg-clip-text">
							{result.toFixed(2)}
						</p>
					</div>
				)}
				{!result && result === 0 && (
					<div className="w-48 h-48 p-8 bg-[#353444] border border-stroke aspect-square rounded-full flex items-center justify-center" />
				)}
			</div>
		</div>
	);
};

const ApplyPage = () => (
	<div className="max-w-screen-2xl min-h-screen m-auto pt-12">
		<div className="">
			<div className="p-8 md:p-12">
				<div className="p-8 sm:p-10 rounded-xl bg-bg-color border border-stroke flex flex-col gap-4">
					<h2 className="bg-gradient text-transparent font-black text-3xl sm:text-5xl bg-clip-text">
						Защо ТУЕС?
					</h2>
					<p className="text-justify">
						Технологично училище „Електронни системи“ към Технически Университет - София е специализирано
						технологично училище от национално значение, което подготвя бъдещите лидери на ИТ сектора в
						България и отвъд.
					</p>
					<div className="relative w-full flex flex-col lg:flex-row gap-8 items-start">
						<div className="w-full flex flex-col gap-4">
							<p className="text-lg">Кое прави ТУЕС уникално училище?</p>
							<ul className="w-full flex flex-col gap-4">
								<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
									Специализиран учебен план
								</li>
								<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
									Училище интегрирано във ВУЗ
								</li>
								<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
									Преподават завършили ТУЕС
								</li>
								<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
									Тясна връзка с ИТ бранша
								</li>
							</ul>
						</div>
						<div className="w-full lg:w-3/5 xl:w-2/5 shrink-0 rounded-xl overflow-hidden border border-stroke">
							<img src="/assets/apply/whytues.jpg" alt="Защо ТУЕС?" />
						</div>
					</div>
					<i>
						Научете повече за приема в ТУЕС и образователния модел на училището{' '}
						<Link href="https://tues.bg/priem/red-i-uslovija-za-priem">
							<u>тук.</u>
						</Link>
					</i>
				</div>
			</div>
			<div className="px-8 pb-8 md:px-12 md:pb-12">
				<div className="flex flex-col items-stretch lg:flex-row gap-8">
					<div className="p-8 sm:p-10 rounded-xl bg-bg-color border border-stroke flex flex-col gap-4">
						<h2 className="bg-gradient text-transparent font-black text-3xl sm:text-5xl bg-clip-text">
							Как да кандидатствам?
						</h2>
						<p className="text-justify">
							За учебната 2022/2023 година в ТУЕС към ТУ-София ще се приемат ученици по следните
							специалности:
						</p>
						<ul className="flex flex-col gap-4">
							<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
								Системно програмиране с код 4810201 – 3 паралелки, всяка по 26 ученици
							</li>
							<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
								Компютърни мрежи с код 5230502 – 1 паралелка от 26 ученици
							</li>
						</ul>
						<p>Балът се образува от сбора на:</p>
						<ul className="flex flex-col gap-4">
							<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
								резултата по <b>български език и литература от НВО</b>
							</li>
							<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
								3 пъти резултата по <b>математика от НВО</b>
							</li>
							<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
								оценката по <b>математика</b> от свидетелството за завършен 7. клас
							</li>
							<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
								оценката по <b>физика</b> от свидетелството за завършен 7. клас
							</li>
						</ul>
						<i>
							Научете повече за приема в ТУЕС{' '}
							<Link href="https://tues.bg/priem/red-i-uslovija-za-priem">
								<u>тук.</u>
							</Link>
						</i>
					</div>
					<Calculator />
				</div>
			</div>
		</div>
	</div>
);

export default ApplyPage;
