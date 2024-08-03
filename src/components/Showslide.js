import React from "react";
import "./Showslide.scss";

function About({ title }) {
  return (
    <div class="untitled">
	<div class="untitled__slides">
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span class="crens-title">CRENS</span>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span class="crens-title">CRENS</span>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span class="crens-title">CRENS</span>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>CRENS</span>
			</div>
		</div>
	</div>
	<div class="untitled__shutters"></div>
</div>
  );
}

export default About;