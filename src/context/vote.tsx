'use client';

import { createContext, useContext, useState, useEffect, useMemo } from 'react';

export interface Vote {
	id: number;
	name: string;
	image?: string; // not sure if we need this
	category?: string;
}

const VoteContext = createContext(
	{} as {
		addVote: (category: string, id: number, name: string, image?: string) => void;
		addInfo: (name: string, email: string) => void;
		removeVote: (category: string) => void;
		getVotes: () => {
			software: Vote | null;
			embedded: Vote | null;
			battlebot: Vote | null;
			networks: Vote | null;
		};
		anyVotes: () => boolean;
		getErrors: () => {
			softwareError: boolean;
			embeddedError: boolean;
			battlebotError: boolean;
			networksError: boolean;
			emailError: boolean;
			nameError: boolean;
			votingError: string;
		};
		validateVote: () => boolean;
		validateInfo: () => boolean;
		validateGivenInfo: (name: string, email: string) => boolean;
		submitVote: () => boolean;
	}
);

const { Provider } = VoteContext;

const VoteProvider = ({ children }: { children: React.ReactNode }) => {
	const [software, setSoftware] = useState<Vote | null>(null);
	const [embedded, setEmbedded] = useState<Vote | null>(null);
	const [battlebot, setBattlebot] = useState<Vote | null>(null);
	const [networks, setNetworks] = useState<Vote | null>(null);

	const [softwareError, setSoftwareError] = useState(false);
	const [embeddedError, setEmbeddedError] = useState(false);
	const [battlebotError, setBattlebotError] = useState(false);
	const [networksError, setNetworksError] = useState(false);

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');

	const [emailError, setEmailError] = useState(false);
	const [nameError, setNameError] = useState(false);

	const [votingError, setVotingError] = useState('');

	const addVote = (category: string, id: number, name: string, image?: string) => {
		const value = { id, name, image, category };

		switch (category) {
			case 'software':
				setSoftware(value);
				setSoftwareError(false);
				break;
			case 'embedded':
				setEmbedded(value);
				setEmbeddedError(false);
				break;
			case 'battlebot':
				setBattlebot(value);
				setBattlebotError(false);
				break;
			case 'networks':
				setNetworks(value);
				setNetworksError(false);
				break;
			default:
				break;
		}
	};

	const addInfo = (name: string, email: string) => {
		setName(name);
		setEmail(email);
	};

	const removeVote = (category: string) => {
		switch (category) {
			case 'software':
				setSoftware(null);
				break;
			case 'embedded':
				setEmbedded(null);
				break;
			case 'battlebot':
				setBattlebot(null);
				break;
			case 'networks':
				setNetworks(null);
				break;
			default:
				break;
		}
	};

	const getVotes = () => {
		return {
			software,
			embedded,
			battlebot,
			networks,
		};
	};

	const getErrors = () => {
		return {
			softwareError,
			embeddedError,
			battlebotError,
			networksError,
			emailError,
			nameError,
			votingError,
		};
	};

	const anyVotes = () => {
		return software !== null || embedded !== null || battlebot !== null || networks !== null;
	};

	const validateVote = () => {
		setSoftwareError(software === null);
		setEmbeddedError(embedded === null);
		setBattlebotError(battlebot === null);
		setNetworksError(networks === null);

		if (software && embedded && battlebot && networks) {
			return true;
		}

		return false;
	};

	const validateInfo = () => {
		setEmailError(email === '');
		setNameError(name === '');

		const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

		if (emailRegex.test(email) && name !== '') {
			return true;
		} else {
			return false;
		}
	};

	const validateGivenInfo = (name: string, email: string) => {
		setEmailError(email === '');
		setNameError(name === '');

		const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

		if (emailRegex.test(email) && name !== '') {
			return true;
		} else {
			return false;
		}
	};

	const submitVote = () => {
		if (validateVote() && validateInfo()) {
			// api submit vote
			console.log('submitting vote');
			fetch('https://api.tuesfest.bg/v1/post/vote', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					software_id: software?.id,
					embedded_id: embedded?.id,
					battlebot_id: battlebot?.id,
					networks_id: networks?.id,
					name,
					email,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('Success:', data);
					if (data.msg === 'Already voted') {
						setVotingError('Вече сте гласували');
					}

					console.error(data.msg);
					if (data.msg === 'Successfully voted') {
						console.log('Successfully voted');
						setVotingError('');
						setBattlebot(null);
						setEmbedded(null);
						setNetworks(null);
						setSoftware(null);
						setEmail('');
						setName('');
						localStorage?.clear();
					}

					return true;
				})
				.catch((error) => {
					setVotingError('Грешка при гласуването');
					console.error('Error:', error);
				});

			return true;
		} else {
			setVotingError('Моля попълнете всички полета');
			return false;
		}
	};

	useEffect(() => {
		console.warn(softwareError, embeddedError, battlebotError, networksError);
	}, [softwareError, embeddedError, battlebotError, networksError]);

	// save to local storage on change
	useMemo(() => {
		if (!anyVotes()) return; // TODO: Fix this, for removing last vote

		localStorage?.setItem('software', JSON.stringify(software));
		localStorage?.setItem('embedded', JSON.stringify(embedded));
		localStorage?.setItem('battlebot', JSON.stringify(battlebot));
		localStorage?.setItem('networks', JSON.stringify(networks));
	}, [software, embedded, battlebot, networks]);

	// load from local storage on mount
	useEffect(() => {
		const software = localStorage?.getItem('software');
		const embedded = localStorage?.getItem('embedded');
		const battlebot = localStorage?.getItem('battlebot');
		const networks = localStorage?.getItem('networks');

		console.log('LOADED FROM LOCAL STORAGE');
		console.log(software);
		console.log(embedded);
		console.log(battlebot);
		console.log(networks);

		if (software) setSoftware(JSON.parse(software));
		if (embedded) setEmbedded(JSON.parse(embedded));
		if (battlebot) setBattlebot(JSON.parse(battlebot));
		if (networks) setNetworks(JSON.parse(networks));
	}, []);

	return (
		<Provider
			value={{
				addVote,
				addInfo,
				removeVote,
				getVotes,
				getErrors,
				anyVotes,
				validateVote,
				validateInfo,
				validateGivenInfo,
				submitVote,
			}}
		>
			{children}
		</Provider>
	);
};

export const useVoteContext = () => useContext(VoteContext);
export default VoteProvider;
