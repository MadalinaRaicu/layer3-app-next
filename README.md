# Layer3 Leaderboard App

## Preview 

<img width="1401" alt="Screenshot 2024-06-30 at 17 43 34" src="https://github.com/MadalinaRaicu/layer3-app-next/assets/16125548/7a8a7c63-b237-4817-a42b-79f0633e3e40">
<img width="1396" alt="Screenshot 2024-06-30 at 17 43 57" src="https://github.com/MadalinaRaicu/layer3-app-next/assets/16125548/c7bca85d-1b55-4318-9152-36f930b90dbd">
<img width="1395" alt="Screenshot 2024-06-30 at 17 44 54" src="https://github.com/MadalinaRaicu/layer3-app-next/assets/16125548/5a9dbbe0-a00c-419f-b925-65dafcabfa1c">

## Tech stack 

* React
* NextJs
* Ethercan API
* Opensea API
  
## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install` or `yarn`.
3. Create a `.env.local` file and add your Etherscan API key:

    ```bash
    NEXT_PUBLIC_ETHERSCAN_API_KEY=your_api_key
    ```

4. Run the development server: `npm run dev` or `yarn dev`.

## Features

- Displays a list of top users.
- View detailed information about a user, including on-chain data.
- Uses Next.js for server-side rendering and static site generation.
- Tailwind CSS for styling.

## Trade-offs

- Etherscan API usage limits apply; consider caching data for production use.
- Additional features like displaying NFTs are placeholders and can be extended using OpenSea API or similar.

## Future Enhancements

- Improve UI/UX design.
- Add pagination for user list.
- Implement more robust error handling.
- Enhance blockchain data fetching with more APIs.
