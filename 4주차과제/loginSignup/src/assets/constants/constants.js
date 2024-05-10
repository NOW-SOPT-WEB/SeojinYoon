const SIGNUP_LABEL = [
  { label: 'ID', detailExist: false },
  {
    label: 'PW',
    detailExist: true,
    detail: '비밀번호 형식은 8자이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다.',
  },
  { label: '닉네임', detailExist: false },
  { label: '전화번호', detailExist: true, detail: '전화번호 형식은 010-****-**** 입니다.' },
];

const LOGIN_LABEL = [{ label: 'ID' }, { label: 'PW' }];

const MYPAGE_LABEL = [
  {
    label: 'ID',
    content: 'authenticationId',
  },
  {
    label: '닉네임',
    content: 'nickname',
  },
  {
    label: '전화번호',
    content: 'phone',
  },
];

const CHANGE_PW_LABEL = [
  { label: '기존 비밀번호', id: 'previousPassword' },
  { label: '새로운 비밀번호', id: 'newPassword' },
  { label: '비밀번호 확인', id: 'newPasswordVerification' },
];

export { SIGNUP_LABEL, LOGIN_LABEL, MYPAGE_LABEL, CHANGE_PW_LABEL };
