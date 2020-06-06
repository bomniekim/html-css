function show(){
    document.write('show!');
}

// show()를 다른 js문서에서도 사용할 수 있도록 추출하기
export default show;

export function show2(){
    document.write('show2!');
}

// default는 하나의 문서에 1개만 사용 가능
// export default show2; // error

export const num=100;
export let age="변수입니다.";