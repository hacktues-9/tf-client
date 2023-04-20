'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Verify = ({
	params,
}: {
	params: {
		token: string;
	};
}) => {
	const { token } = params;
	// get token from url
	const [verified, setVerified] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (token) {
			fetch(`https://api.tuesfest.bg/v1/update/verify_vote`, {
				method: 'UPDATE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					token: token,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('Success:', data);
					setVerified(true);
				})
				.catch((error) => {
					console.error('Error:', error);
					setError(true);
				});
		}
	}, [token]);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			{verified && (
				<div className="text-center">
					<h1 className="text-4xl font-bold">Успешно потвърдихте имейла си!</h1>
					<p className="text-xl mt-4">Вече можете да гласувате за любимите си проекти.</p>
				</div>
			)}
			{error && (
				<div className="text-center">
					<h1 className="text-4xl font-bold">Възникна грешка!</h1>
					<p className="text-xl mt-4">Моля опитайте отново.</p>
				</div>
			)}
		</div>
	);
};

export default Verify;
