'use client';

import { useEffect, useState } from 'react';

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
	}>({
		bgl: 0,
		math: 0,
		math7: 2,
		phys7: 2,
	});
	const [errorCalculator, setErrorCalculator] = useState({
		bgl: '',
		math: '',
		math7: '',
		phys7: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCalculator({ ...calculator, [e.target.name]: e.target.value === '' ? '' : parseFloat(e.target.value) });
	};

	useEffect(() => {
		if (calculator.bgl === '' || calculator.math === '' || calculator.math7 === '' || calculator.phys7 === '')
			return;

		let errors = {
			bgl: '',
			math: '',
			math7: '',
			phys7: '',
		};

		if (calculator.bgl < 0 || calculator.bgl > 100) {
			errors.bgl = 'НВО по БЕЛ трябва да е между 0 и 100т.';
		} else {
			errors.bgl = '';
		}

		if (calculator.math < 0 || calculator.math > 100) {
			errors.math = 'НВО по Математика трябва да е между 0 и 100т.';
		} else {
			errors.math = '';
		}

		if (calculator.math7 < 2 || calculator.math7 > 6) {
			errors.math7 = 'Оценка по Математика за 7 клас трябва да е между 2 и 6.';
		} else {
			errors.math7 = '';
		}

		if (calculator.phys7 < 2 || calculator.phys7 > 6) {
			errors.phys7 = 'Оценка по Физика за 7 клас трябва да е между 2 и 6.';
		} else {
			errors.phys7 = '';
		}

		setErrorCalculator(errors);

		if (errors.bgl || errors.math || errors.math7 || errors.phys7) {
			return;
		}

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

export default Calculator;