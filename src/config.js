
// config.js
const config = {
    RPC_URL: import.meta.env.VITE_RPC_URL,
    CONTRACT_ADDRESS: import.meta.env.VITE_CONTRACT_ADDRESS,
    BLOCK_EXPLORER_URL: import.meta.env.VITE_BLOCK_EXPLORER_URL,
    CHAIN_ID: import.meta.env.VITE_CHAIN_ID
};

export default config;