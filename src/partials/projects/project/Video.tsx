'use client';

import { youtubeParse } from '@/utils/youtubeParser';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Video = ({ name, video }: { name: string; video: string }) => {
	const id = youtubeParse(video);

	if (!id) return <p>{'няма видео :('}</p>;

	return <LiteYouTubeEmbed id={id} title={`${name} | TUES Fest 2023`} poster="maxresdefault" />;
};

export default Video;
