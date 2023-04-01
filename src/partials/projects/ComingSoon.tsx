const CATEGORIES = [
	{
		name: 'Софтуер',
		img: '/assets/projects/categories/software.png',
	},
	{
		name: 'Роботика',
		img: '/assets/projects/categories/robotics.png',
	},
	{
		name: 'Батъл ботове',
		img: '/assets/projects/categories/battlebots.png',
	},
	{
		name: 'Компютърни мрежи',
		img: '/assets/projects/categories/networks.png',
	},
];

const Category = ({ name, img }: { name: string; img: string }) => (
	<div className="w-full sm:w-8/12 md:w-2/5 aspect-video relative hover:scale-105 duration-300">
		<div className="w-full h-full absolute">
			{/* <div className="w-full h-full bg-gradient-to-b from-black to-transparent" />
			<div className="w-full h-full bg-gradient-to-t from-black to-transparent" /> */}
		</div>
		<div className="w-full h-full absolute flex items-center justify-center">
			<h3 className="text-3xl font-bold text-center text-white drop-shadow-2xl">{name}</h3>
		</div>
		<img src={img} alt={name} className="w-full h-full  object-cover rounded-lg border border-stroke" />
	</div>
);

const ComingSoon = () => (
	<div className="min-h-screen pt-32 pb-16 px-8 md:px-12 flex flex-col items-center gap-8">
		<h2 className="bg-gradient text-transparent font-black text-5xl bg-clip-text">Очаквайте скоро</h2>
		<div className="w-full h-full flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4">
			{CATEGORIES.map((category) => (
				<Category key={category.name} {...category} />
			))}
		</div>
	</div>
);

export default ComingSoon;
