# Layer3 Leaderboard App

## Preview

<img width="1644" alt="Screenshot 2024-06-30 at 16 34 33" src="https://github.com/MadalinaRaicu/layer3-app-next/assets/16125548/7cf42383-f753-48e8-8346-e03e07220878">
<img width="1678" alt="Screenshot 2024-06-30 at 16 30 28" src="https://github.com/MadalinaRaicu/layer3-app-next/assets/16125548/87ef3662-69b4-49e8-ba20-89eb14e34507">
<img width="1680" alt="Screenshot 2024-06-30 at 16 34 52" src="https://github.com/MadalinaRaicu/layer3-app-next/assets/16125548/abe8a36d-8b97-4338-be6d-148f3c314b42">
<img width="1680" alt="Screenshot 2024-06-30 at 16 36 09" src="https://github.com/MadalinaRaicu/layer3-app-next/assets/16125548/f0cf092f-4590-4e66-b7d5-30f8aa5167ec">


## Tech stack

* React
* NextJs
* Ethercan API
* Opensea

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install` or `yarn`.
3. Create a `.env.local` file and add your Etherscan API key:

    ```bash
    ETHERSCAN_API_KEY=your_api_key
    OPENSEA_API_KEY=your_api_key
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
