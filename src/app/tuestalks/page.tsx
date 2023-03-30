const TUESTalksPage = () => (
	<div className="min-h-screen relative flex items-center justify-center">
		<div className="w-full h-full flex items-center justify-center relative">
			<iframe
				id="embedPlayer"
				src="https://embed.podcasts.apple.com/us/podcast/tues-talks/id1589981184?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark"
				height="450px"
				sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
				allow="autoplay *; encrypted-media *; clipboard-write"
				className="border border-stroke"
				style={{
					width: '100%',
					maxWidth: '660px',
					overflow: 'hidden',
					borderRadius: '15px',
					animation: '2s ease 0s 6 normal none running loading-indicator',
					backgroundColor: 'rgb(228, 228, 228)',
				}}
			></iframe>
		</div>
	</div>
);

export default TUESTalksPage;
