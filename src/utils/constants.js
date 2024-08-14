const CONSTANTS = {
  headerLogo:
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",
  photoURL:
    "https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfn5oPOIGVSlH36wxaH-5oL5d8wztZgxFQeRq_LSU9RKySbIUMGZ2118vOWyS6Xl3wkKoIHBIknKKSY7YjP3lhLbaaMR3u8.png?r=72f",
  bodyBG:
    "https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg",
  API_OPTIONS: {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer" + process.env.REACT_APP_TMDB_API_KE,
    },
  },
  POSTER_URL: "https://image.tmdb.org/t/p/w500",
  Languages: [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
  ],
  OPEN_AI_KEY: process.env.REACT_APP_OPENAI_API_KEY,
};

export default CONSTANTS;
