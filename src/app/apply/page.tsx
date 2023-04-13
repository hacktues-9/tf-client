import Calculator from '@/partials/apply/Calculator';
import Link from 'next/link';

export const metadata = {
	title: {
		default: 'Кандидатстване в ТУЕС',
		template: '%s | TUES Fest 2023',
	},
	description:
		'Научете как може да кандидатствате в ТУЕС след НВО на 7ми клас в ТУЕС - Технологично училище "Електронни системи"',
	keywords: [
		'туес',
		'туес фест',
		'кандидатстване',
		'калкулатор',
		'калкулатор на бал',
		'изчисли бал',
		'изчисли бал 2023',
		'изчисли си бала',
		'изчисли си бала 2023',
		'изчисли бал 2023 туес',
		'кандидатстване в туес',
		'кандидатстване в туес 2023',
		'нво',
		'нво 2023',
		'нво 2023 туес',
		'матури',
		'матури 2023',
		'матури 7ми клас',
		'матури 7 клас',
		'матури 2023 туес',
		'матури 7ми клас туес',
		'матури 7 клас туес',
		'седми клас',
		'седми клас туес',
		'осми клас',
		'гимназия',
		'гимназии',
		'топ гимназии',
		'топ гимназии 2023',
		'топ училища',
		'топ училища 2023',
		'софия',
		'софия туес',
		'минимален бал',
		'минимален бал туес',
		'висок бал',
		'най-висок бал',
	],
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
							<img src="/assets/apply/whytues.jpg" />
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
