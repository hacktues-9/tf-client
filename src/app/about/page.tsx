import Link from 'next/link';

import { TbBriefcase, TbHistory, TbSchool, TbTrophy } from 'react-icons/tb';

const AboutPage = () => {
	return (
		<div className="max-w-screen-2xl min-h-screen m-auto p-8 md:p-12">
			<div>
				<div className="pt-8 md:pt-12 flex flex-col lg:flex-row items-center gap-8">
					<div className="flex flex-col gap-4">
						<h2 className="bg-gradient text-transparent font-black text-3xl sm:text-5xl bg-clip-text">
							За ТУЕС
						</h2>
						<p className="text-md text-justify">
							Технологично училище “Електронни системи” към Технически Университет - София вече над 30
							години подготвя бъдещите лидери на ИТ сектора в България.
						</p>
						<div className="flex flex-col gap-4">
							<h3 className="text-3xl font-bold">Специалности</h3>
							<div className="flex gap-4 flex-col sm:flex-row">
								<div className="relative bg-stroke hover:bg-gradient p-[2px] rounded-xl overflow-hidden">
									<Link
										href="https://elsys-bg.org/priem/specialnost-sistemno-programirane"
										className="h-full relative flex flex-col gap-2 bg-bg-color p-3 rounded-xl"
									>
										<h4 className="text-xl font-bold">Системно програмиране</h4>
										<div className="w-full h-[1px] bg-stroke" />
										<p className="text-md">
											Най-задълбочената училищна програма по програмиране в България, която е
											незаменим трамплин за всеки с амбиции за кариера в ИТ сектора.
										</p>
									</Link>
								</div>
								<div className="relative bg-stroke hover:bg-gradient p-[2px] rounded-xl overflow-hidden">
									<Link
										href="https://elsys-bg.org/priem/specialnost-komputyrni-mreji"
										className="relative h-full flex flex-col gap-2 bg-bg-color p-3 rounded-xl"
									>
										<h4 className="text-xl font-bold">Компютърни мрежи</h4>
										<div className="w-full h-[1px] bg-stroke" />
										<p className="text-md">
											Първата крачка към вълнуващата инженерна професия. Ще учите за проектиране
											на електроника, комуникации, мрежи, роботика и IoT.
										</p>
									</Link>
								</div>
							</div>
							<p className="text-md text-justify">
								Възпитаниците на ТУЕС преминават през задълбочена и специализирана 5-годишна програма,
								която им позволява да се позиционират възможно най-бързо в технологичния сектор. Те са
								сред най-търсените и най-успешните професионалисти и предприемачи в ИТ сектора у нас и в
								чужбина.
							</p>
						</div>
					</div>
					<div className="w-full max-w-3xl lg:w-2/5 lg:block shrink-0 overflow-hidden bg-bg-color border border-stroke rounded-xl">
						<img
							src="/assets/about/about.jpg"
							alt="ТУЕС ученици"
							className="object-center w-full max-w-3xl"
						/>
					</div>
				</div>
				<div className="pt-8 md:pt-12 flex flex-col gap-4">
					<h3 className="bg-gradient text-transparent font-black text-3xl sm:text-5xl bg-clip-text pb-2 -mb-2">
						Обучение
					</h3>
					<p className="text-lg opacity-70">Освен специализирания учебен план ТУЕС предлага:</p>
					<ul className="w-full flex flex-col gap-4">
						<li className="p-4 rounded-xl text-md border border-stroke bg-bg-color">
							Разширено изучаване на английски език.
						</li>
						<li className="p-4 rounded-xl text-md border border-stroke bg-bg-color">
							Учебни програми, които покриват изискванията за задължителна подготовка по
							общообразователните предмети.
						</li>
						<li className="p-4 flex flex-col gap-4 rounded-xl text-md border border-stroke bg-bg-color">
							<p className="text-lg">Извънкласни занимания:</p>
							<ul className="w-full flex flex-col gap-4">
								<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
									Cisco академия за обучение в актуалните мрежови технологии
								</li>
								<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
									вградени микроконтролерни системи на базата на ардуино
								</li>
								<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
									участие в национални и международни състезания по програмиране, компютърни мрежи и
									роботика
								</li>
								<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
									възможност за изява на ежегодното състезание по програмиране HackTUES и изложението
									на ученически проекти ТУЕС Фест
								</li>
								<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
									работилници и лекции на различни теми, водени от професионалисти, завършили ТУЕС
								</li>
								<li className="p-4 rounded-xl text-md border border-stroke bg-[#353444]">
									участие в много различни извънкласни клубове
								</li>
							</ul>
						</li>
						<li className="p-4 rounded-xl text-md border border-stroke bg-bg-color">
							Възможност за участие в зелено и бяло училище.{' '}
						</li>
					</ul>
				</div>
				<div className="pt-8 md:pt-12">
					<div className="bg-bg-color rounded-xl border border-stroke p-4 flex flex-col md:flex-row gap-4">
						<div className="w-full p-4 flex flex-col gap-4 items-center rounded-xl bg-[#353444] border border-stroke">
							<TbSchool size={64} className="opacity-70" />
							<p className="text-5xl font-black bg-gradient text-transparent bg-clip-text">2846</p>
							<p className="text-md opacity-70 text-center">завършили ученици</p>
						</div>
						<div className="w-full p-4 flex flex-col gap-4 items-center rounded-xl bg-[#353444] border border-stroke">
							<TbTrophy size={64} className="opacity-70" />
							<p className="text-5xl font-black bg-gradient text-transparent bg-clip-text">87</p>
							<p className="text-md opacity-70 text-center">награди и отличия</p>
						</div>
						<div className="w-full p-4 flex flex-col gap-4 items-center rounded-xl bg-[#353444] border border-stroke">
							<TbBriefcase size={64} className="opacity-70" />
							<p className="text-5xl font-black bg-gradient text-transparent bg-clip-text">140</p>
							<p className="text-md opacity-70 text-center">стажа на година</p>
						</div>
						<div className="w-full p-4 flex flex-col gap-4 items-center rounded-xl bg-[#353444] border border-stroke">
							<TbHistory size={64} className="opacity-70" />
							<p className="text-5xl font-black bg-gradient text-transparent bg-clip-text">35</p>
							<p className="text-md opacity-70 text-center">годишна история</p>
						</div>
					</div>
				</div>
				<div className="pt-8 md:pt-12 flex flex-col gap-4">
					<h3 className="bg-gradient text-transparent font-black text-3xl sm:text-5xl bg-clip-text pb-2 -mb-2">
						ТУЕС постига успехите си благодарение на
					</h3>
					<ul className="w-full flex flex-col gap-4">
						<li className="p-4 rounded-xl text-md border border-stroke bg-bg-color">
							тясната интеграция с Технически университет - София
						</li>
						<li className="p-4 rounded-xl text-md border border-stroke bg-bg-color">
							гъвкавия си специализиран учебен план
						</li>
						<li className="p-4 rounded-xl text-md border border-stroke bg-bg-color">
							преподаватели от университета и ИТ практици
						</li>
						<li className="p-4 rounded-xl text-md border border-stroke bg-bg-color">
							активната роля на завършилите в живота на училището
						</li>
						<li className="p-4 rounded-xl text-md border border-stroke bg-bg-color">
							тясната връзка с реалния бизнес за учебни и извънучебни занимания, практики по
							специалността, дипломни проекти и др.
						</li>
					</ul>
				</div>
				<div className="pt-8 md:pt-12 flex flex-col gap-6">
					<h2 className="bg-gradient text-transparent font-black text-3xl sm:text-5xl bg-clip-text">
						HackTUES
					</h2>
					<p className="text-justify">
						HackTUES е едно от ключовите събития за ТУЕС, в което ученици от училището в отбори от по 3 - 5
						участници в рамките на два дни създават от нулата свой ИТ проект по зададена тема и след това го
						представят пред професионално жури от преподаватели и ИТ специалисти.
					</p>
					<p className="text-justify">
						Хакатонът дава възможност на участниците да усъвършенстват уменията си по програмиране, работа в
						екип и презентация на готовия проект. Те работят под менторството на специалисти от ИТ бизнеса,
						като понякога тези познанства прерастват в предложения за практика и стаж. Организаторите, от
						своя страна, научават много за процеса на организиране на подобно събитие и силно развиват
						своите меки умения. Общувайки със спонсорите, журито, менторите и доброволците, те си изграждат
						ясна представа за реалната работна обстановка.
					</p>
					<img
						src="/assets/about/hacktues 9.jpg"
						alt="HackTUES 9 организатори"
						className="w-full max-w-3xl m-auto rounded-xl border border-stroke"
					/>
					<p className="text-justify">
						Това е първият и единствен по рода си хакатон в България, организиран от ученици за ученици.
						Събитието стартира през 2015 г. и досега има девет издания. Всяка година HackTUES се организира
						от координационен екип ученици от 11. клас, който се грижи за цялостната организация на
						събитието под менторството на АЗТУЕС и ръководството на ТУЕС.
					</p>
					<p className="text-justify">
						Прочетете невероятната история на деветото му издание с тема Security{' '}
						<Link href="https://tues.bg/novini-i-sybitija/novini/hack-tues-security-642">
							<u>тук</u>
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
