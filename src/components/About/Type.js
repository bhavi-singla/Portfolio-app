import React from 'react'
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <span
			style={{
				fontWeight: "lighter",
				color: "red",
			}}
		>
			<Typewriter
				options={{
					strings: [
						"Software Developer",
						"Competitive Programmer",
						"Full Stack Developer",
					],
					autoStart: true,
					loop: true,
					deleteSpeed: 50,
				}}
			/>
		</span>
    )
}

export default Type