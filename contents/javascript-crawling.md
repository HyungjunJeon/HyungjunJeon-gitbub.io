---
date: '2022-03-07'
title: '자바스크립트로 크롤링 하기'
categories: ['자바스크립트']
summary: '자바스크립트를 이용한 크롤링 방법'
---

# JavaScript로 크롤링을 하려는 이유

스파르타 코딩클럽 내일배움단 스온스에 참여해 수강을 마치고 수강했던 웹개발 종합반과 앱개발 종합반 강좌들을 복습할 겸 웹개발 종합반에서 진행했던 프로젝트들을 React Native를 이용해 앱으로 만들어보고자 하였다. 진행을 하려고 하니 웹개발과 앱개발에는 차이가 있기 때문에 몇가지 수정해야할 부분들이 생겼다. DB의 경우 강좌에서는 MongoDB를 사용했지만 이번에는 Firebase의 RealtimeDB를 이용하고자 한다. 그리고 진행했던 프로젝트들의 작업 내용에 크롤링이 들어있어 앱에서는 어떻게 크롤링할지를 결정해야 했다. 그래서 강좌에서는 크롤링을 Python을 이용했지만 이번에는 JavaScript를 이용하기로 결정하였다. 당연하게도 사용하는 언어부터 달라졌기에 라이브러리도 달라졌고 사용방법도 다르다. 따라서 이번 포스팅을 통해 Python을 이용한 크롤링과 JavaScript를 이용한 크롤링 각각의 방법에 대해서 정리해보고자 한다.

# Python을 이용한 크롤링

Python을 이용해 크롤링을 할 때는'BeautifulSoup'이라는 라이브러리를 사용한다. 따라서 'BeautifulSoup' 라이브러리를 먼저 설치할 필요가 있으며 크롤링 기본 세팅 코드는 아래와 같다.

```python
import requests
from bs4 import BeautifulSoup

# 타겟 URL을 읽어서 HTML를 받아오고,
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('크롤링할 데이터가 있는 url',headers=headers)

# HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦
# soup이라는 변수에 "파싱 용이해진 html"이 담긴 상태가 됨
# 이제 코딩을 통해 필요한 부분을 추출하면 된다.
soup = BeautifulSoup(data.text, 'html.parser')

#############################
# (입맛에 맞게 코딩)
#############################
```

BeautifulSoup에서 HTML 태그를 가져올 때는 select를 사용하는데 사용 방법은 아래와 같다.

```python
# 선택자를 사용하는 방법 (copy selector)
soup.select('태그명')
soup.select('.클래스명')
soup.select('#아이디명')

soup.select('상위태그명 > 하위태그명 > 하위태그명')
soup.select('상위태그명.클래스명 > 하위태그명.클래스명')

# 태그와 속성값으로 찾는 방법
soup.select('태그명[속성="값"]')

# 한 개만 가져오고 싶은 경우
soup.select_one('위와 동일')
```
