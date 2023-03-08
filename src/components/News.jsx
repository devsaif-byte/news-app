// import * as dotenv from "dotenv";
import * as dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
dotenv.config();
// console.log(process.env);

function News(props) {
	const { category, setProgress } = props;
	// console.log(category);
	// console.log(setProgress);

	const [news, setNews] = useState([]);
	const [page, setPage] = useState(1);
	const [totalRes, setTotalRes] = useState(0);

	// const updateNews = async () => {
	// 	let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}`;
	// 	let data = await fetch(url);
	// 	let parsed_Data = await data.json();
	// 	console.log(parsed_Data);
	// 	setNews(parsed_Data.articles);
	// 	setTotalRes(parsed_Data.totalResults);
	// };
	const updateNews = async () => {
		setProgress(0);
		let url = `http://api.mediastack.com/v1/news?access_key=5217038541d345ee36750ab75016079d&categories=${category}& languages=en&countries=us,ca,cn,in,il,ua,tr,ae,gb,de&count=${page}`;
		let data = await fetch(url);
		setProgress(30);
		let parsed_Data = await data.json();
		console.log(parsed_Data);
		setProgress(70);
		setNews(parsed_Data.data);
		setTotalRes(parsed_Data.total);
		setProgress(100);
	};

	useEffect(() => {
		updateNews();
	}, []);

	const fetchMoreData = async () => {
		// let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
		// 	process.env.REACT_APP_API_KEY
		// }&page=${page + 1}`;
		let url = `http://api.mediastack.com/v1/news?access_key=5217038541d345ee36750ab75016079d&categories=${category}& languages=en&countries=us,ca,cn,in,il,ua,tr,ae,gb,de&count=${
			page + 1
		}`;
		setPage(page + 1);
		let data = await fetch(url);
		let parsed_Data = await data.json();
		console.log(parsed_Data);
		setNews(data.concat(parsed_Data.data));
		setTotalRes(parsed_Data.total);
	};
	// const fetchMoreData = async () => {
	// 	let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
	// 		process.env.REACT_APP_API_KEY
	// 	}&page=${page + 1}`;
	// 	setPage(page + 1);
	// 	let data = await fetch(url);
	// 	let parsed_Data = await data.json();
	// 	console.log(parsed_Data);
	// 	setNews(...parsed_Data.articles, parsed_Data.articles);
	// 	setTotalRes(parsed_Data.totalResults);
	// };
	const prevPage = async () => {
		setPage(page - 1);
		updateNews();
	};

	const nextPage = async () => {
		setPage(page + 1);
		updateNews();
		// setTotalRes();
	};

	return (
		<>
			<section className="hero is-fullheight">
				<h1 className="title is-1 has-text-centered hero-body pb-0 mt-6 mb-0  is-justify-content-center">
					Top Headlines
				</h1>
				<div className="hero-body">
					{/* <InfiniteScroll
					dataLength={news.length}
					// next={fetchMoreData}
					hasMore={news.length !== totalRes}
					loader={<h4>Loading...</h4>}
				> */}
					{/* {items.map((i, index) => (
						<div style={style} key={index}>
							div - #{index}
						</div>
					))} */}

					<div className="container is-fluid columns is-multiline is-centerd is-mobile is-desktop is-variable m-0">
						{news.flatMap((article) => {
							return (
								<div
									className="column is-12-mobile is-4-tablet is-one-fifth-desktop"
									key={article.url}
								>
									<NewsItem
										key={article.url}
										title={article.title}
										description={article.description}
										author={article.author}
										image={article.image}
										newsUrl={article.url}
										date={article.published_at}
									></NewsItem>
								</div>
							);
						})}
					</div>
					{/* </InfiniteScroll> */}
					<hr />
				</div>
				<div className="section is-flex is-justify-content-space-evenly">
					<button
						className="button is-danger is-light"
						disabled={page <= 1}
						onClick={prevPage}
					>
						&larr; Previous
					</button>
					<button className="button is-danger is-light" onClick={nextPage}>
						Next &rarr;
					</button>
				</div>
			</section>
		</>
	);
}

export default News;
