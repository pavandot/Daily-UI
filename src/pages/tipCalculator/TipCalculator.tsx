import Logo from "../../asset/tipCalculator/logo.svg";
import Dolor from "../../asset/tipCalculator/icon-dollar.svg";
import PersonSvg from "../../asset/tipCalculator/icon-person.svg";
import React, { useEffect, useState } from "react";
const TipCalculator = () => {
	const [bill, setBill] = useState("");
	const [noOfPerson, setNoOfPerson] = useState("");
	const [tip, setTip] = useState(0);
	const [tipPercentage, setTipPercentage] = useState<null | number>(null);
	const [total, setTotal] = useState(0);
	const [error, setError] = useState("");

	useEffect(() => {
		if (bill && noOfPerson && tipPercentage) {
			const billPerPerson = (parseFloat(bill) / parseFloat(noOfPerson)).toFixed(2);
			const tip = (parseFloat(billPerPerson) * tipPercentage).toFixed(2);
			const total = (parseFloat(billPerPerson) + parseFloat(tip)).toFixed(2);
			setTip(parseFloat(tip));
			setTotal(parseFloat(total));
		}
	}, [bill, noOfPerson, tipPercentage]);

	// Type for html input
	const handleNoOfPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
		const valueInNumber = parseFloat(e.target.value);
		if (valueInNumber < 1) {
			setError("Can't be zero");
		} else {
			setError("");
		}
		setNoOfPerson(e.target.value);
	};

	const customTipPercentage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const valueInNumber = parseFloat(e.target.value);

		if (valueInNumber < 100 && valueInNumber > 0) {
			setTipPercentage(valueInNumber * 0.01);
		}
	};

	const handelReset = () => {
		setBill("");
		setNoOfPerson("");
		setTip(0);
		setTipPercentage(null);
		setTotal(0);
	};

	return (
		<section className=' min-h-screen w-full bg-tipCalculator-light-grayish-cyan pb-10'>
			<div className=' flex justify-center py-12 2xl:pb-20 2xl:pt-32'>
				<img src={Logo} alt='' />
			</div>
			<div className=' flex justify-center'>
				<div className=' grid w-[900px] grid-cols-1 gap-y-10 rounded-t-3xl  bg-tipCalculator-very-light-grayish-cyan p-8 shadow-lg sm:grid-cols-2 sm:gap-x-10 sm:rounded-2xl'>
					<div className=' space-y-7'>
						{/* Amount input */}
						<div>
							<p className=' mb-2 text-tipCalculator-dark-grayish-cyan'>Bill</p>
							<div className=' flex items-center justify-center'>
								<div className=' flex h-11 items-center justify-center rounded-l-lg bg-tipCalculator-light-grayish-cyan pl-4'>
									<img src={Dolor} alt='' />
								</div>
								<input
									type='number'
									value={bill}
									onChange={(e) => setBill(e.target.value)}
									className=' w-full appearance-none rounded-r-lg bg-tipCalculator-light-grayish-cyan py-2 pr-4 text-right text-lg font-bold text-tipCalculator-dark-grayish-cyan outline-none'
								/>
							</div>
						</div>
						{/* Tip selector */}
						<div>
							<p className=' mb-2 text-tipCalculator-dark-grayish-cyan'>Select Tip %</p>
							<div className=' grid grid-cols-3 gap-3'>
								<p
									className={` cursor-pointer rounded  p-2 text-center text-lg font-semibold text-tipCalculator-white transition-colors duration-300 hover:bg-tipCalculator-light-grayish-cyan hover:text-tipCalculator-very-dark-cyan ${
										tipPercentage === 0.05 ? " bg-tipCalculator-strong-cyan text-tipCalculator-very-dark-cyan" : "bg-tipCalculator-very-dark-cyan"
									} `}
									onClick={() => setTipPercentage(0.05)}>
									5%
								</p>
								<p
									className={` cursor-pointer rounded  p-2 text-center text-lg font-semibold text-tipCalculator-white transition-colors duration-300 hover:bg-tipCalculator-light-grayish-cyan hover:text-tipCalculator-very-dark-cyan ${
										tipPercentage === 0.1 ? " bg-tipCalculator-strong-cyan text-tipCalculator-very-dark-cyan" : "bg-tipCalculator-very-dark-cyan"
									} `}
									onClick={() => setTipPercentage(0.1)}>
									10%
								</p>
								<p
									className={` cursor-pointer rounded  p-2 text-center text-lg font-semibold text-tipCalculator-white transition-colors duration-300 hover:bg-tipCalculator-light-grayish-cyan hover:text-tipCalculator-very-dark-cyan ${
										tipPercentage === 0.15 ? " bg-tipCalculator-strong-cyan text-tipCalculator-very-dark-cyan" : "bg-tipCalculator-very-dark-cyan"
									} `}
									onClick={() => setTipPercentage(0.15)}>
									15%
								</p>
								<p
									className={` cursor-pointer rounded  p-2 text-center text-lg font-semibold text-tipCalculator-white transition-colors duration-300 hover:bg-tipCalculator-light-grayish-cyan hover:text-tipCalculator-very-dark-cyan ${
										tipPercentage === 0.25 ? " bg-tipCalculator-strong-cyan text-tipCalculator-very-dark-cyan" : "bg-tipCalculator-very-dark-cyan"
									} `}
									onClick={() => setTipPercentage(0.25)}>
									25%
								</p>
								<p
									className={` cursor-pointer rounded  p-2 text-center text-lg font-semibold text-tipCalculator-white transition-colors duration-300 hover:bg-tipCalculator-light-grayish-cyan hover:text-tipCalculator-very-dark-cyan ${
										tipPercentage === 0.5 ? " bg-tipCalculator-strong-cyan text-tipCalculator-very-dark-cyan" : "bg-tipCalculator-very-dark-cyan"
									} `}
									onClick={() => setTipPercentage(0.5)}>
									50%
								</p>
								<input
									type='number'
									placeholder='Custom'
									min='1'
									max='199'
									onChange={customTipPercentage}
									className=' text-tipCalculator-Grayish cyan placeholder-bold rounded bg-tipCalculator-light-grayish-cyan text-center text-lg  font-bold text-tipCalculator-dark-grayish-cyan placeholder-tipCalculator-dark-grayish-cyan outline-none placeholder:text-lg placeholder:font-bold'
								/>
							</div>
						</div>
						{/* Number of people */}
						<div>
							<div className=' flex items-center justify-between'>
								<p className=' mb-2 text-tipCalculator-dark-grayish-cyan'>Number of People</p>
								<p className=' text-red-500'>{error}</p>
							</div>
							<div className=' flex items-center justify-center'>
								<div className=' flex h-11 items-center justify-center rounded-l-lg bg-tipCalculator-light-grayish-cyan pl-4'>
									<img src={PersonSvg} alt='' />
								</div>
								<input
									type='number'
									value={noOfPerson}
									onChange={(e) => handleNoOfPerson(e)}
									className=' w-full appearance-none rounded-r-lg bg-tipCalculator-light-grayish-cyan py-2 pr-4 text-right text-lg font-bold text-tipCalculator-dark-grayish-cyan outline-none'
								/>
							</div>
						</div>
					</div>
					<div className=' flex flex-col justify-between rounded-xl bg-tipCalculator-very-dark-cyan p-8'>
						<div>
							<div className=' mb-8 flex items-center justify-between'>
								<div>
									<p className=' text-lg font-semibold text-tipCalculator-white'>Tip Amount</p>
									<p className=' font-semibold text-tipCalculator-grayish-cyan'>/ person</p>
								</div>
								<p className=' flex items-center text-4xl font-bold text-tipCalculator-strong-cyan'>
									<span className=' text-3xl'>$</span>
									{tip}
								</p>
							</div>
							<div className=' flex items-center justify-between'>
								<div>
									<p className=' text-lg font-semibold text-tipCalculator-white'>Total</p>
									<p className=' font-semibold text-tipCalculator-grayish-cyan'>/ person</p>
								</div>
								<p className=' flex items-center text-4xl font-bold text-tipCalculator-strong-cyan'>
									<span className=' text-3xl'>$</span>
									{total}
								</p>
							</div>
						</div>
						<button
							onClick={handelReset}
							className=' mt-10 w-full rounded bg-tipCalculator-strong-cyan py-2 text-lg font-semibold  uppercase text-tipCalculator-very-dark-cyan transition-colors duration-300 hover:bg-tipCalculator-light-grayish-cyan sm:mt-0'>
							Reset
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TipCalculator;
