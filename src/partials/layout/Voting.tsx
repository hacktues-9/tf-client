import { useVoteContext } from '@/context/vote';
import { useEffect, useState } from 'react';

const VotingModal = () => {
    const { addInfo, getErrors, submitVote} = useVoteContext();

    return (
        <>
        </>
    );
};

const VotingOverlay = ({ showModal }: { showModal: () => void }) => {
	const { removeVote, getVotes, getErrors } = useVoteContext();

    return (
        <>
        </>
    );
};

const VotingLayout = () => {
    const { getVotes } = useVoteContext();

	const [showOverlay, setShowOverlay] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const continueVoting = () => {
		setShowOverlay(false);
		setShowModal(true);
	};

    useEffect(() => {
        const votes = getVotes();
        if(votes.software || votes.hardware || votes.battlebot || votes.networks) {
            setShowOverlay(true);
        }

        return () => {
            setShowOverlay(false);
        }
    }, [getVotes]);


	return (
		<>
			{showOverlay && <VotingOverlay showModal={continueVoting} />}
			{showModal && <VotingModal />}
		</>
	);
};
