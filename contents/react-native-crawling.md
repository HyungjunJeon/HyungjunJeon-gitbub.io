---
date: '2022-03-10'
title: 'React Native에서 크롤링 하기'
categories: ['ReactNative']
summary: 'ReactNative에서의 크롤링 방법'
---

# React Native에서의 크롤링

내일배움단에서 배운 것들을 복습하려고 앱을 만들기 위해 크롤링이 필요해서 JavaScript로 크롤링 하는 법을 학습했다. 그런데 React Native에서 하는 방법은 약간 다르다고 한다. 따라서 그 방법에 대해서 기록하고자 한다. 우선 'cheerio' 라이브러리의 경우 'cheerio-without-node-native'로 대체해서 사용해야 하며 업데이트가 잦아 라이브러리가 따라오지 못하는 문제를 해결하기 위해 fetch를 사용하는 것이 좋다. 크롤링 기본 세팅 코드는 아래와 같다.

```javascript
const cheerio = require("cheerio-without-node-native");
// const request = require("requestretry");

export default async function getPage() {
	let result = [];
	let ulList = [];
	// 전체 페이지 리스트 구하기
	let url = `크롤링할 데이터가 있는 url`;
	const options = {
		method: "GET",
		encoding: null,
		headers: {
			"User-Agent":
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
			Accept:
				"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"Content-Type": "application/x-www-form-urlencoded",
			Cookie:
				"WMONID=m2zajRZqm5f; _ga=GA1.2.1860211416.1622781690; _gid=GA1.2.882171542.1623936429; JSESSIONID=DFFB23E27EFF9769B473D12C31A83487; _gat=1",
		},
	};

	let html = await fetch(url, options);
	let responseOK = html && html.ok;
	if (responseOK) {
		let data = await html.text();
		const $ = cheerio.load(data);

        /*
         (입맛에 맞게 코딩)
        */*
	}
}
```

요소를 선택할 때는 아래와 같은 방식으로 사용한다

```javascript
const $list = $("선택할 요소").toArray();
		const $maxPageNum = $("선택할 요소")
			.text()
			.split("/")[1];
		$list.map((el, idx) => {
			ulList[idx] = parseInt($(el).attr("onclick").split("'")[1]);
```
