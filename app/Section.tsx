'use client';
import React, { useEffect, useState } from 'react';
import traxPng from '@/public/assets/trax.png';
import Image from 'next/image';
import { ethers } from 'ethers';

// Import just a few select items
import { BrowserProvider, parseUnits } from 'ethers';

// Import from a specific export
import { HDNodeWallet } from 'ethers/wallet';
const Section = () => {
	let signer = null;
	let provider;

	const [message, setMessage] = useState<string>('');

	useEffect(() => {
		const get = async () => {
			if (window.ethereum == null) {
				// If MetaMask is not installed, we use the default provider,
				// which is backed by a variety of third-party services (such
				// as INFURA). They do not have private keys installed,
				// so they only have read-only access
				setMessage('MetaMask not installed; using read-only defaults');
				provider = ethers.getDefaultProvider();
			} else {
				// Connect to the MetaMask EIP-1193 object. This is a standard
				// protocol that allows Ethers access to make all read-only
				// requests through MetaMask.
				provider = new ethers.BrowserProvider(window.ethereum);

				// It also provides an opportunity to request access to write
				// operations, which will be performed by the private key
				// that MetaMask manages for the user.
				signer = await provider.getSigner();
			}
		};

		get();
	}, []);
	return (
		<div className='grid  w-full h-full min-h-[700px]'>
			<div className=' flex justify-center items-center h-full text-white'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id modi animi fuga! Velit cupiditate dolor quasi labore aut expedita sunt quisquam ullam, nam quae officiis! Voluptatibus beatae
				harum tempora?
				<br />
				<br />
				{message}
			</div>
		</div>
	);
};

export default Section;
