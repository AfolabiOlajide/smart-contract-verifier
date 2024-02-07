import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Ethereum } from "@thirdweb-dev/chains"; // Chain the contract you want to verify is on

const sdk = new ThirdwebSDK(Ethereum, {
    secretKey: "YOUR_THIRDWEB_SECRET_KEY", // Use secret key if using on the server, get it from dashboard settings
});

const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Address of the contract you want to verify
const explorerAPIUrl = "BLOCK_EXPLORER_API_URL"; // e.g. https://api.etherscan.io/api
const explorerAPIKey = "YOUR_BLOCK_EXPLORER_API_KEY"; // Generate API key on the explorer


try {
    await sdk.verifier.verifyContract(
        contractAddress,
        explorerAPIUrl,
        explorerAPIKey
    );
    console.log("Contract verified successfully!");
} catch (error) {
    console.error("Error verifying contract:", error);
}