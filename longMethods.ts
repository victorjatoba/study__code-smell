function printOwing(name: string) {
  printBanner();
  printDetails(name);
}

function printDetails(name: string) {
    console.log(`name: ${name}`);
    console.log(`amount: ${getOutstanding()}`);
}

function printBanner() {}
function getOutstanding() {}
