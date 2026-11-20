/* [바시딘 #101808 — 온진담 틀] 후기 관리 파일 — 화면 모양은 건드리지 않고, 무엇을 보일지만 정합니다.
   source  : 'snapshot' = 리뷰에이드에서 옮겨 온 후기 묶음(/cx/data/rv/p<상품>.js·main.js·all.js)을 원본 순서 그대로 씁니다
             (원본 위젯 순서 = 고정 글 먼저 → 추천순·사진 먼저, 원본에서 숨긴 글은 처음부터 없음). 묶음은 tools/build_rv.py 가 만듭니다.
             이 줄을 지우면 청국담처럼 카페24 후기 게시판(4번) 글을 읽습니다.
   rows    : 메인 후기 구역의 칩(분류). products = 그 칩에 넣을 상품 번호들, 비우면 모든 상품.
   pinned  : 맨 앞에 더 고정할 글 번호(앞에 쓴 것이 먼저). 원본 고정 순서는 이미 묶음 파일에 들어 있습니다.
   hidden  : 숨길 글 번호. 숨긴 글은 화면과 평균·평점 비율에서 빠지고, 리뷰 건수에는 그대로 셉니다(#101766).
   minPoint: 이 별점 이상만 보입니다. 0 = 원본처럼 모든 별점을 보입니다.
   remote  : 후기 파일 공개 보관소(GitHub Pages). 손님 화면은 여기서 먼저 읽고, 3초 안에 못 받으면 이 스킨 안 파일을 씁니다(#102103).
   stats   : 상품 카드의 별점 줄(실제 숫자만). 비우면 카드에 별점 줄을 안 보입니다. */
window.CG_REVIEW = {
  "source": "snapshot",
  "rows": [
    {
      "key": "all",
      "name": "전체 후기",
      "products": [],
      "url": "/board/product/list.html?board_no=4"
    }
  ],
  "pinned": [
    2842,
    2825,
    2809,
    2800,
    2820,
    2791,
    2790,
    2778,
    2818,
    2756,
    2781,
    2782,
    914,
    2727,
    2746
  ],
  "hidden": [],
  "minPoint": 0,
  "stats": {
    "11": {
      "avg": 4.86,
      "cnt": 1794
    },
    "18": {
      "avg": 4.86,
      "cnt": 1794
    }
  },
  "updated": "2026-11-20",
  "remote": "https://dycompany-kr.github.io/review-feed/dnjfdjr1ghrl/"
};
