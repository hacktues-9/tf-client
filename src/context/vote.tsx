import { createContext, useContext, useState, useEffect } from 'react';

interface Vote {
	id: number;
	name: string;
	image?: string; // not sure if we need this
}

const VoteContext = createContext(
	{} as {
		addVote: (category: string, id: number, name: string, image?: string) => void;
		addInfo: (name: string, email: string) => void;
		removeVote: (category: string) => void;
		getVotes: () => {
			software: Vote | null;
			hardware: Vote | null;
			battlebot: Vote | null;
			networks: Vote | null;
		};
		getErrors: () => {
			softwareError: boolean;
			hardwareError: boolean;
			battlebotError: boolean;
			networksError: boolean;
			emailError: boolean;
			nameError: boolean;
			votingError: boolean;
		};
		submitVote: () => boolean;
	}
);

const { Provider } = VoteContext;

const VoteProvider = ({ children }: { children: React.ReactNode }) => {
	const [software, setSoftware] = useState<Vote | null>(null);
	const [hardware, setHardware] = useState<Vote | null>(null);
	const [battlebot, setBattlebot] = useState<Vote | null>(null);
	const [networks, setNetworks] = useState<Vote | null>(null);

	const [softwareError, setSoftwareError] = useState(false);
	const [hardwareError, setHardwareError] = useState(false);
	const [battlebotError, setBattlebotError] = useState(false);
	const [networksError, setNetworksError] = useState(false);

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');

	const [emailError, setEmailError] = useState(false);
	const [nameError, setNameError] = useState(false);

	const [votingError, setVotingError] = useState(false);

	const addVote = (category: string, id: number, name: string, image?: string) => {
		const value = { id, name, image };

		switch (category) {
			case 'software':
				setSoftware(value);
				break;
			case 'hardware':
				setHardware(value);
				break;
			case 'battlebot':
				setBattlebot(value);
				break;
			case 'networks':
				setNetworks(value);
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
			case 'hardware':
				setHardware(null);
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
			hardware,
			battlebot,
			networks,
		};
	};

	const getErrors = () => {
		return {
			softwareError,
			hardwareError,
			battlebotError,
			networksError,
			emailError,
			nameError,
			votingError,
		};
	};

	const validateVote = () => {
		setSoftwareError(software === null);
		setHardwareError(hardware === null);
		setBattlebotError(battlebot === null);
		setNetworksError(networks === null);

		if (software && hardware && battlebot && networks) {
			// api check if category matches with projectId
			// api check if user has already voted - session cookie check

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

	const submitVote = () => {
		if (validateVote() && validateInfo()) {
			// api call to submit vote
			return true;
		} else {
			setVotingError(true);
			return false;
		}
	};

	return (
		<Provider
			value={{
				addVote,
				addInfo,
				removeVote,
				getVotes,
				getErrors,
				submitVote,
			}}
		>
			{children}
		</Provider>
	);
};

export const useVoteContext = () => useContext(VoteContext);
export default VoteProvider;
