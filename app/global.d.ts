// global.d.ts
export {};

declare global {
  interface Window {
    ethereum: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on: (event: string, callback: Function) => void;
      // You can add more methods and properties if needed
    };
  }
}
