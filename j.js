function fun() {
    console.log("fun");
    window.solana.connect();
    window.solana.on("connect", () => console.log("connected! " + window.solana.publicKey.toString()))
}