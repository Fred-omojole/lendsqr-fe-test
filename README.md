# Lendsqr Frontend Assessment

- **whaht I built:** I built a clone of lendsqr's v1 finance dashboard
- [live link](https://fred-omojole-lendsqr-fe-test.vercel.app/)

## Getting Started

```bash
git clone <url>
npm install
npm run dev
```

## Tech Stack

- Next.js 16
- Typescript
- SCSS
- Faker
- Jest

## Decisions

- **API layer:** Due to Next.js inbuilt API features, there was no need to use a third-party mock API service. Next.js handles this natively with `NextRequest` and `NextResponse`. I also had to configure environment variables on Vercel since each route runs as a serverless function.

- **Mock data:** I used Faker to generate 500 realistic mock users. It was my first time using it but it was straightforward to understand and structure after some research.

## What was hard

- **SCSS:** I primarily use Tailwind CSS, so switching to SCSS required learning directives like `@use`, `@include`, and how to structure variables and mixins. It's similar to CSS but more powerful once you understand it.

- **Pagination:** Instead of reaching for a third-party component, I built pagination from scratch, including the data slicing logic and the page number generator with ellipsis handling. That took the most problem-solving of anything in the project.

## Deployment

- The project was deployed using a hosting platform called vercel.
- [live link](https://fred-omojole-lendsqr-fe-test.vercel.app/)
