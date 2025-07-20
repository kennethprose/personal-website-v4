import React, { useState } from "react";
import throne_pic from "../assets/throne.jpg";
import ReactRotatingText from "react-rotating-text";

function Home() {
	const [xThrone, setXThrone] = useState(0);
	const [yThrone, setYThrone] = useState(0);

	function showThrone(e) {
		document.getElementById("throne_img").style.opacity = "1";
		setXThrone(
			e.clientY -
			document.getElementById("throne_img").height -
			20 +
			window.pageYOffset
		);
		setYThrone(e.clientX - 90);
	}

	function hideThrone() {
		document.getElementById("throne_img").style.opacity = "0";
	}

	return (
		<div className="mx-auto max-w-3xl w-5/6">
			<div>
				<h1 className="mt-14 text-4xl">Hello!</h1>
				<h3 className="my-5 text-2xl">
					You must be here to learn about my{" "}
					<ReactRotatingText
						items={["education.", "projects.", "work experience."]}
						pause={1000}
					/>
				</h3>
				<br />
				<h2 className="my-5 text-2xl">
					First, let me tell you a little about myself...
				</h2>
				<h4 className="text-xl">
					I am a driven and solution-oriented developer and IT professional with
					a rapidly expanding repertoire of skills. The combination of my
					Computer Science degree and my self-taught IT skills, which have
					blossomed into a successful career in IT, have developed me into a
					well-rounded individual in all things tech. I have developed a
					proficiency in numerous programming languages including Python and
					JavaScript. Additionally, I have used my experience as an
					<span
						className="cursor-pointer text-blue-500"
						onMouseEnter={showThrone}
						onMouseMove={showThrone}
						onMouseLeave={hideThrone}
					>
						{" "}
						Lead IT Technician{" "}
					</span>
					to develop strong communication, teamwork, and customer service
					skills.
				</h4>
				{/* <br />
				<h2 className="my-5 text-2xl">I am currently learning:</h2>
				<img
					className="w-[8em]"
					alt="Go programming language logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png"
				/> */}
			</div>
			<img
				id="throne_img"
				className="absolute border-2 border-black rounded-2xl max-h-65 w-auto opacity-0 transition-opacity duration-500 pointer-events-none"
				src={throne_pic.src}
				alt="Sitting on my IT throne"
				style={{ top: xThrone, left: yThrone }}
			/>
		</div>
	);
}

export default Home;
