# Layer3 App

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
