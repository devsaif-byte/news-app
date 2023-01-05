import React from "react";

function NewsItem(props) {
	let { title, description, author, image, newsUrl, date } = props;
	return (
		<div
			className="card is-shadowless"
			style={{
				border: "1px solid",
				borderColor: "#EAEAEA",
				display: "flex",
				flexDirection: "column",
				marginTop: "auto",
				minHeight: "100%",
			}}
		>
			<div className="card-image">
				<figure className="image is-3by2 has-text-centerd">
					<img src={image} alt="Placeholder" />
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-5 is-spaced">{title}.</p>
						<p className="subtitle is-6 has-text-danger">
							🖊 {author ? author : "Unknown Author"}
						</p>
					</div>
				</div>

				<div className="content">
					{description}..
					<br />
					<time className="has-text-grey">Published At: {date}</time>
				</div>
			</div>
			<footer
				className="card-footer"
				style={{
					marginTop: "auto",
				}}
			>
				<a
					href={newsUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="card-footer-item has-text-dark has-background-light"
				>
					Read More
				</a>
			</footer>
		</div>
	);
}
export default NewsItem;
