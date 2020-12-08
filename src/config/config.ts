export const INFURA_PROJECT_ID =
  process.env.INFURA_PROJECT_ID || "6028cd7708c54c91a90df6cefd9bf1a9"; // TODO: inject project id into env variable

// Addresses retrieved from https://docs.opengsn.org/gsn-provider/networks.html
interface GsnRelayConfig {
  relayHub: string;
  stakeManager: string;
  forwarder: string;
  gasPrice: number;
}

const ropstenGsnRelayConfig = {
  relayHub: "0x29e41C2b329fF4921d8AC654CEc909a0B575df20",
  stakeManager: "0x762A4D5F51d8b2F9bA1B0412B45687cE0EfFD92B",
  forwarder: "0x25CEd1955423BA34332Ec1B60154967750a0297D",
  gasPrice: 20000000000, // 20 Gwei
};

const homesteadGsnRelayConfig = {
  relayHub: " 0x515e39f12590a94B102903363336AF9761ebF621",
  stakeManager: "0xcAA46E3a5D2c3c07A0C4F7723c7977c3e643C2B1",
  forwarder: "0xa530F85085C6FE2f866E7FdB716849714a89f4CD",
  gasPrice: 20000000000, // 20 Gwei
};

export const getGSNRelayConfig = (networkId?: string): GsnRelayConfig => {
  if (networkId === "ropsten") return ropstenGsnRelayConfig;
  return homesteadGsnRelayConfig;
};

export const getHttpProviderUri = (networkId: string): string => {
  if (networkId === "local") return `http://localhost:8545`;
  if (networkId === "homestead") return `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`;
  return `https://${networkId}.infura.io/v3/${INFURA_PROJECT_ID}`;
};