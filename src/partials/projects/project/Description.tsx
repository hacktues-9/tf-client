const Description = ({ description }: { description: string }) => (
	<div className="w-full max-w-screen-lg">
		<div className=" bg-bg-color rounded-xl border-2 border-border text-justify">
			<div className="px-8 py-4">
				<p className="text-md whitespace-pre-wrap">{description}</p>
			</div>
		</div>
	</div>
);

export default Description;
