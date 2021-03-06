// 1. id = "age-table"인 테이블
let table = document.getElementById('age-table')

// 2. 테이블 내의 label 요소 모두 찾기 (총 3개)
table.getElementsByTagName('label')
// 또는
document.querySelectorAll('#age-table label')

// 3. 테이블 내의 첫 번째 td (Age가 적힌 곳)
table.rows[0].cells[0]
// 또는
table.getElementsByTagName('td')[0]
// 또는
table.querySelector('td')

// 4. name = "search"인 form
// name이 "search"인 요소는 문서에 단 하나 뿐이라고 가정
let form = document.getElementsByName('search')[0]
// form을 정확히 지정해 줄 수도 있음
document.querySelector('form[name="search"]')

// 5. 폼의 첫 번째 input
form.getElementsByTagName('input')[0]
// 또는
form.querySelector('input')

// 6. 폼의 마지막 input
let inputs = form.querySelectorAll('input') // 모든 input 요소를 찾고
inputs[inputs.length-1] // 마지막 요소 얻기